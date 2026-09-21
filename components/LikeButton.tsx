"use client"

import { likeProductAction } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { useState, useTransition } from "react"

export function LikeButton({
  id,
  initiaLLikes,
}: {
  id: string
  initiaLLikes: number
}) {
  const [likes, setLikes] = useState(initiaLLikes) //좋아요 숫자값 관리
  const [isPending, steartTransition] = useTransition()

  return (
    <Button
      variant="outline" // 버큰 모양 종류 변경
      disabled={isPending} //저장중 눌리지 않도록. 아래 작업이. 작동중에는 true로 바뀌고 버튼이 비활성화됨
      size="lg"
      onClick={() => {
        steartTransition(async () => {
          const newLikes = await likeProductAction(id) //실행하고
          setLikes(newLikes) //여기로 받아옴
        })
      }}
    >
      {isPending ? "저장 중..." : `좋아요 (${likes})`}
    </Button>
  )
}
