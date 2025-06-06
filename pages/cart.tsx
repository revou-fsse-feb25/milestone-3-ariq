import Navbar from "../components/navbar"
import { useCart } from "../context/CartContext"
import Link from "next/link"

export default function CartPage() {
  const { cart } = useCart()

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center">
            Keranjang kosong nih, yuk belanja dulu! 👉{" "}
            <Link href="/" className="underline text-blue-600">
              Home
            </Link>
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b pb-4">
                <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-green-600 font-bold">$ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
