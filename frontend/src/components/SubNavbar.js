import Link from "next/link"
import Image from "next/image"
import { ImCart } from "react-icons/im";
export default function Subnavbar(){
    // const[isSmallView, setSmallView] = useState(false)
    return(
        <nav className="fixed w-full z-20">
            <div className="flex justify-between p-4 me-2 bg-yellow-500 text-amber-900 text-lg h-fit">
                <div className="flex space-x-3 items-center hover:animate-pulse font-sans text-sm">
                    <p>
                        Mrs Tweedy's
                    </p>
                    <img src={"/chicken.png"} width={20} height={2}/>
                </div>
                <ul className="flex justify-between text-sm space-x-3">
                    <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white"><a href="/">Home</a></li>
                    <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white"><a href="#about">About</a></li>
                    <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white"><a href="#contact">Contact Us</a></li>
                    <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white">Offers</li>
                    <li className="cursor-pointer hover:px-4 hover:border-r hover:border-l hover:text-white">Promos</li>
                </ul>
                <div className="items-center gap-1 flex">
                    <ImCart className="text-orange-950"/>
                    <p className="text-sm">Cart</p>
                </div>
                <p className="text-sm">
                    <Link href={"/login"} className="hover:bg-slate-900 hover:p-2 hover:rounded-lg hover:text-white hover:shadow">Login</Link> / <Link href={"/signup"} className="hover:bg-slate-900 hover:p-2 hover:rounded-lg hover:text-white hover:shadow">Signup</Link>
                </p>
            </div>
            
        </nav>
    )
}