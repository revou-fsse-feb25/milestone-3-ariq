import { GetServerSideProps } from "next"
import { fetchProductById } from "../../lib/api"
import Navbar from "../../components/navbar"
import { useCart } from "../../context/CartContext"

interface ProductDetailProps {
  product: {
    id: number
    title: string
    price: number
    description: string
    images: string[]
  }
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image:
        product.images[0]?.startsWith("http")
          ? product.images[0]
          : "https://via.placeholder.com/300x300?text=No+Image",
    })
    alert(`${product.title} berhasil dimasukkan ke keranjang!`)
  }

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto">
        <img
          src={
            product.images[0]?.startsWith("http")
              ? product.images[0]
              : "https://via.placeholder.com/300x300?text=No+Image"
          }
          alt={product.title}
          className="w-full h-72 object-contain rounded-lg bg-white shadow"
        />
        <h1 className="text-3xl font-bold mt-6">{product.title}</h1>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="mt-4 text-2xl text-green-600 font-semibold">Rp {product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string
  const product = await fetchProductById(id)

  return {
    props: { product },
  }
}
