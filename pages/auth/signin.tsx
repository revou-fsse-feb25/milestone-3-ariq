import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }: any) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Masuk ke Akun</h1>
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/checkout" })}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Masuk dengan {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
