// lib/productStore.ts

let products: any[] = []

export const getProducts = () => products

export const addProduct = (product: any) => {
  products.push(product)
}

export const updateProduct = (id: string, updated: any) => {
  const index = products.findIndex((p) => p.id === id)
  if (index !== -1) {
    products[index] = { ...products[index], ...updated }
  }
}

export const deleteProduct = (id: string) => {
  const index = products.findIndex((p) => p.id === id)
  if (index !== -1) {
    products.splice(index, 1)
  }
}
