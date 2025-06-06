import { signIn } from "next-auth/react"

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Login ke RevoShop</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Login dengan Google
      </button>
    </div>
  )
}
