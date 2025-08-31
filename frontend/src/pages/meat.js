import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Subnavbar from "@/components/SubNavbar"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"
import { IoClose } from "react-icons/io5"
import Navbar from "@/components/Navbar"
import SmallSidebar from "@/components/SmallSideBar"
// import Link from "next/link"
export default function Meat(){
    const [ishover, setIshover] = useState(false)
    const [ishover2, setIshover2] = useState(false)
    const [ishover3, setIshover3] = useState(false)
    const [ishover4, setIshover4] = useState(false)
    const [ishover5, setIshover5] = useState(false)
    const [ishover6, setIshover6] = useState(false)

    const [flipped, setFlipped] = useState(false)
    const [flipped2, setFlipped2] = useState(false)
    const [flipped3, setFlipped3] = useState(false)
    const [flipped4, setFlipped4] = useState(false)
    const [flipped5, setFlipped5] = useState(false)

    const [isVisible1, setIsVisible1] = useState(false)
    const [stillVisible1, setStillVisible1] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [stillVisible2, setStillVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [stillVisible3, setStillVisible3] = useState(false)
    const [isVisible4, setIsVisible4] = useState(false)
    const [stillVisible4, setStillVisible4] = useState(false)

    const [inputValues, setInputValues] = useState({
        orderType: "",
        orderQuantity: "",
        birdSex: "",
        birdBreed: "",
        birdCuts: "",
        orderTotal: ""
    })

    const [birdBreeds, setBirdBreed] = useState({
        Fulani_Ecotype: {rooster: 0, hen: 0},
        Sasso: 0,
        Noilers: 0,
        Kuroiler: 0,
        Broiler: 0,
        Old_Layer: 0
    })

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setBirdBreed((prev) => ({
            ...prev,
            Fulani_Ecotype:{
                ...prev.Fulani_Ecotype,
                [name]: parseInt(value) || 0
            }            
        }));
    }
    const handleQuantity = (breed, type, delta) => {
        setBirdBreed((prev) =>({
            ...prev,
            [breed]:{
                ...prev[breed],
                [type] : Math.max(0, prev[breed][type] + delta)
            }
        }))
    }
    
    const [valRooster, setValRooster] = useState(0)
    const [valHen, setValHen] = useState(0)
    
    
    const handleSubmitWhole = () =>{
        let some = ""
    }
    
    return(
        <>
            <div className="relative flex flex-col">
                <Navbar />
                <Sidebar />
                <SmallSidebar />
                <div className="ml-[5%] mt-32 lg:p-4 space-y-10 flex flex-col relative">
                    <div><p className="text-3xl text-white">Meat</p></div>
                    <ul className="grid lg:grid-cols-3 space-y-10 space-x-5 text-center h-full">
                        <li className="relative hover:text-white h-[300px] text-black text-sm shadow shadow-white rounded-xl z-20" onMouseEnter={() => setIshover2(true)} onMouseLeave={() => setIshover2(false)}>
                            <div className="w-full h-full perspective" >
                                <div className={`relative w-full h-full duration-700 transform-style preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
                                    <div className="absolute w-full h-full backface-hidden cursor-pointer" onClick={() => setFlipped(!flipped)}>
                                        <img className="w-full h-full object-cover rounded-xl" src="https://pipersfarm.com/cdn/shop/products/WholeCockerel1.jpg?crop=center&height=537&v=1631044115&width=844" alt="Whole Bird"/>
                                        {ishover2 && (
                                        <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black text-white rounded-lg p-2">
                                            Whole Birds
                                        </h3>
                                        )}
                                    </div>
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-yellow-500 rounded-lg shadow-lg p-4 cursor-pointer">
                                        <div className="relative">
                                            <IoClose className="text-white flex text-xl absolute hover:p-1 hover:bg-black right-0" onClick={() => setFlipped(false)}/>
                                            <form className="p-4 flex flex-col text-black" onSubmit={handleSubmitWhole}>
                                                <div className="flex gap-2 items-center justify-around mb-3 mx-auto">
                                                    <p className={`bg-amber-500 cursor-pointer p-2 w-fit mx-auto ${isVisible1 ? "animate-none bg-black text-white" : "animate-pulse border rounded-lg"}`} onClick={()=>setIsVisible1(prevState => !prevState)}>{isVisible1 ? "Collapse" : "Place an Order"}</p>
                                                </div>
                                                {isVisible1 &&
                                                    (
                                                        <div className="flex flex-col text-left space-y-2 relative">
                                                            <div className="flex gap-2">
                                                                <p onClick={()=>setStillVisible1(prevState =>!prevState)} className={`p-2 border rounded-lg cursor-pointer text-sm ${stillVisible1 ? "bg-gray-900 text-white text-sm rounded-b-none" : "bg-yellow-200 text-sm"}`}>{stillVisible1 ? "Collapse" : "Select Breed(s)"}</p>
                                                                {stillVisible1 && 
                                                                (<ul className="absolute top-10 right-0 h-[50vh] overflow-y-scroll bg-white text-black w-[100%] border p-1 z-50 cursor-default">
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Fulani Ecotype
                                                                            </p>
                                                                            <div className="flex flex-col">                                                                
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div>
                                                                                            <p>Quantity</p>
                                                                                            <div className="flex items-center space-x-1">
                                                                                                <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer" onClick={(e)=>{e.preventDefault(); handleQuantity("Fulani_Ecotype", "rooster", +1)}}>+</button>
                                                                                                <input name={"rooster"} className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" value={birdBreeds.Fulani_Ecotype.rooster} onChange={handleChange}/>
                                                                                                <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer" onClick={(e)=>{e.preventDefault(); handleQuantity("Fulani_Ecotype", "rooster", -1)}}>-</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white flex justify-center border-gray-500">${birdBreeds.Fulani_Ecotype.rooster * 200}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer" onClick={(e)=>{e.preventDefault(); handleQuantity("Fulani_Ecotype", "hen", +1)}}>+</button>
                                                                                            <input name={"hen"} className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" value={birdBreeds.Fulani_Ecotype.hen} onChange={handleChange}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer" onClick={(e)=>{e.preventDefault(); handleQuantity("Fulani_Ecotype", "hen", -1)}}>-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white flex justify-center border-gray-500">${birdBreeds.Fulani_Ecotype.hen * 150}</p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>  
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Sasso
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Noilers
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Kuroiler
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                )}
                                                            </div>
                                                            {!stillVisible1 && (
                                                                <div className="flex space-x-2 mt-3">
                                                                    <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Proceed to Checkout</button>
                                                                    <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer" type="submit">Add to Cart</button>
                                                                </div>
                                                            )}
                                                            
                                                                
                                                        </div>
                                                    )
                                                }
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl z-18" onMouseEnter={()=>setIshover3(true)} onMouseLeave={()=>setIshover3(false)}>
                                <div className="w-full h-full perspective">
                                <div className={`relative w-full h-full duration-700 transform-style preserve-3d ${flipped2 ? 'rotate-y-180' : ''}`}>
                                    <div className="absolute w-full h-full backface-hidden cursor-pointer" onClick={() => setFlipped2(!flipped2)}>
                                        <img className="w-full h-full  object-cover rounded-xl" src="https://assets.unileversolutions.com/v1/132211096.jpg"/>
                                        {ishover3 ? 
                                        <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">
                                            Chicken Parts
                                        </h3> : null}
                                    </div>
                                    <div className="absolute h-full w-full backface-hidden rotate-y-180 bg-amber-500 rounded-lg shadow-lg p-4 cursor-pointer">
                                        <div className="relative">
                                            <IoClose className="text-white flex text-xl absolute hover:p-1 hover:bg-black right-0" onClick={() => setFlipped2(false)}/>
                                            <form className="p-4 flex flex-col text-black">
                                                <div className="flex gap-2 items-center justify-around mb-3 mx-auto">
                                                    <p className={`bg-amber-500 cursor-pointer p-2 w-fit mx-auto ${isVisible2 ? "animate-none bg-black text-white" : "animate-pulse border rounded-lg"}`} onClick={()=>setIsVisible2(prevState => !prevState)}>{isVisible2 ? "Collapse" : "Place an Order"}</p>
                                                </div>
                                                {isVisible2 &&
                                                    (
                                                        <div className="flex flex-col text-left space-y-2 relative">
                                                            <div className="flex gap-2 justify-between">
                                                                <select className="border bg-amber-200 p-1">
                                                                    <option default disabled>Select Breed</option>
                                                                    <option>Sasso</option>
                                                                    <option>Old Layer</option>
                                                                    <option>Broiler</option>
                                                                    <option>Kuroiler</option>
                                                                    <option>Noiler</option>
                                                                    <option>Fulani Ecotype</option>
                                                                </select>
                                                                <p onClick={()=>setStillVisible2(prevState =>!prevState)} className={`p-2 border rounded-lg cursor-pointer text-sm ${stillVisible2 ? "bg-gray-900 text-white text-sm rounded-b-none" : "bg-yellow-200 text-sm"}`}>{stillVisible2 ? "Collapse" : "Select Cut(s)"}</p>
                                                                {stillVisible2 && 
                                                                (<ul className="absolute top-10 right-0 h-[50vh] overflow-y-scroll bg-white text-black w-[100%] border p-1 z-50 cursor-default">
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Drumsticks
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>  
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Wings
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Breast
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Thighs
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Half(Left Vertical Cut)
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Half(Right Vertical Cut)
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Half(Top Horizontal Cut)
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Half(Bottom Horizontal Cut)
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                )}
                                                            </div>
                                                            {!stillVisible2 && (
                                                                <div className="flex space-x-2 mt-3">
                                                                    <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Proceed to Checkout</button>
                                                                    <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Add to Cart</button>
                                                                </div>
                                                            )}
                                                            
                                                                
                                                        </div>
                                                    )
                                                }
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl z-16" onMouseEnter={()=>setIshover4(true)} onMouseLeave={()=>setIshover4(false)}>
                            <div className="w-full h-full perspective">
                                <div className={`relative w-full h-full duration-700 transform-style preserve-3d ${flipped3 ? 'rotate-y-180' : ''}`}>
                                    <div className="absolute h-full w-full backface-hidden cursor-pointer" onClick={() => setFlipped3(!flipped3)}>
                                        <img className="w-full h-full  object-cover rounded-xl" src="https://draxe.com/wp-content/uploads/2022/11/DrAxeEatGibletsThumbnail.jpg"/>
                                        {ishover4 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">
                                            Offal/Gibblets
                                        </h3> : null}
                                    </div>
                                    <div className="absolute h-full w-full backface-hidden rotate-y-180 bg-amber-600 rounded-lg shadow-lg p-4 cursor-pointer">
                                        <div className="relative">
                                            <IoClose className="text-white flex text-xl absolute hover:p-1 hover:bg-black right-0" onClick={() => setFlipped3(false)}/>
                                            <form className="p-4 flex flex-col text-black">
                                                <div className="flex gap-2 items-center justify-around mb-3 mx-auto">
                                                    <p className={`bg-amber-500 cursor-pointer p-2 w-fit mx-auto ${isVisible3 ? "animate-none bg-black text-white" : "animate-pulse border rounded-lg"}`} onClick={()=>setIsVisible3(prevState => !prevState)}>{isVisible3 ? "Collapse" : "Place an Order"}</p>
                                                </div>
                                                {isVisible3 &&
                                                    (
                                                        <div className="flex flex-col text-left space-y-2 relative">
                                                            <div className="flex gap-2">
                                                                <p onClick={()=>setStillVisible3(prevState =>!prevState)} className={`p-2 border rounded-lg cursor-pointer text-sm ${stillVisible3 ? "bg-gray-900 text-white text-sm rounded-b-none" : "bg-yellow-200 text-sm"}`}>{stillVisible3 ? "Collapse" : "Select Cuts(s)"}</p>
                                                                {stillVisible3 && 
                                                                (<ul className="absolute top-10 right-0 h-[50vh] overflow-y-scroll bg-white text-black w-[100%] border p-1 z-50 cursor-default">
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Heads
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>  
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Feet
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity(1=pair)</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity(1=pair)</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>  
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Neck
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>  
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Heart
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Gizzard
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                         <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Liver
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p className="flex align-text-bottom">Rooster</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity(in grams)</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr className="text-gray-400 my-2"></hr>
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <p>Hen</p>
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <p>Quantity(in grams)</p>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div> 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>                                                                   
                                                                </ul>
                                                                )}
                                                            </div>
                                                            {!stillVisible3 && (
                                                                <div className="flex space-x-2 mt-3">
                                                                    <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Proceed to Checkout</button>
                                                                    <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Add to Cart</button>
                                                                </div>
                                                            )}
                                                            
                                                                
                                                        </div>
                                                    )
                                                }
                                            </form>
                                        </div>
                                    </div>
                                </div>                                    
                            </div>
                        </li>

                        <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl z-14" onMouseEnter={()=>setIshover5(true)} onMouseLeave={()=>setIshover5(false)}>
                            <div className="w-full h-full perspective">
                                <div className={`relative w-full h-full duration-700 transform-style preserve-3d ${flipped4 ? "rotate-y-180" : ""}`}>
                                    <div className="absolute w-full h-full backface-hidden cursor-pointer" onClick={() => setFlipped4(!flipped4)}>
                                        <img className="w-full h-full  object-cover rounded-xl" src="https://rawlygoodfood.co.uk/wp-content/uploads/2022/01/ChickenMince.jpg"/>
                                        {ishover5 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">
                                            Carcass Mince (Dog Food)
                                        </h3> : null}
                                    </div>
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-700 rounded-lg shadow-xl p-4">
                                    <div className="relative">
                                            <IoClose className="text-white flex text-xl absolute hover:p-1 hover:bg-black right-0" onClick={() => setFlipped4(false)}/>
                                            <form className="p-4 flex flex-col text-black">
                                                <div className="flex gap-2 items-center justify-around mb-3 mx-auto">
                                                    <p className={`bg-amber-500 cursor-pointer p-2 w-fit mx-auto ${isVisible4 ? "animate-none bg-black text-white" : "animate-pulse border rounded-lg"}`} onClick={()=>setIsVisible4(prevState => !prevState)}>{isVisible4 ? "Collapse" : "Place an Order"}</p>
                                                </div>
                                                {isVisible4 &&
                                                    (
                                                        <div className="flex flex-col text-left space-y-2 relative">
                                                            <div className="flex gap-2">
                                                                <p onClick={()=>setStillVisible4(prevState =>!prevState)} className={`p-2 border rounded-lg cursor-pointer text-sm ${stillVisible4 ? "bg-gray-900 text-white text-sm rounded-b-none" : "bg-yellow-200 text-sm"}`}>{stillVisible4 ? "Collapse" : "Select Cuts(s)"}</p>
                                                                {stillVisible4 && 
                                                                (<ul className="absolute top-10 right-0 h-[50vh] overflow-y-scroll bg-white text-black w-[100%] border p-1 z-50 cursor-default">
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Whole Bird
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity(in kg)</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>  
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Bones
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity(in kg)</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>  
                                                                    </li>
                                                                    <li className="my-5 p-2 border-b space-y-3">
                                                                        <div className="flex flex-col gap-2 justify-between text-sm">
                                                                            <p className="text-center font-bold">
                                                                                Meat & Bone Meal(MBM)
                                                                            </p>
                                                                            <div className="flex flex-col">
                                                                                <div className="flex items-center p-1 justify-between">
                                                                                    <div className="flex flex-col justify-evenly items-center mx-auto">
                                                                                        <div><p>Quantity(in kg)</p></div>
                                                                                        <div className="flex items-center space-x-1">
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">+</button>
                                                                                            <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                                            <button className="border border-gray-600 px-1 bg-amber-100 rounded cursor-pointer">-</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                        <p>Total</p>
                                                                                        <p className="border h-5 w-12 bg-white border-gray-500"></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                )}
                                                            </div>
                                                            {!stillVisible4 && (
                                                                <div className="flex space-x-2 mt-3">
                                                                    <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Proceed to Checkout</button>
                                                                    <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Add to Cart</button>
                                                                </div>
                                                            )}
                                                            
                                                                
                                                        </div>
                                                    )
                                                }
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="relative hover:text-white h-[300px] text-black shadow text-sm shadow-white rounded-xl z-12" onMouseEnter={()=>setIshover6(true)} onMouseLeave={()=>setIshover6(false)}>
                            <div className="w-full h-full prespective">
                                <div className={`relative w-full h-full duration-700 transform-style preserve-3d ${flipped5 ? 'rotate-y-180' : ''}`}>
                                    <div className="absolute w-full h-full backface-hidden cursor-pointer" onClick={() => setFlipped5(!flipped)}>
                                        <img className="w-full h-full  object-cover rounded-xl" src="https://cdn.shopify.com/s/files/1/1785/5627/files/chicken_wholesale_landscape_1000x.jpg?v=1708285208"/>
                                        {ishover6 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Bulk Orders</h3> : null}
                                    </div>
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-yellow-300 shadow-xl rounded-lg p-4">
                                        <div className="relative">
                                            <IoClose className="text-white flex text-xl absolute cursor-pointer hover:p-1 hover:bg-black right-0" onClick={() => setFlipped5(false)}/>
                                            <h2 className="text-xl font-bold">Back Side</h2>
                                            <p>This is the back of the card.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>     
                    <Footer className={"absolute bottom-0"}/>
                </div>
            </div>
        </>
    )
}