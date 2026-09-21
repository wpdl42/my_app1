"use server"

import { revalidatePath } from "next/cache" //이건
import { likeProduct as likeProductInDb } from "@/lib/products" //요고는

export async function likeProductAction(id: string) {
  //이거랑
  const newlikes = await likeProductInDb(id) //요고랑 연결
  revalidatePath(`/products/${id}`) //동적 페이지 링크 바꿔주는거
  return newlikes
}
