// Ambil semua produk untuk homepage
export async function fetchProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products")
  if (!res.ok) throw new Error("Failed to fetch products")
  const data = await res.json()

  const filtered = data
    .filter(
      (product: any) =>
        Array.isArray(product.images) &&
        typeof product.images[0] === "string"
    )
    .slice(0, 20)

  const updated = filtered.map((product: any) => {
    const image =
      product.images[0] && product.images[0].startsWith("http")
        ? product.images[0]
        : "https://via.placeholder.com/300x300?text=No+Image"

    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      images: [image],
    }
  })

  return updated
}


export async function fetchProductById(id: string) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  if (!res.ok) throw new Error("Failed to fetch product detail")
  return await res.json()
}
