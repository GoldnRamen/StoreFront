import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { ImCart } from "react-icons/im";
export default function Navbar() {
    const router = useRouter()
    const currentRoute = router.pathname

    const[isSmallView, setSmallView] = useState(false)

    return(
        <nav className="fixed w-full left-0 right-0 z-30">
            <div className="flex justify-between p-4 bg-yellow-500 text-amber-900 text-lg h-fit">
                <Link href={"/"}>
                    <div className="flex space-x-3 items-center hover:animate-pulse font-sans text-sm bg-amber-900 p-1 rounded-lg">
                        <p className="text-white">
                            Mrs Tweedy's
                        </p>
                        <img src={"/chicken.png"} width={20} height={2}/>
                    </div>
                </Link>
                <ul className="lg:flex justify-between text-sm space-x-3 hidden transition-all ease-in-out">
                    <li className="cursor-pointer px-2 hover:text-white"><Link href="/">Home</Link></li>
                    <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer px-2 hover:text-white"}><a href="#about">About</a></li>
                    <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer px-2 hover:text-white"}><a href="#contact">Contact Us</a></li>
                    <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer px-2 hover:text-white"}>Offers</li>
                    <li className="cursor-pointer px-2 hover:text-white">Promos</li>
                </ul>
                <div className={(currentRoute == "/signup" || currentRoute == "/login" || currentRoute == "/") ? "hidden" : ""}>
                    <div className="items-center gap-1 flex">
                        <ImCart className="text-orange-950"/>
                        <p className="text-sm">Cart</p>
                    </div>
                </div>
                <div className="text-sm lg:flex hidden items-center align-middle">
                    <Link href={"/login"} className={`${currentRoute === "/login" ? "bg-slate-900 p-1 rounded-lg text-white" : null} hover:bg-slate-900 p-1 hover:rounded-lg hover:text-white hover:shadow`}>Login</Link> 
                    <p>&nbsp;/&nbsp;</p>
                    <Link href={"/signup"} className={`${currentRoute === "/signup" ? "bg-slate-900 p-1 rounded-lg text-white" : null} hover:bg-slate-900 p-1 hover:rounded-lg hover:text-white hover:shadow`}>Signup</Link>
                </div>
                <CiMenuBurger className={`text-3xl lg:hidden ${isSmallView ? "text-white bg-black rounded p-1" : " "}`} onClick={() => setSmallView(prevState => !prevState)}/>
                {isSmallView && (
                    <div className="fixed right-0 bg-yellow-500 top-15 w-[40%] hover:bg-white p-6 space-y-4 z-20 lg:hidden">
                        <ul className="lg:hidden flex flex-col justify-between text-sm text-black space-x-3 space-y-8 font-semibold hover:text-yellow-500">
                            <li className="cursor-pointer px-4 hover:text-black"><Link href="/">Home</Link></li>
                            <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer px-4 hover:text-black"}><a href="#about">About</a></li>
                            <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer px-4 hover:text-black"}><a href="#contact">Contact Us</a></li>
                            <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer px-4 hover:text-black"}>Offers</li>
                            <li className="cursor-pointer px-4 hover:text-black">Promos</li>
                            <li>
                                <div className="lg:hidden flex items-center text-xs">
                                    <Link href={"/login"} className="hover:bg-slate-900 p-1 hover:rounded-lg hover:text-white hover:shadow">Login</Link> 
                                    <p>&nbsp;/&nbsp;</p>
                                    <Link href={"/signup"} className="hover:bg-slate-900 p-1 hover:rounded-lg hover:text-white hover:shadow">Signup</Link>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                )}
            </div>
            
        </nav>
    )
}