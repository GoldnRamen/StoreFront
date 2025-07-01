import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { FiLogIn } from "react-icons/fi";

export default function Signup(){
    return(
        <>
        <div className="relative w-full h-[100vh] flex flex-col">
            <Navbar />
            <img src="https://ideogram.ai/assets/progressive-image/balanced/response/haIL6hEpTPyI3dK5eoD-2A" className="absolute w-full object-cover h-full object-center opacity-20"></img>
            <div className="z-60 mx-auto flex flex-col rounded-lg shadow-lg shadow-black mt-32 bg-amber-500 lg:w-[40%] w-[80%] h-[70%] items-center relative">
                <div className="w-[95%] bg-yellow-100 h-[95%] mx-auto my-auto shadow-gray-950 shadow-lg">
                    <p className="text-center lg:text-3xl text-xl text-yellow-500 font-extrabold my-5 underline">Signup</p>
                    <div className="h-[75%] overflow-y-scroll">
                        <form className="text-black p-3 mt-[10vh] space-y-5 w-[80%] mx-auto">
                            <input placeholder="First Name" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"/>
                            <input placeholder="Last Name" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"/>
                            <input placeholder="Username" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"/>
                            <div className="px-2 py-1 flex lg:flex-row flex-col justify-between gap-2 items-end bg-yellow-200 border-yellow-700 border-b-2 rounded">
                                <label className="text-sm lg:block hidden">Date of Birth</label>
                                <label className="text-sm text-left text-yellow-950 lg:hidden">D.O.B</label>
                                <input type={"date"} placeholder="DOB" className="bg-yellow-200 flex w-fit"/>
                            </div>
                            <input placeholder="Address" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"/>
                            <input placeholder="Gender" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"/>
                            <div className="flex gap-1 items-center">
                                <input placeholder="Password" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"/>
                                <button className="lg:p-2 p-1 bg-amber-950 text-white hover:shadow-lg hover:shadow-black rounded-lg sm:text-sm"><FiLogIn /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}