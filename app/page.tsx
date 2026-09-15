import { Counter } from "@/components/counter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center justify-center gap-8 py-24 px-8 text-center">
        <span className="rounded-full bg-black/[.06] px-3 py-1 text-xs font-medium tracking-wide text-zinc-600 dark:bg-white/[.08] dark:text-zinc-300">
          Server Component
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          웹서버보안프로그래밍 - 장주민
        </h1>
        <Counter />
        <br />
        <Link
          href="/about"
          className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
        >
          /about 페이지로 이동 →
        </Link>
      </main>
    </div>
  );
}
