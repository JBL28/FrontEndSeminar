// "use client가 없다면 디폴트로 서버 컴포넌트로 작동"
const Header = () => {
  console.log('<Header /> 렌더링 됨');
  
  return (
    <div className="flex gap-4">
      <button className="text-sm text-gray-600 hover:text-black">Login</button>
      <button className="text-sm text-gray-600 hover:text-black">Settings</button>
    </div>
  )
}

export default Header