import { GetStaticProps } from 'next'

export default function Promo() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Promo Spesial RevoShop 🎉</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>Beli 2 dapat 1 gratis (khusus kategori elektronik)</li>
        <li>Gratis ongkir untuk pembelian di atas Rp 500.000</li>
        <li>Diskon 25% untuk pengguna baru</li>
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}
