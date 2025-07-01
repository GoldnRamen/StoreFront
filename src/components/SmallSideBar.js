import { useState } from "react"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";
import { GiRoastChicken } from "react-icons/gi";
import { IoEggSharp } from "react-icons/io5";
import { FaFeatherAlt } from "react-icons/fa";
import { useRouter } from "next/router";

export default function SmallSidebar(){
    const router = useRouter()
    const currentRoute = router.pathname
    const [showbar, setShowbar] = useState(true)
    const [expandbar, setExpandbar] = useState(false)

    return(
        <>
            <div className={"transition-all duration-500 fixed left-0 top-15 w-full h-fit z-20 py-1 px-3 lg:hidden bg-white opacity-100"}>                
                <ul className={`flex text-gray-400 justify-between`}>
                    <Link href={"/livebird"}>
                        <li className= {(currentRoute == "/livebird" || currentRoute == "/cockerels" || currentRoute == "/broilers" || currentRoute == "/layers" || currentRoute == "/freeRange") ? "p-3 rounded-full bg-white flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center" : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"} ><img src="/chicken2.png" width={20} height={3} /> 
                        {expandbar ? "Live Birds" : null}</li>
                    </Link>
                    <Link href={"/meat"}>
                        <li className={currentRoute == "/meat" ? "p-3 rounded-full bg-white flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center" : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"}><GiRoastChicken className="text-black size-7" /> 
                        {expandbar ? "Meat" : null}</li>
                    </Link>
                    <Link href={"/eggs"}>
                        <li className={currentRoute == "/eggs" ? "p-3 rounded-full bg-white flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center" : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"}><IoEggSharp className="text-black size-5" /> 
                        {expandbar ? "Eggs" : null}</li>
                    </Link>
                    <Link href={"/feathers"}>
                        <li className={currentRoute == "/feathers" ? "p-3 rounded-full bg-white flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center" : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"}><FaFeatherAlt className="text-black size-5" /> 
                        {expandbar ? "Feathers" : null}</li>
                    </Link>
                    <Link href={"/manure"}>
                        <li className={currentRoute == "/manure" ? "p-3 rounded-full bg-white flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center" : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"}><img src="/manure.png" width={20} height={3} /> 
                        {expandbar ? "Manure" : null}</li>
                    </Link>
                </ul>
            </div> 
        </>
    )
}
    