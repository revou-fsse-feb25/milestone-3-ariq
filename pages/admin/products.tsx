"use client"

import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "next/router"

export type Product = {
  id: string
  title: string
  price: number
  image: string
}

export default function AdminProductPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [form, setForm] = useState({ id: "", title: "", price: "", image: "" })
  const [editing, setEditing] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch("/api/products")
    const data = await res.json()
    setProducts(data)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { title, price, image } = form
    if (!title || !price || !image) return alert("All fields are required")

    if (editing) {
      await fetch(`/api/products/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, price: parseFloat(price) })
      })
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, id: uuidv4(), price: parseFloat(price) })
      })
    }

    setForm({ id: "", title: "", price: "", image: "" })
    setEditing(false)
    fetchProducts()
  }

  const handleEdit = (product: Product) => {
    setForm({ ...product, price: product.price.toString() })
    setEditing(true)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" })
    fetchProducts()
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin - Product Management</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editing ? "Update Product" : "Add Product"}
        </button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border p-2">{product.title}</td>
              <td className="border p-2">$ {product.price.toLocaleString("en-US")}</td>
              <td className="border p-2">
                <img src={product.image} alt={product.title} className="h-12 w-12 object-cover" />
              </td>
              <td className="border p-2 space-x-2">
                <button onClick={() => handleEdit(product)} className="bg-yellow-400 px-2 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
