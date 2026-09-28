import { SubmitButton } from "@/components/SubmitButton"
import { createNoticeAction } from "@/lib/actions"

export default function NewNoticePage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col gap-6 px-8 py-16">
      <h1>
        새 공지 작성
        <form action={createNoticeAction}>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title" //id는 그냥 이름
              name="title" //name은 변수. 서버측에서 접근하는 대상
              required
              className="rounded-md border border-black/[.08] px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-white/[.145] dark:bg-transparent"
            ></input>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="author">작성자</label>
            <input
              type="text"
              id="author"
              name="author"
              required
              className="rounded-md border border-black/[.08] px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-white/[.145] dark:bg-transparent"
            ></input>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="content">내용</label>
            <textarea
              rows={6}
              id="content"
              name="content"
              required
              className="rounded-md border border-black/[.08] px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-white/[.145] dark:bg-transparent"
            ></textarea>
          </div>
          <SubmitButton label="등록하기" />
          {/* 이 submit 뭐시기는 form 태그 안쪽에 있어야 됨 */}
        </form>
      </h1>
    </div>
  )
}
