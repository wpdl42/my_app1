"use client" //브라우저가 실행한다 / 브라우저에 의존하는 기능은 이 부분이 꼭 필요함

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus() //pending은 Y/N으로 답하는 곳. ex) disabled=yes or no
  //  disabled={pending}

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "저장 중..." : label}
    </Button>
  )
}
