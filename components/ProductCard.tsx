import Link from "next/link"

interface ProductCardProps {
  id: number
  title: string
  price: number
  image: string
}


export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="bg-white shadow rounded p-4 hover:shadow-lg transition cursor-pointer">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-contain mb-4"
        />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-green-600 font-bold">Rp {price}</p>
      </div>
    </Link>
  )
}
