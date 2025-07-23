import Dashboard from "@/components/2.ssr/Dashboard";
import { Suspense } from "react";

export const dynamic = 'force-dynamic'

async function fetchData() {
  const res = await fetch('http://localhost:4000/api/data?delay=2000', {
    cache: 'no-store',
  })
  return res.json()
}

async function DashboardWithData() {
  const data = await fetchData()
  return <Dashboard data={data} />
}

export default async function SSRPage() {

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Streaming SSR</h1>
            <Suspense fallback={<p>로딩중...</p>}>
                <DashboardWithData />
            </Suspense>
        </div>
    );
}