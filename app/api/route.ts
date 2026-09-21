import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "/api route.ts GET 요청 성공",
    week: 4,
    date: "2024-06-13",
  })
}
