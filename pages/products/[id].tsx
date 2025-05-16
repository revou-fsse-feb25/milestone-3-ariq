import { GetServerSideProps } from 'next'
import { fetchProductById } from '../../lib/api'
import Navbar from '../../components/navbar'
import { useCart } from '../../context/CartContext'

export default function ProductDetail({ product }: { product: any }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    alert(`${product.title} berhasil dimasukkan ke keranjang!`)
  }

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-xl mx-auto">
        <img src={product.image} alt={product.title} className="h-60 mx-auto object-contain" />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <p className="mt-4 text-green-600 font-bold text-xl">Rp {product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string
  const product = await fetchProductById(id)
  return { props: { product } }
}
