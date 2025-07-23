import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-8 left-8 flex flex-col gap-4 text-3xl">
      <Link href="/dashboard/1.csr" className="hover:underline text-blue-600">
        새 글 목록
      </Link><br/>
      <Link href="/dashboard/2.ssr" className="hover:underline text-blue-600">
        내 포스팅
      </Link><br/>
      <Link href="/dashboard/3.streaming-ssr" className="hover:underline text-blue-600">
        지금 인기있는 글
      </Link><br/>
      <Link href="/dashboard/4.rsc" className="hover:underline text-blue-600">
        설정
      </Link><br/>
    </div>
  );
}
