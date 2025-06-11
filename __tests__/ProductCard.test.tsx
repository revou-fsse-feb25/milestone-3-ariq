import React from "react" 
import { render, screen } from "@testing-library/react"
import ProductCard from "../components/ProductCard"
import { CartProvider } from "../context/CartContext"

describe("ProductCard Component", () => {
  it("menampilkan judul dan harga produk", () => {
    render(
      <CartProvider>
        <ProductCard
          id={1}
          title="Test Product"
          price={100}
          image="https://via.placeholder.com/300"
        />
      </CartProvider>
    )

    expect(screen.getByText("Test Product")).toBeInTheDocument()
    expect(screen.getByText("$100")).toBeInTheDocument()
  })
})
