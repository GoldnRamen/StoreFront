import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { FiLogIn } from "react-icons/fi";

export default function Login(){
    
    return(
        <>
        <div className="relative w-full h-[100vh] flex flex-col">
            <Navbar />
            <img src="https://ideogram.ai/assets/progressive-image/balanced/response/haIL6hEpTPyI3dK5eoD-2A" className="absolute w-full object-cover h-[100vh] object-center opacity-20"></img>
            <div className="z-10 mx-auto flex flex-col rounded-lg shadow-lg shadow-black mt-32 bg-amber-500 lg:w-[30%] w-[80%] lg:h-[70%] h-[60%] items-center lg:text-lg">
                <div className="w-[95%] bg-yellow-100 h-[95%] mx-auto my-auto shadow-gray-950 shadow-lg p-2">
                    <p className="text-center lg:text-3xl text-xl text-yellow-500 font-extrabold mt-5 underline">Login</p>
                    <div>
                        <form className="text-black p-3 lg:mt-[15vh] mt-[5vh] space-y-5 w-[80%] mx-auto">
                            <input placeholder="Username or Email" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full sm:text-sm"/>
                            <div className="flex gap-1 items-center">
                                <input placeholder="Password" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full sm:text-sm"/>
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