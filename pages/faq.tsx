import { GetStaticProps } from 'next'

export default function FAQ() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Apa itu RevoShop?</h2>
          <p>RevoShop adalah toko online fiktif sebagai latihan coding Next.js dengan data dari FakeStoreAPI.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Apakah saya bisa checkout?</h2>
          <p>Belum. Checkout akan tersedia setelah modul 5 selesai 😁.</p>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}
