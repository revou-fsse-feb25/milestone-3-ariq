export default function AdminHome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🎛️ Admin Menu</h1>
        <div className="space-y-4">
          <a
            href="/admin/orders"
            className="block bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            📦 Lihat Pesanan
          </a>
          <a
            href="/admin/products"
            className="block bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            🛒 Kelola Produk
          </a>
        </div>
      </div>
    </div>
  )
}
