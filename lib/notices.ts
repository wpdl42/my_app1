import { Notice as NoticeModel } from "@/models/Notice"
import { connectDB } from "./mongodb"
// 여기서는 Notice를 NoticeModel로 부르겠다

export type Notice = {
  id: string
  title: string
  author: string
  content: string
  createdAt: string
}

type NoticeDocLike = {
  _id: unknown
  title: string
  author: string
  content: string
  createdAt: Date
}

function toNotice(doc: NoticeDocLike): Notice {
  return {
    id: String(doc._id),
    title: doc.title,
    author: doc.author,
    content: doc.content,
    createdAt: (doc.createdAt ?? new Date()).toISOString().slice(0, 10),
  }
}

async function seedIfEmpty() {
  const count = await NoticeModel.countDocuments()
  if (count > 0) return

  await NoticeModel.insertMany([
    {
      title: "Sample Notice",
      author: "John Doe",
      content: "This is a sample notice.",
    },
    {
      title: "Another Notice",
      author: "Jane Smith",
      content: "This is another sample notice.",
    },
    {
      title: "Third Notice",
      author: "Alice Johnson",
      content: "This is the third sample notice.",
    },
  ])
}

// const notices: Notice[] = [
//   {
//     id: "1",
//     title: "Sample Notice",
//     author: "John Doe",
//     content: "This is a sample notice.",
//     createdAt: "2026-01-01T00:00:00Z",
//   },
//   {
//     id: "2",
//     title: "Another Notice",
//     author: "Jane Smith",
//     content: "This is another sample notice.",
//     createdAt: "2026-01-02T00:00:00Z",
//   },
//   {
//     id: "3",
//     title: "Third Notice",
//     author: "Alice Johnson",
//     content: "This is the third sample notice.",
//     createdAt: "2026-01-03T00:00:00Z",
//   },
// ]

// let nextId = 4

//__ const ___ = _적으면 nextId가 4로 고정되어서 새로운 공지사항을 추가할 때마다 id가 4로 고정됨. 그래서 let으로 바꿔서 새로운 공지사항이 추가될 때마다 id가 증가하도록 함.

// function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }
//위 이건 일부러 로딩 하면 보려 만듦

export async function getNotices(): Promise<Notice[]> {
  await connectDB()
  // await seedIfEmpty()

  const docs = await NoticeModel.find().sort({ createdAt: -1 }).lean()
  return docs.map((doc) => toNotice(doc as NoticeDocLike))

  // await delay(600)
  // return [...notices].sort((a, b) => (a.id < b.id ? 1 : -1))
  //배열 생성 및 정렬
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  await connectDB()
  try {
    const doc = await NoticeModel.findById(id).lean()
    return doc ? toNotice(doc as NoticeDocLike) : undefined
  } catch {
    return undefined
  }

  // await delay(400)
  // return notices.find((n) => n.id === id)
}

export async function createNotice(input: {
  title: string
  author: string
  content: string
}): Promise<Notice> {
  await connectDB()
  const doc = await NoticeModel.create(input)
  return toNotice(doc)

  // await delay(300)
  // const notice: Notice = {
  //   id: String(nextId++),
  //   title: input.title,
  //   author: input.author,
  //   content: input.content,
  //   createdAt: new Date().toISOString().slice(0, 10),
  //}
  // notices.push(notice)
  // return notice
}
