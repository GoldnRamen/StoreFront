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
        <nav className="fixed w-full left-0 right-0 z-20">
            <div className="flex justify-between p-4 bg-yellow-500 text-amber-900 text-lg h-fit">
                <div className="flex space-x-3 items-center hover:animate-pulse font-sans text-sm">
                    <p>
                        Mrs Tweedy's
                    </p>
                    <img src={"/chicken.png"} width={20} height={2}/>
                </div>
                <ul className="lg:flex justify-between text-sm space-x-3 hidden">
                    <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white"><Link href="/">Home</Link></li>
                    <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white"}><a href="#about">About</a></li>
                    <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white"}><a href="#contact">Contact Us</a></li>
                    <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white"}>Offers</li>
                    <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white">Promos</li>
                </ul>
                <div className={(currentRoute == "/signup" || currentRoute == "/login" || currentRoute == "/") ? "hidden" : ""}>
                    <div className="items-center gap-1 flex">
                        <ImCart className="text-orange-950"/>
                        <p className="text-sm">Cart</p>
                    </div>
                </div>
                <div className="text-sm lg:flex hidden">
                    <Link href={"/login"} className="hover:bg-slate-900 hover:p-2 hover:rounded-lg hover:text-white hover:shadow">Login</Link> 
                    <p>&nbsp;/&nbsp;</p>
                    <Link href={"/signup"} className="hover:bg-slate-900 hover:p-2 hover:rounded-lg hover:text-white hover:shadow">Signup</Link>
                </div>
                <CiMenuBurger className={`text-3xl lg:hidden ${isSmallView ? "text-white bg-black rounded p-1" : " "}`} onClick={() => setSmallView(prevState => !prevState)}/>
                {isSmallView && (
                    <div className="fixed right-0 bg-yellow-500 top-15 w-[40%] hover:bg-white p-6 space-y-4 z-20 lg:hidden">
                        <ul className="lg:hidden flex flex-col justify-between text-sm text-black space-x-3 space-y-8 font-semibold hover:text-yellow-500">
                            <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-black"><Link href="/">Home</Link></li>
                            <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-black"}><a href="#about">About</a></li>
                            <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-black"}><a href="#contact">Contact Us</a></li>
                            <li className={(currentRoute == "/signup" || currentRoute == "/login") ? "hidden" : "cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-black"}>Offers</li>
                            <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-black">Promos</li>
                            <li>
                                <div className="lg:hidden flex items-center text-xs">
                                    <Link href={"/login"} className="hover:bg-slate-900 hover:p-2 hover:rounded-lg hover:text-white hover:shadow">Login</Link> 
                                    <p>&nbsp;/&nbsp;</p>
                                    <Link href={"/signup"} className="hover:bg-slate-900 hover:p-2 hover:rounded-lg hover:text-white hover:shadow">Signup</Link>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                )}
            </div>
            
        </nav>
    )
}