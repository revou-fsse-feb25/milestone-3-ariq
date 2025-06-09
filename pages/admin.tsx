// pages/admin.tsx
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

type Order = {
  name: string
  items: string[]
  total: number
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])

  // Email admin yang diperbolehkan akses halaman ini
  const adminEmail = "anaufal0516@gmail.com" 
  useEffect(() => {
    if (status === "loading") return
    if (!session || session.user?.email !== adminEmail) {
      router.push("/auth/signin")
    }
  }, [session, status, router])

  useEffect(() => {
    const stored = localStorage.getItem("orders")
    if (stored) {
      setOrders(JSON.parse(stored))
    }
  }, [])

  if (status === "loading") return <p>Loading...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-4">Selamat datang, {session?.user?.name}!</p>

      <h2 className="text-xl font-semibold mb-2">Daftar Pesanan</h2>
      {orders.length === 0 ? (
        <p>Tidak ada data pesanan.</p>
      ) : (
        orders.map((order, i) => (
          <div key={i} className="bg-white p-4 rounded shadow mb-4">
            <p><strong>Nama:</strong> {order.name}</p>
            <p><strong>Produk:</strong> {Array.isArray(order.items) ? order.items.join(", ") : order.items}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  )
}
