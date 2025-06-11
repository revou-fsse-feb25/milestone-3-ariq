# 🛒 RevoShop – E-Commerce Mini Project

RevoShop adalah aplikasi e-commerce sederhana yang dibangun dengan Next.js (Pages Router) sebagai bagian dari final project bootcamp. Aplikasi ini memungkinkan user untuk melihat produk, menambahkannya ke keranjang, melakukan checkout, serta menyediakan dashboard admin untuk kelola produk dan pesanan.

---

## 🚀 Fitur Utama

### 🔐 Authentication
- Login menggunakan Google (NextAuth.js)
- Proteksi halaman checkout & admin untuk user login saja

### 🛒 Halaman User
- Lihat daftar produk di homepage
- Tambah produk ke cart
- Checkout dengan metode pembayaran (dummy)
- Halaman sukses setelah transaksi

### 🧑‍💼 Halaman Admin
- Lihat seluruh pesanan: `/admin/orders`
- CRUD produk: tambah, edit, hapus produk via form di `/admin/products`
- Halaman menu admin: `/admin` sebagai navigasi admin

### 🔧 API Routes
- `/api/products`: GET & POST produk
- `/api/products/[id]`: PUT & DELETE produk
- Backend disimulasikan dengan array lokal (`productStore.ts`)

### 🔁 ISR & Optimization
- Homepage pakai `getStaticProps` + `revalidate: 10` untuk ISR
- Struktur rapi & ringan dengan Tailwind CSS

---

## 🧪 Testing
- Setup Jest + React Testing Library
- Contoh unit test pada komponen `ProductCard`

---

## 📦 Tech Stack

- ✅ Next.js (Pages Router)
- ✅ TypeScript
- ✅ NextAuth.js
- ✅ Tailwind CSS
- ✅ React Context API
- ✅ Jest + RTL (unit test)

---

## 🛠️ Cara Menjalankan

```bash
npm install
npm run dev
