import Dashboard from "@/components/2.ssr/Dashboard";

// SSG가 아닌 SSR 방식으로 렌더링하는 설정.
export const dynamic = 'force-dynamic'

export default async function SSRPage() {
    // 서버 컴포넌트에서 데이터 패칭
    const res = await fetch('http://localhost:4000/api/data?delay=2000')
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Server-Side Rendering</h1>
            <Dashboard data={data} />
        </div>
    );
}