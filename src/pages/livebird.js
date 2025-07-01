import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Subnavbar from "@/components/SubNavbar"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import SmallSidebar from "@/components/SmallSideBar"
export default function LiveBird(){
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
                <div className="ml-[5%] mt-32 lg:p-4 space-y-10 flex flex-col relative">
                    <div><p className="text-3xl text-white">Live Birds</p></div>
                    <ul className="grid lg:grid-cols-3 grid-rows-3 space-y-10 space-x-5 text-center h-full">
                        <Link href={"/broilers"}><li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}><img className="w-full h-full object-cover object-top rounded-xl" src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2022/12/Broiler-Chickens.jpg?fit=850%2C550&ssl=1"/>{ishover ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Broilers</h3> : null}</li></Link>
                        <Link href={"/layers"}><li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover2(true)} onMouseLeave={()=>setIshover2(false)}><img className="w-full h-full  object-cover object-top rounded-xl" src="https://www.kalmbachfeeds.com/cdn/shop/articles/Hen_Hatching_eggs.jpg?v=1719331215"/>{ishover2 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Layers</h3> : null}</li></Link>
                        <Link href={"/cockerels"}><li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover3(true)} onMouseLeave={()=>setIshover3(false)}><img className="w-full h-full  object-cover object-top rounded-xl" src="https://myfavoritechicken.com/wp-content/uploads/2020/08/Should-You-Keep-a-Rooster-in-Your-Flock--1024x576.jpg"/>{ishover3 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Cockerels/Roosters</h3> : null}</li></Link>
                        <Link href={"/freeRange"}><li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover4(true)} onMouseLeave={()=>setIshover4(false)}><img className="w-full h-full  object-cover object-top rounded-xl" src="https://i.ytimg.com/vi/VlMPEJePkAA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDNXOjfbAQ5fNSGTHvFHRkSIBAcA"/>{ishover4 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Local/Free-Range</h3> : null}</li></Link>
                        <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover5(true)} onMouseLeave={()=>setIshover5(false)}><img className="w-full h-full object-cover object-top rounded-xl" src="https://lh5.googleusercontent.com/proxy/alrr1cedjSAv6vWCdiJsQlgNeYPspHbefyjyYxS3nrB2AVnP-TE2zeAd7Dcne3RjuXdKY8mVTLbVYI7ZNw9jSux4RElSQBuBip_8K1ZuExIeT_jVCYL-6Im5SAE1xQ57WFe2TvHThw0uhRenqqAt_AEGBwfIhlwBOYQmGTKnxJWQdrYeoqgDXmIffee7pJy2DqE0XQ6BxSytrUGDlUaJDOfo5rtFgdQf5HqdlLXsLjVwtwtETHe0xuJpwtY7TS1J_phiH3uJk3GInA"/>{ishover5 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Chicks</h3> : null}</li>
                    </ul>     
                    <Footer className={"absolute bottom-0"}/>
                </div>
            </div>
        </>
    )
}