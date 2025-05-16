import Link from 'next/link'

interface ProductCardProps {
  id: number
  title: string
  price: number
  image: string
}

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-contain mb-4"
        />
        <h2 className="text-md font-semibold line-clamp-2 h-[48px]">
          {title}
        </h2>
        <p className="text-green-600 font-bold mt-2">Rp {price}</p>
      </div>
    </Link>
  )
}
