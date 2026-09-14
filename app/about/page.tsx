import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1> 이 페이지는 app/about/page.tsx 파일입니다. </h1>
      <Link href="/"> Home 페이지로 이동하기 </Link>
    </div>
  );
}
