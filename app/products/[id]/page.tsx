import { LikeButton } from "@/components/LikeButton"
import { getProduct } from "@/lib/products"
import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"

type Props = { params: Promise<{ id: string }> }

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="mx-auto flex max-w-2x1 flex-1 flex-col gap-6 px-8 py-16">
      <Link href="/products" className="text-blue-500 hover:underline">
        - 목록으로
      </Link>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.description}</p>
      <LikeButton id={product.id} initiaLLikes={product.likes} />
      Product ID: {id}
    </div>
  )
}
