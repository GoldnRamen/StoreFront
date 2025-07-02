import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Subnavbar from "@/components/SubNavbar"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SmallSidebar from "@/components/SmallSideBar"
// import Link from "next/link"
export default function Eggs(){
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
                        <div><p className="text-3xl text-white">Eggs</p></div>
                        <ul className="grid lg:grid-cols-3 grid-rows-3 space-y-10 space-x-5 text-center h-full">
                            <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover3(true)} onMouseLeave={()=>setIshover3(false)}><img className="w-full h-full  object-cover rounded-xl" src="https://www.allrecipes.com/thmb/dWktVIbvYRXmCLFeEb4tX5hlMD8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dozen-eggs-in-carton-e0ef92dabf374e5ea9aea7fba2219902.png"/>{ishover3 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Table Eggs</h3> : null}</li>
                            <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover4(true)} onMouseLeave={()=>setIshover4(false)}><img className="w-full h-full  object-cover rounded-xl" src="https://media.istockphoto.com/id/1599935345/photo/chicken-eggs-on-carton.jpg?s=612x612&w=0&k=20&c=zrJaQgzpC0BguJJ53aDLMLVZ2WhdAIr00zrVBM-4pbs="/>{ishover4 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Wholesale/Bulk</h3> : null}</li>
                            <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover5(true)} onMouseLeave={()=>setIshover5(false)}><img className="w-full h-full object-cover rounded-xl" src="https://www.poultryworld.net/app/uploads/2021/04/001_285_rb-image-1701869-848x565.jpeg"/>{ishover5 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Fertile Eggs</h3> : null}</li>
                        </ul>     
                        <Footer className={"absolute bottom-0"}/>
                    </div>
                </div>
            </>
        )
}