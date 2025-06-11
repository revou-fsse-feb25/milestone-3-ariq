import { NextApiRequest, NextApiResponse } from "next"

let productStore: any[] = [] // Simulasi database sementara (RAM)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(productStore)
  } else if (req.method === "POST") {
    const { id, title, price, image } = req.body
    if (!id || !title || !price || !image) {
      return res.status(400).json({ message: "Missing fields" })
    }
    productStore.push({ id, title, price, image })
    res.status(201).json({ message: "Product added" })
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
