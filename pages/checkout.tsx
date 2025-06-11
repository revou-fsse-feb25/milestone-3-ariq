"use client"

import { useSession } from "next-auth/react"
import { useCart } from "../context/CartContext"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function CheckoutPage() {
  const { data: session, status } = useSession()
  const { cart, clearCart } = useCart()
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("cod")

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  const handleCheckout = () => {
    const newOrder = {
      name: session?.user?.name || "Guest",
      items: cart.map((item) => item.product.title),
      total: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      paymentMethod,
      date: new Date().toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "Diproses",
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    const updatedOrders = [...existingOrders, newOrder]
    localStorage.setItem("orders", JSON.stringify(updatedOrders))

    clearCart()
    toast.success("Order placed successfully!")
    setTimeout(() => {
      router.push("/checkout-success")
    }, 1500)
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="mb-4 border rounded p-4">
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.product.title} - Qty: {item.quantity} - $ {item.product.price.toLocaleString("en-US")}
              </li>
            ))}
          </ul>

          <p className="mb-4 text-lg">
            <strong>Total:</strong> ${" "}
            {cart
              .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
              .toLocaleString("en-US")}
          </p>

          <label className="block mb-2 font-semibold">Payment Method</label>
          <select
            className="mb-4 border p-2 rounded w-full"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cod">Cash on Delivery (COD)</option>
            <option value="transfer">Bank Transfer</option>
            <option value="gopay">GoPay</option>
            <option value="ovo">OVO</option>
          </select>

          <button
            onClick={handleCheckout}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow w-full"
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  )
}
