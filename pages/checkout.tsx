"use client"

import { useSession } from "next-auth/react"
import { useCart } from "../context/CartContext"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function CheckoutPage() {
  const { data: session, status } = useSession()
  const { cart, clearCart } = useCart()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  const handleCheckout = () => {
    const newOrder = {
      name: session?.user?.name || "Guest",
      items: cart.map((item) => item.title),
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]))

    clearCart()
    router.push("/admin")
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (status === "loading") return <p>Loading...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Keranjang kamu kosong.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                    <p className="text-sm font-semibold">
                      = ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </p>
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-6 py-2 rounded shadow"
            >
              Bayar Sekarang
            </button>
          </div>
        </>
      )}
    </div>
  )
}
