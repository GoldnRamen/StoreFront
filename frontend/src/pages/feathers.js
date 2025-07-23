import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Subnavbar from "@/components/SubNavbar"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SmallSidebar from "@/components/SmallSideBar"
// import Link from "next/link"
export default function Feathers(){
    const [ishover, setIshover] = useState(false)
    const [ishover2, setIshover2] = useState(false)
    const [ishover3, setIshover3] = useState(false)
    const [ishover4, setIshover4] = useState(false)
    const [ishover5, setIshover5] = useState(false)
    return(
            <>
                <div className="relative flex flex-col">
                    <Navbar />
                    <Sidebar />
                    <SmallSidebar />
                    <div className="ml-[5%] mt-32 p-4 space-y-10 flex flex-col relative">
                        <div><p className="text-3xl text-white">Feathers</p></div>
                        <ul className="grid lg:grid-cols-3 space-y-10 space-x-5 text-center h-full">
                            <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}><img className="w-full h-full object-cover rounded-xl" src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2022/12/Broiler-Chickens.jpg?fit=850%2C550&ssl=1"/>{ishover ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Stuffing</h3> : null}</li>
                            <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover2(true)} onMouseLeave={()=>setIshover2(false)}><img className="w-full hfull  object-cover rounded-xl" src="https://www.kalmbachfeeds.com/cdn/shop/articles/Hen_Hatching_eggs.jpg?v=1719331215"/>{ishover2 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Novelty Arts and Decoration</h3> : null}</li>
                            <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover3(true)} onMouseLeave={()=>setIshover3(false)}><img className="w-full hfull  object-cover rounded-xl" src="https://www.backyardchickens.com/content/type/61/id/6624176/width/200/height/400"/>{ishover3 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Compost</h3> : null}</li>
                        </ul>     
                        <Footer className={"absolute bottom-0"}/>
                    </div>
                </div>
            </>
        )
}