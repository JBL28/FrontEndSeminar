// 사실상 layout.js를 활용하지 않는 상황
// 없으면 에러 떠서 쓰는 것
export default function Layout({children}) {
    return (
        <section>
            {children}
        </section>
    );
}