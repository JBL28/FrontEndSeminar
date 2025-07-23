'use client'

import Sidebar from "@/components/1.csr/Sidebar";
import Header from "@/components/1.csr/Header";
import Dashboard from "@/components/1.csr/Dashboard";
import { useEffect, useState } from "react";

export const dynamic = 'force-dynamic'

export default function CSRPage() {
    const [data, setData] = useState(null);

    // 백엔드 서버에서 데이터를 요청/응답받는 처리 with useEffect
    useEffect(() => {
        // side effect를 작성할 수 있도록 하는 훅
        fetch('http://localhost:4000/api/data?delay=2000')
        .then(response => response.json())
        .then(json => setData(json));
    }, []);
    /*
    동작순서
        1. CSR Page 컴포넌트가 먼저 렌더링됨 -> 컴포넌트가 화면에 마운트 되었다는 의미
        2. 컴포넌트가 마운트되면 useEffect의 콜백이 호출됨(실행됨)
    */

    return (
        <div>
            <section className="min-h-screen flex">
                <aside className="w-64 bg-gray-100 border-r p-4">
                    <Sidebar />
                </aside>

                <div className="flex-1 flex flex-col">
                    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                        <Header />
                    </ header>
                    <main className="flex-1 p-6">
                        <h1 className="text-xl font-bold mb-4">새 글 목록</h1>
                        {/* useEffect를 사용했을 때는 loading.js를 사용할 수 없음 */}
                        {data === null ? (<p>로딩중..</p>) : (<Dashboard data={data}/>)}
                    </main>
                </div>
            </section>
        </div>
    );
}