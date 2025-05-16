import { createContext, useContext, useState, ReactNode } from "react"

// Definisi tipe product
type Product = {
  id: number
  title: string
  price: number
  image: string
}

// Tipe data untuk context-nya
type CartContextType = {
  cart: Product[]
  addToCart: (product: Product) => void
}

// Bikin context kosong dulu
const CartContext = createContext<CartContextType | undefined>(undefined)

// Provider-nya
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook biar gampang dipake
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
