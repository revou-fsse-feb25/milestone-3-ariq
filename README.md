# 🛒 RevoShop – E-Commerce Mini Project

RevoShop adalah aplikasi e-commerce sederhana sebagai bagian dari milestone project bootcamp. Aplikasi ini memungkinkan user untuk melihat produk, menambahkannya ke keranjang, melakukan checkout, serta menyediakan dashboard admin untuk kelola produk dan pesanan.

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
