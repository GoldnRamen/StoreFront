import { useEffect, useState } from "react"
import Sidebar from "@/components/Sidebar"
import Subnavbar from "@/components/SubNavbar"
import { useRouter } from "next/router"
import { IoMdCloseCircle } from "react-icons/io";
import Footer from "@/components/Footer"
import { IoClose } from "react-icons/io5";
// import Link from "next/link"
export default function Cockerels(){
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [ishover, setIshover] = useState(false)
    const [ishover2, setIshover2] = useState(false)
    const [ishover3, setIshover3] = useState(false)
    const [ishover4, setIshover4] = useState(false) 
    const [ishover5, setIshover5] = useState(false) 
    const [ishover6, setIshover6] = useState(false) 
    const [ishover7, setIshover7] = useState(false) 
    const [isSeen, setIsSeen] = useState(true) 
    const [isSeen2, setIsSeen2] = useState(true) 
    const [isSeen3, setIsSeen3] = useState(true) 
    const [isSeen4, setIsSeen4] = useState(true) 
    const [isSeen5, setIsSeen5] = useState(true) 
    const [isSeen6, setIsSeen6] = useState(true) 
    const [isSeen7, setIsSeen7] = useState(true) 
    const [isDisplay, setIsDisplay] = useState(false) 
    const [isDisplay2, setIsDisplay2] = useState(false) 
    const [isDisplay3, setIsDisplay3] = useState(false) 
    const [isDisplay4, setIsDisplay4] = useState(false) 
    const [isDisplay5, setIsDisplay5] = useState(false) 
    const [isDisplay6, setIsDisplay6] = useState(false) 
    const [isDisplay7, setIsDisplay7] = useState(false) 
    const [isOverlay, setOverlay] = useState(false)
    const [shade1, setShade1] = useState(false)
    const [shade2, setShade2] = useState(false)
    const [shade3, setShade3] = useState(false)

    const seen =()=>{
        setIsDisplay(true)
        setIsSeen(false)
        setIsSeen2(false)
        setIsSeen3(false)
        setIsSeen4(false)
    }
    const seen2 =()=>{
        setIsDisplay2(true)
        setIsSeen(false)
        setIsSeen2(false)
        setIsSeen3(false)
        setIsSeen4(false)
    }
    const seen3 =()=>{
        setIsDisplay3(true)
        setIsSeen(false)
        setIsSeen2(false)
        setIsSeen3(false)
        setIsSeen4(false)
    }
    const seen4 =()=>{
        setIsDisplay4(true)
        setIsSeen(false)
        setIsSeen2(false)
        setIsSeen3(false)
        setIsSeen4(false)
    }
    const seen5 =()=>{
        setIsDisplay5(true)
        setIsSeen5(false)
        setIsSeen6(false)
        setIsSeen7(false)
    }
    const seen6 =()=>{
        setIsDisplay6(true)
        setIsSeen5(false)
        setIsSeen6(false)
        setIsSeen7(false)
    }
    const seen7 =()=>{
        setIsDisplay7(true)
        setIsSeen5(false)
        setIsSeen6(false)
        setIsSeen7(false)
    }
    const close =()=>{
        setIsDisplay(false)
        setIsDisplay2(false)
        setIsDisplay3(false)
        setIsDisplay4(false)
        setIsDisplay5(false)
        setIsDisplay6(false)
        setIsDisplay7(false)
        setIsSeen(true)
        setIsSeen2(true)
        setIsSeen3(true)
        setIsSeen4(true)
        setIsSeen5(true)
        setIsSeen6(true)
        setIsSeen7(true)
    }

    // useEffect(() => {
    //     const handleScroll = () => {
    //       const scrollPosition = window.scrollY;
    //       const viewHeight = window.innerHeight;
    
    //       setIsVisible(scrollPosition <= 0.9 * viewHeight);
    //     };
    
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   }, []);

    return(
        <>
            <div className="relative flex flex-col">
                <Subnavbar />
                <Sidebar />
                {isOverlay &&
                    <div className="fixed bg-black opacity-100 top-[52px] right-[58%] left-0 h-[100vh] z-50">
                        {shade1 && 
                            <div className="flex my-3 h-[100%] gap-10 w-[100%]">
                                <img src="https://i.pinimg.com/736x/cf/34/1d/cf341d77afd780a6c72c9d3d2891265a.jpg" className="h-[100%] w-[100%] shadow-lg border border-amber-400 my-auto mx-auto flex object-cover"></img>
                                <div className="border flex my-auto border-yellow-500 bg-black opacity-80 h-fit w-[40%] text-sm p-2 text-center items-center absolute bottom-40 ">
                                    lorem ipaokjnvkmjkvo;slk v.l;n;knn/l alksclnvljkbva;lvmad;khvdnv; ld;vnpohl;npvi;adlld;jv;ej;o
                                </div>
                            </div>
                        }
                        {shade2 && 
                            <div className="flex my-3 h-[100%] gap-10 w-[100%]">
                                <img src="https://craftsyhacks.com/wp-content/uploads/2023/10/Feather-crafts.jpg" className="h-[100%] w-[100%] shadow-lg border border-amber-400 my-auto mx-auto flex object-cover"></img>
                                <div className="border flex my-auto border-yellow-500 bg-black opacity-80 h-fit w-[40%] text-sm p-2 text-center items-center absolute bottom-40 ">
                                    lorem ipaokjnvkmjkvo;slk v.l;n;knn/l alksclnvljkbva;lvmad;khvdnv; ld;vnpohl;npvi;adlld;jv;ej;o
                                </div>
                            </div>
                        }
                        {shade3 && 
                            <div className="flex my-3 h-[100%] gap-10 w-[100%]">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2024/6/425616218/FM/YG/MX/64015401/goose-down-feather-pillow.jpg" className="h-[100%] w-[100%] shadow-lg border border-amber-400 my-auto mx-auto flex object-cover"></img>
                                <div className="border flex my-auto border-yellow-500 bg-black opacity-80 h-fit w-[40%] text-sm p-2 text-center items-center absolute bottom-40 ">
                                    lorem ipaokjnvkmjkvo;slk v.l;n;knn/l alksclnvljkbva;lvmad;khvdnv; ld;vnpohl;npvi;adlld;jv;ej;o
                                </div>
                            </div>
                        }
                    </div>
                }
                <div className="ml-[5%] mt-20 p-4 space-y-10 flex flex-col relative">
                    <div><p className="text-3xl text-white">Cockerels/Roosters</p></div>
                    <ul className="grid grid-cols-5 space-y-10 space-x-5 text-center h-full">
                        <li className={`${isVisible ? "sticky top-0" : "relative"} hover:text-white shadow text-sm shadow-white col-span-2 h-fit`} onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}>
                            <img className="w-full object-cover object-top h-[500px]" src="https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/2015/11/05121615/AdobeStock_140945047-1100x734.jpg"/>
                            <form className="p-4 bg-white flex flex-col text-black">
                                <p className={`bg-amber-500 cursor-pointer p-2 w-fit mx-auto mb-3 ${isVisible2 ? "animate-none" : "animate-pulse border rounded-lg"}`} onClick={()=>setIsVisible2(prevState => !prevState)}>Place an Order</p>
                                {isVisible2 &&
                                    (
                                        <div className="flex flex-col text-left space-y-2 relative">
                                            <div className="flex gap-2">
                                                <select className="bg-white text-black w-[60%] border p-1" defaultValue={""}>
                                                    <option value={""} disabled>Select Age of Bird(s)</option>
                                                    <option value={"DOM"}>Day Old Males</option>
                                                    <option value={"Cockerels"}>Cockerels (6-15 Weeks)</option>
                                                    <option value={"Roosters"}>Mature Roosters (6+ months)</option>
                                                </select>
                                                <p onClick={()=>setIsVisible3(prevState =>!prevState)} className="bg-yellow-200 p-2 border rounded-lg cursor-pointer text-sm">Select Breed(s)</p>
                                                {isVisible3 && 
                                                (<ul className="absolute top-10 right-0 h-[50vh] overflow-y-scroll bg-yellow-50 text-black w-[70%] border p-1">
                                                    <li className="my-5 p-2 border-b space-y-3">
                                                        <div className="flex gap-2">
                                                            <p>
                                                                Fulani Ecotype
                                                            </p>
                                                            <input type="checkbox"/>
                                                        </div>
                                                        <div className="flex justify-evenly items-center mx-auto">
                                                            <p>Quantity</p>
                                                            <div className="flex items-center space-x-2">
                                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">+</button>
                                                                <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">-</button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="my-5 p-2 border-b space-y-3">
                                                        <div className="flex gap-2">
                                                            <p>
                                                                Sasso
                                                            </p>
                                                            <input type="checkbox"/>
                                                        </div>
                                                        <div className="flex justify-evenly items-center mx-auto">
                                                            <p>Quantity</p>
                                                            <div className="flex items-center space-x-2">
                                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">+</button>
                                                                <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"} />
                                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">-</button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="my-5 p-2 border-b space-y-3">
                                                        <div className="flex gap-2">
                                                            <p>
                                                                Noilers
                                                            </p>
                                                            <input type="checkbox"/>
                                                        </div>
                                                        <div className="flex justify-evenly items-center mx-auto">
                                                            <p>Quantity</p>
                                                            <div className="flex items-center space-x-2">
                                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">+</button>
                                                                <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"}/>
                                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">-</button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="my-5 p-2 border-b space-y-3">
                                                        <div className="flex gap-2">
                                                            <p>
                                                                Kuroiler
                                                            </p>
                                                            <input type="checkbox"/>
                                                        </div>
                                                        <div className="flex justify-evenly items-center mx-auto">
                                                            <p>Quantity</p>
                                                            <div className="flex items-center space-x-2">
                                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">+</button>
                                                                <input className="border rounded items-center bg-white w-[50px] border-gray-500 text-center" defaultValue={"0"} />
                                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">-</button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                )}
                                            </div>
                                            {/* <div className="space-x-2">
                                                <label>Enter number of birds</label>
                                                <input className="border rounded border-gray-500" />
                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">+</button>
                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">-</button>
                                            </div> */}
                                            <div className="flex space-x-2 mt-3">
                                                <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Add to Cart</button>
                                                <button className="border border-gray-600 p-2 bg-amber-100 hover:bg-amber-300 rounded cursor-pointer">Proceed to Checkout</button>
                                            </div>
                                            
                                                
                                        </div>
                                    )
                                }
                            </form>
                        </li>
                        <li className="relative hover:text-white text-white shadow text-sm shadow-white col-span-3" onMouseEnter={()=>setIshover2(true)} onMouseLeave={()=>setIshover2(false)}>
                            <div className="flex flex-col space-y-[5vh] text-start p-3">
                                <p className="text-2xl text-center">🐓 Cockerels and Roosters: Vital Partners in Poultry Production</p>
                                <p>Cockerels and roosters play a vital role in poultry farming, offering not just the power to fertilize eggs for new generations, but also serving in meat production, flock protection, and even feather harvesting. Understanding their different stages of development and best uses can help any poultry business grow stronger and more sustainable.</p>
                                <ul className="px-10 py-5 mx-auto list-disc flex flex-col gap-10">
                                    <li>Cockerels are young male chickens, typically under 6 months old. They are still developing physically and behaviorally, preparing for their adult roles in the flock.</li>
                                    <li>Roosters are mature male chickens, usually over 6 months old. Roosters are fully capable of mating, protecting hens, crowing loudly, and maintaining a flock’s structure.</li>
                                </ul>

                                <p className="text-2xl underline text-center">Cocks in the Poultry</p>
                                <p className="text-sm">Cocks offer unique opportunities, depending on your needs—whether for fertilization, meat, feathers, or natural flock management.</p>
                                <ul className="p-3 list-disc space-y-[3vh]">
                                    <li className="flex flex-col space-y-[2vh] my-2">
                                        <div className="text-xl flex">🥚<p className="underline">Insemination and Breeding</p></div>
                                        <div className="p-2">
                                            <p>Strong, healthy roosters are critical for flock fertility. In West Africa, breeders prioritize hardy breeds that thrive in the region’s diverse climates and produce vigorous offspring.</p>
                                            <div className="flex flex-row items-center w-full h-[60vh] gap-3">
                                                <img className="w-full h-[85%] object-cover" src="https://cdn.shopify.com/s/files/1/0039/4647/9689/files/breeding-rooster-and-chickens-in-backyard.jpg"/>
                                            </div>
                                            <p>Choice Rooster breeds for insemination and breeding include:</p>      
                                            <div className="grid grid-cols-4 space-x-5 text-center my-5">                                            
                                                {isSeen && <div onClick={()=>seen()} className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://pbs.twimg.com/media/EzlCeuEXMAUAgL_?format=jpg&name=large"/>{ishover ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Noilers</h3> : null}</div>}
                                                {isSeen2 && <div onClick={()=>seen2()} className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover2(true)} onMouseLeave={()=>setIshover2(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://pictures-ghana.jijistatic.net/33238503_NjIwLTk0Ni02YzVjNmQzOGY0LTE.webp"/>{ishover2 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Fulani Ecotype</h3> : null}</div>}
                                                {isSeen3 && <div onClick={()=>seen3()} className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover3(true)} onMouseLeave={()=>setIshover3(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://www.monitor.co.ug/resource/image/1884832/portrait_ratio1x1/1600/1600/7a98475d81e942a3a3dc18efc41e7518/FK/farm04pix.jpg"/>{ishover3 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Sasso</h3> : null}</div>}
                                                {isSeen4 && <div onClick={()=>seen4()} className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover4(true)} onMouseLeave={()=>setIshover4(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://catalysisnepal.com/wp-content/uploads/2021/08/viber_image_2021-08-23_14-26-41-680-1024x768.jpg"/>{ishover4 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Kuroiler</h3> : null}</div>}
                                                {isDisplay && (
                                                    <div className="relative col-span-4">
                                                        <div className="grid grid-cols-5 h-[350px] w-full p-2 border border-amber-400 rounded-lg relative items-center">
                                                            <img src="https://pbs.twimg.com/media/EzlCeuEXMAUAgL_?format=jpg&name=large" className="col-span-2 w-full h-[300px] object-cover"/>
                                                            <div className="col-span-3 flex flex-col items-center align-middle gap-5 p-5">
                                                                <p className="text-center underline">Noiler</p>
                                                                <p>A hybrid breed developed in Nigeria, excellent for both meat and egg production. Noiler roosters are hardy and have high fertility rates.</p>
                                                            </div>
                                                        </div>
                                                        <IoMdCloseCircle className="bg-yellow-300 rounded-full w-5 h-5 text-black cursor-pointer absolute right-5 top-5" onClick={()=>close()} />
                                                    </div>      
                                                )}
                                                {isDisplay2 && (
                                                    <div className="relative col-span-4">
                                                        <div className="grid grid-cols-5 h-[350px] w-full p-2 border border-amber-400 rounded-lg relative items-center">
                                                            <img src="https://pictures-ghana.jijistatic.net/33238503_NjIwLTk0Ni02YzVjNmQzOGY0LTE.webp" className="col-span-2 w-full h-[300px] object-cover object-top"/>
                                                            <div className="col-span-3 flex flex-col items-center align-middle gap-5 p-5">
                                                                <p className="text-center underline">Fulani Ecotype</p>
                                                                <p>Native to northern Nigeria and neighboring regions, these roosters adapt well to harsh, dry climates and maintain good reproductive performance.</p>
                                                            </div>
                                                        </div>
                                                        <IoMdCloseCircle className="bg-yellow-300 cursor-pointer rounded-full w-5 h-5 text-black absolute right-5 top-5" onClick={()=>close()} />
                                                    </div>      
                                                )}
                                                {isDisplay3 && (
                                                    <div className="relative col-span-4">
                                                        <div className="grid grid-cols-5 h-[350px] w-full p-2 border border-amber-400 rounded-lg relative items-center">
                                                            <img src="https://www.monitor.co.ug/resource/image/1884832/portrait_ratio1x1/1600/1600/7a98475d81e942a3a3dc18efc41e7518/FK/farm04pix.jpg" className="col-span-2 w-full h-[300px] object-cover object-top"/>
                                                            <div className="col-span-3 flex flex-col items-center align-middle gap-5 p-5">
                                                                <p className="text-center underline">Sasso</p>
                                                                <p>Imported but popular in West Africa, Sasso roosters are prized for their stamina and strong mating drive, producing highly sought-after meat birds.</p>
                                                            </div>
                                                        </div>
                                                        <IoMdCloseCircle className="bg-yellow-300 cursor-pointer rounded-full w-5 h-5 text-black absolute right-5 top-5" onClick={()=>close()} />
                                                    </div>      
                                                )}
                                                {isDisplay4 && (
                                                    <div className="relative col-span-4">
                                                    <div className="grid grid-cols-5 h-[350px] w-full p-2 border border-amber-400 rounded-lg relative items-center">
                                                            <img src="https://catalysisnepal.com/wp-content/uploads/2021/08/viber_image_2021-08-23_14-26-41-680-1024x768.jpg" className="col-span-2 w-full h-[300px] object-cover object-top"/>
                                                            <div className="col-span-3 flex flex-col items-center align-middle gap-5 p-5">
                                                                <p className="text-center underline">Kuroiler</p>
                                                                <p>A dual-purpose Indian breed thriving in African settings, Kuroiler roosters are highly fertile and ideal for village settings.</p>
                                                            </div>
                                                        </div>
                                                        <IoMdCloseCircle className="bg-yellow-300 rounded-full w-5 h-5 text-black absolute right-5 top-5" onClick={()=>close()} />
                                                    </div>      
                                                )}
                                            </div> 
                                            
                                            {/* <ul className="flex flex-col list-disc gap-5">
                                                <li>Noiler – A hybrid breed developed in Nigeria, excellent for both meat and egg production. Noiler roosters are hardy and have high fertility rates.</li>
                                                <li>Fulani Ecotype – Native to northern Nigeria and neighboring regions, these roosters adapt well to harsh, dry climates and maintain good reproductive performance.</li>
                                                <li>Sasso – Imported but popular in West Africa, Sasso roosters are prized for their stamina and strong mating drive, producing highly sought-after meat birds.</li>
                                                <li>Kuroiler – A dual-purpose Indian breed thriving in African settings, Kuroiler roosters are highly fertile and ideal for village settings.</li>
                                            </ul> */}
                                        </div>
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <div className="text-xl flex">🍖<p className="underline">Meat Production</p></div>
                                        <div className="p-2">
                                            <p>Cockerels and roosters offer excellent opportunities for meat production, especially when using fast-growing, muscular breeds. Cockerel meat tends to be leaner and more flavourful compared to commercial broiler meat, making it a delicacy in many parts of West Africa.</p>      
                                            <div className="flex flex-row items-center w-full h-[60vh] gap-3">
                                                <img className="w-[100%] h-[85%] object-cover" src="https://img.freepik.com/premium-photo/fresh-raw-chicken-meat-parts-arrangement_89816-16254.jpg?semt=ais_hybrid&w=740"/>
                                            </div>
                                            <p>Choice Rooster breeds for quality meat production include:</p>      
                                            <div className="grid grid-cols-3 space-x-5 text-center my-5">                                            
                                                {isSeen5 && <div onClick={()=>seen5()} className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover5(true)} onMouseLeave={()=>setIshover5(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://pbs.twimg.com/media/EzlCeuEXMAUAgL_?format=jpg&name=large"/>{ishover5 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Noilers</h3> : null}</div>}
                                                {isSeen6 && <div onClick={()=>seen6()} className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover6(true)} onMouseLeave={()=>setIshover6(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://www.monitor.co.ug/resource/image/1884832/portrait_ratio1x1/1600/1600/7a98475d81e942a3a3dc18efc41e7518/FK/farm04pix.jpg"/>{ishover6 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Sasso</h3> : null}</div>}
                                                {isSeen7 && <div onClick={()=>seen7()} className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover7(true)} onMouseLeave={()=>setIshover7(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://catalysisnepal.com/wp-content/uploads/2021/08/viber_image_2021-08-23_14-26-41-680-1024x768.jpg"/>{ishover7 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Kuroiler</h3> : null}</div>}
                                                {isDisplay5 && (
                                                    <div className="relative col-span-4">
                                                        <div className="grid grid-cols-5 h-[350px] w-full p-2 border border-amber-400 rounded-lg relative items-center">
                                                            <img src="https://pbs.twimg.com/media/EzlCeuEXMAUAgL_?format=jpg&name=large" className="col-span-2 w-full h-[300px] object-cover"/>
                                                            <div className="col-span-3 flex flex-col items-center align-middle gap-5 p-5">
                                                                <p className="text-center underline">Noiler</p>
                                                                <p>Grows rapidly and offers a great meat-to-bone ratio. They reach good table weight within 16–20 weeks.</p>
                                                            </div>
                                                        </div>
                                                        <IoMdCloseCircle className="bg-yellow-300 rounded-full w-5 h-5 text-black cursor-pointer absolute right-5 top-5" onClick={()=>close()} />
                                                    </div>      
                                                )}
                                                
                                                {isDisplay6 && (
                                                    <div className="relative col-span-4">
                                                        <div className="grid grid-cols-5 h-[350px] w-full p-2 border border-amber-400 rounded-lg relative items-center">
                                                            <img src="https://www.monitor.co.ug/resource/image/1884832/portrait_ratio1x1/1600/1600/7a98475d81e942a3a3dc18efc41e7518/FK/farm04pix.jpg" className="col-span-2 w-full h-[300px] object-cover object-top"/>
                                                            <div className="col-span-3 flex flex-col items-center align-middle gap-5 p-5">
                                                                <p className="text-center underline">Sasso</p>
                                                                <p>Popular for its juicy, high-quality meat. Often raised free-range and harvested for household consumption or market sales.</p>
                                                            </div>
                                                        </div>
                                                        <IoMdCloseCircle className="bg-yellow-300 cursor-pointer rounded-full w-5 h-5 text-black absolute right-5 top-5" onClick={()=>close()} />
                                                    </div>      
                                                )}
                                                {isDisplay7 && (
                                                    <div className="relative col-span-4">
                                                    <div className="grid grid-cols-5 h-[350px] w-full p-2 border border-amber-400 rounded-lg relative items-center">
                                                            <img src="https://catalysisnepal.com/wp-content/uploads/2021/08/viber_image_2021-08-23_14-26-41-680-1024x768.jpg" className="col-span-2 w-full h-[300px] object-cover object-top"/>
                                                            <div className="col-span-3 flex flex-col items-center align-middle gap-5 p-5">
                                                                <p className="text-center underline">Kuroiler</p>
                                                                <p>Renowned for both quantity and quality of meat. Kuroiler males are larger and heavier than indigenous breeds, reaching up to 3–4 kg under proper management.</p>
                                                            </div>
                                                        </div>
                                                        <IoMdCloseCircle className="bg-yellow-300 rounded-full w-5 h-5 text-black absolute right-5 top-5" onClick={()=>close()} />
                                                    </div>      
                                                )}
                                            </div> 
                                        </div>
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <div className="text-xl flex">🎨 <p className="underline"> Feathers and By-Products</p></div>
                                        <div className="p-2 space-y-4">
                                            <div className="flex flex-row items-center w-full h-[60vh] gap-3">
                                                <img className="w-[100%] h-[85%] object-cover" src="https://i.pinimg.com/736x/80/89/14/8089142419af0cabcef6dafff904faac.jpg"/>
                                            </div> 
                                            <p>Feathers are an often-overlooked but valuable by-product of rooster farming, finding much markets in application crafts such as:</p>      
                                            <div className="grid grid-cols-3 gap-5">
                                                <div onMouseEnter={()=>{
                                                    setShade1(true)
                                                    setOverlay(true)
                                                }}
                                                onMouseLeave={()=>{
                                                    setShade1(false)
                                                    setOverlay(false)
                                                }}>
                                                    <div className="rounded-full border-2 border-amber-600 h-[250px]">
                                                        <img src="https://i.pinimg.com/736x/cf/34/1d/cf341d77afd780a6c72c9d3d2891265a.jpg" className="rounded-full h-full w-full object-cover"/>
                                                    </div>
                                                    <p className="text-center">Handicrafts and cultural regalia</p>
                                                </div>
                                                <div onMouseEnter={()=>{
                                                    setShade2(true)
                                                    setOverlay(true)
                                                }}
                                                onMouseLeave={()=>{
                                                    setShade2(false)
                                                    setOverlay(false)
                                                }}>
                                                    <div className="rounded-full border-2 border-amber-600 h-[250px]">
                                                        <img src="https://craftsyhacks.com/wp-content/uploads/2023/10/Feather-crafts.jpg" className="rounded-full h-full w-full object-cover"/>
                                                    </div>
                                                    <p className="text-center">Decorations and fashion accessories</p>
                                                </div>
                                                <div onMouseEnter={()=>{
                                                    setShade3(true)
                                                    setOverlay(true)
                                                }}
                                                onMouseLeave={()=>{
                                                    setShade3(false)
                                                    setOverlay(false)
                                                }}>
                                                    <div className="rounded-full border-2 border-amber-600 h-[250px]">
                                                        <img src="https://5.imimg.com/data5/SELLER/Default/2024/6/425616218/FM/YG/MX/64015401/goose-down-feather-pillow.jpg" className="rounded-full h-full w-full object-cover"/>
                                                    </div>
                                                    <p className="text-center">Stuffing for pillows and mattresses</p>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] p-2 my-5">
                                        <div className="text-xl flex">🌿 <p className="underline">Free-Range and Natural Flock Management</p></div>
                                        <div className="grid grid-rows-5 items-center w-full h-[80vh] gap-3">
                                            <img className="w-[80%] row-span-3 mx-auto h-[100%] object-cover" src="https://www.thehappychickencoop.com/wp-content/uploads/2021/04/aggressive-rooster.jpg"/>
                                            <div className="flex gap-5 mt-3 h-[100%] row-span-2">
                                                <img className="w-[60%] object-cover" src="https://cs-tf.com/wp-content/uploads/2020/03/aggressive-rooster.jpg"/>
                                                <img className="w-[40%] object-cover" src="https://miro.medium.com/v2/resize:fit:2000/0*WAlEkjKYAsPF1Vbn"/>
                                            </div>
                                        </div> 
                                        <div>
                                            <p>Roosters are also essential in free-range systems. A good rooster:</p>
                                            <ul className="p-2 space-y-3 list-disc">
                                                <li>Protects hens from predators</li>
                                                <li>Maintains social order in the flock</li>
                                                <li>Alerts the flock to food sources and dangers</li>
                                            </ul>
                                        </div>  
                                        <div>
                                        At Mrs Tweedy's, we offer a range of strong, healthy cockerels and roosters suited for West African climates and farming practices. Whether you're looking for fertile breeders, rich meat producers, or colourful feather sources, we have the perfect birds for your needs.
                                        </div>    
                                    </li>
                                </ul>
                            </div>
                            {/* {ishover2 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Layers</h3> : null} */}
                        </li>
                    </ul>     
                    <Footer className={"absolute bottom-0"}/>
                </div>
            </div>
        </>
    )
}