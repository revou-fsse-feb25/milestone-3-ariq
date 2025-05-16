import { GetStaticProps } from 'next'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../lib/api'
import Navbar from '../components/navbar'

export default function Home({ products }: { products: any[] }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
            🎯 Welcome to RevoShop!
          </h1>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts()
  return { props: { products } }
}
