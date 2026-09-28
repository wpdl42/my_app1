"use server"

import { revalidatePath } from "next/cache" //이건
import { likeProduct as likeProductInDb } from "@/lib/products" //요고는
import { redirect } from "next/navigation"
import { createNotice } from "./notices"

export async function likeProductAction(id: string) {
  //이거랑
  const newlikes = await likeProductInDb(id) //요고랑 연결
  revalidatePath(`/products/${id}`) //동적 페이지 링크 바꿔주는거
  return newlikes
}

export async function createNoticeAction(formDate: FormData) {
  const title = String(formDate.get("title") ?? "").trim()
  const author = String(formDate.get("author") ?? "").trim()
  const content = String(formDate.get("content") ?? "").trim()

  if (!title || !author || !content) {
    throw new Error("제목, 작성자, 내용을 모두 입력해주세요.")
  }

  const notice = await createNotice({ title, author, content })
  revalidatePath("/notices")
  redirect(`/notices/${notice.id}`)
}
