import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"

export default function Navbar() {
  const { cart } = useCart() // Ambil cart dari Context API global

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">RevoShop</Link>
      </h1>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/promo">Promo</Link>

        {/* Icon Cart + Bubble Jumlah */}
        <Link href="/cart" className="relative flex items-center gap-1">
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
