"use client"

import { useCart } from "../context/CartContext"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Keranjang</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Keranjang kosong</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="bg-white p-4 mb-4 rounded shadow"
            >
              <p className="font-semibold">{item.product.title}</p>
              <p>${item.product.price.toFixed(2)}</p>

              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.product.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.product.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 mt-2"
              >
                Hapus
              </button>
            </div>
          ))}
          <Link href="/checkout">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  )
}
