"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const ordersPerPage = 5

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]")
    // Tambah default status jika belum ada
    const withStatus = stored.map((order: any) => ({
      ...order,
      status: order.status || "Diproses"
    }))
    setOrders(withStatus)
    localStorage.setItem("orders", JSON.stringify(withStatus))
  }, [])

  const handleDelete = (indexToDelete: number) => {
    const updated = orders.filter((_, i) => i !== indexToDelete)
    setOrders(updated)
    localStorage.setItem("orders", JSON.stringify(updated))
  }

  const handleStatusChange = (indexToUpdate: number, newStatus: string) => {
    const updated = orders.map((order, i) =>
      i === indexToUpdate ? { ...order, status: newStatus } : order
    )
    setOrders(updated)
    localStorage.setItem("orders", JSON.stringify(updated))
  }

  const filteredOrders = orders.filter((order) =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage)
  const startIndex = (currentPage - 1) * ordersPerPage
  const currentOrders = filteredOrders.slice(startIndex, startIndex + ordersPerPage)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name or payment method..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setCurrentPage(1)
        }}
        className="mb-4 border p-2 w-full rounded"
      />

      {currentOrders.length === 0 ? (
        <p>No matching orders found.</p>
      ) : (
        <>
          <table className="w-full border mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Payment</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
                <tr key={startIndex + index}>
                  <td className="p-2 border">{order.name}</td>
                  <td className="p-2 border">$ {order.total.toLocaleString("en-US")}</td>
                  <td className="p-2 border">{order.paymentMethod}</td>
                  <td className="p-2 border">{order.date || "-"}</td>
                  <td className="p-2 border">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(startIndex + index, e.target.value)
                      }
                      className="border p-1 rounded"
                    >
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                      <option value="Dibatalkan">Dibatalkan</option>
                    </select>
                  </td>
                  <td className="p-2 border">
                    <button
                      onClick={() => handleDelete(startIndex + index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
