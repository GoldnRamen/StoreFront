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
    const [isIcon1, setIsIcon1] = useState(false)
    const [isIcon2, setIsIcon2] = useState(false)
    const [isIcon3, setIsIcon3] = useState(false)
    const [isIcon4, setIsIcon4] = useState(false)
    const [isIcon5, setIsIcon5] = useState(false)

    return(
        <>
            <div className={"transition-all duration-500 fixed left-0 top-15 w-full h-fit z-30 py-1 px-3 lg:hidden bg-gradient-to-r from-amber-700 to-amber-200 white opacity-100"}>                
                <ul className={`flex text-gray-400 justify-between`}>
                    <Link href={"/livebird"} onMouseEnter={()=> setIsIcon1(true)} onMouseLeave={()=> setIsIcon1(false)}>
                        <li className= {(currentRoute == "/livebird" || currentRoute == "/cockerels" || currentRoute == "/broilers" || currentRoute == "/layers" || currentRoute == "/freeRange") ? `p-3 bg-gray-300 rounded-full flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center ${isIcon1 && "mb-3"}` : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center relative flex-col"} ><img src="/chicken2.png" width={20} height={3} /></li>
                        {isIcon1 && 
                            <h6 className="absolute bottom-0 text-black text-[10px]">Live&nbsp;Birds</h6>
                        }
                    </Link>
                    <Link href={"/meat"} onMouseEnter={()=> setIsIcon2(true)} onMouseLeave={()=> setIsIcon2(false)}>
                        <li className={currentRoute == "/meat" ? `p-3 rounded-full bg-gray-300 flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center ${isIcon2 && "mb-3"}` : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"}><GiRoastChicken className="text-black size-7" /> 
                            {isIcon2 && 
                                <h6 className="absolute bottom-0 text-[10px]">Meat</h6>
                            }
                        </li>
                    </Link>
                    <Link href={"/eggs"} onMouseEnter={()=> setIsIcon3(true)} onMouseLeave={()=> setIsIcon3(false)}>
                        <li className={currentRoute == "/eggs" ? `p-3 rounded-full bg-gray-300 flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center ${isIcon3 && "mb-3"}` : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"}><IoEggSharp className="text-black size-5" /> 
                            {isIcon3 && 
                                <h6 className="absolute bottom-0 text-[10px]">Eggs</h6>
                            }
                        </li>
                    </Link>
                    <Link href={"/feathers"} onMouseEnter={()=> setIsIcon4(true)} onMouseLeave={()=> setIsIcon4(false)}>
                        <li className={currentRoute == "/feathers" ? `p-3 rounded-full bg-white flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center ${isIcon4 && "mb-3"}` : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"}><FaFeatherAlt className="text-black size-5" /> 
                            {isIcon4 && 
                                <h6 className="absolute bottom-0 text-[10px]">Feathers</h6>
                            }
                        </li>
                    </Link>
                    <Link href={"/manure"} onMouseEnter={()=> setIsIcon5(true)} onMouseLeave={()=> setIsIcon5(false)}>
                        <li className={currentRoute == "/manure" ? `p-3 rounded-full bg-white flex gap-3 hover:underline hover:text-amber-950 cursor-pointer items-center ${isIcon4 && "mb-3"}` : "flex gap-3 hover:underline hover:text-amber-950 cursor-pointer p-3 items-center"}><img src="/manure.png" width={20} height={3} /> 
                            {isIcon5 && 
                                <h6 className="absolute bottom-0 text-[10px]">Manure</h6>
                            }
                        </li>
                    </Link>
                </ul>
            </div> 
        </>
    )
}
    