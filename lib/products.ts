import { StagedRenderingController } from "next/dist/server/app-render/staged-rendering"

export type Product = {
  id: string
  name: string
  description: string
  likes: number
}

const products: Product[] = [
  { id: "1", name: "머그컵", description: "나의 첫 머그컵", likes: 3 },
  { id: "2", name: "티셔츠", description: "나의 첫 티셔츠", likes: 5 },
  { id: "3", name: "캡", description: "나의 첫 캡", likes: 2 },
  { id: "4", name: "자켓", description: "나의 첫 자켓", likes: 4 },
  { id: "5", name: "바지", description: "나의 첫 바지", likes: 6 },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts(): Promise<Product[]> {
  await delay(700)
  return products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400)
  return products.find((p) => p.id === id)
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300)
  const product = products.find((p) => p.id === id)
  if (!product) return 0
  product.likes += 1
  return product.likes
}
