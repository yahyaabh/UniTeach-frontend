import { Link,Outlet } from "react-router-dom"

export default function Header() {
  return (
    <>
    <header className="w-full h-16 bg-blue-dark flex justify-between items-center p-2 sm:p-6 md:px-20 md:py-10">
        <p className="text-yellow-light font-bold underline md:text-lg hover:text-yellow">
            UNITEACH
        </p>
        <ul className=" flex justify-center items-center space-x-1 text-yellow-light">
            <Link to="/register" className="text-sm rounded p-1 bg-green shadow-[0_0_5px_1px_rgba(255,255,255)] md:text-lg md:p-3 hover:bg-blue">sign up</Link>
            <Link to="/login" className="text-sm rounded p-1 bg-green shadow-[0_0_5px_1px_rgba(255,255,255)] md:text-lg md:p-3 hover:bg-blue">log in</Link>
        </ul>
    </header>
    <Outlet/>
    </>
  )
}
