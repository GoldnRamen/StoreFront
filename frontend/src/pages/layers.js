import { useEffect, useState } from "react"
import Sidebar from "@/components/Sidebar"
import Subnavbar from "@/components/SubNavbar"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"
// import Link from "next/link"
export default function Layers(){
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [ishover, setIshover] = useState(false)
    const [ishover2, setIshover2] = useState(false)
    const [ishover3, setIshover3] = useState(false)
    const [ishover4, setIshover4] = useState(false)
    const [ishover5, setIshover5] = useState(false)

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
                <div className="ml-[5%] mt-20 p-4 space-y-10 flex flex-col relative">
                    <div><p className="text-3xl text-white">Layers</p></div>
                    <ul className="grid grid-cols-5 space-y-10 space-x-5 text-center h-full">
                        <li className={`${isVisible ? "sticky top-0" : "relative"} hover:text-white shadow text-sm shadow-white col-span-2 h-fit`} onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}>
                            <img className="w-full object-cover object-top h-[500px]" src="https://www.foxfirefarmspoultry.com/wp-content/uploads/2019/01/mixedeggssmall-300x300.jpg"/>
                            <form className="p-4 bg-white flex flex-col text-black">
                                <p className={`bg-amber-500 cursor-pointer p-2 w-fit mx-auto mb-3 ${isVisible2 ? "animate-none" : "animate-pulse border rounded-lg"}`} onClick={()=>setIsVisible2(prevState => !prevState)}>Place an Order</p>
                                {isVisible2 &&
                                    (
                                        <div className="flex flex-col text-left space-y-2 relative">
                                            <div className="flex gap-2">
                                                <select className="bg-white text-black w-[60%] border p-1" defaultValue={""}>
                                                    <option value={""} disabled>Select Age of Bird(s)</option>
                                                    <option value={"DOC"}>Day Old Chicks</option>
                                                    <option value={"Starter"}>Started Pullets (6-12 Weeks)</option>
                                                    <option value={"Grower"}>Point of Lay Hens (16-20 Weeks)</option>
                                                    <option value={"Finisher"}>Adult Layers( 20+ Weeks)</option>
                                                </select>
                                                <p onClick={()=>setIsVisible3(prevState =>!prevState)} className="bg-yellow-200 p-2 border rounded-lg cursor-pointer text-sm">Select Breed(s)</p>
                                                {isVisible3 && 
                                                (<ul className="absolute top-10 right-0 h-[50vh] overflow-y-scroll bg-yellow-50 text-black w-[70%] border p-1">
                                                    <li className="my-5 p-2 border-b space-y-3">
                                                        <div className="flex gap-2">
                                                            <p>
                                                                Nigerian Indigenous Chicken (NIC)
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
                                                                Orpingtons
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
                                                                White Leghorns
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
                                                                Hybrids
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
                            <p className="flex flex-col space-y-[5vh] text-start p-3">
                                <p className="text-2xl text-center">Our Legacy in Layers</p>
                                <p>
                                    For over 20 years, Mrs. Tweedy’s Chicken Farm has specialized in rearing quality hens bred specifically for egg-laying. Our focus on selective breeding, ethical farming practices, and personalized customer support has earned us a reputation as one of the region’s most trusted suppliers of layer hens.
                                </p>
                                <p>We understand that choosing the right layers is a critical decision for any poultry keeper. Whether you’re looking to start your first flock or expand your existing coop, we offer breeds and hybrids that are renowned for their reliability, productivity, and adaptability to various climates and environments.</p>

                                <p className="text-2xl underline text-center">High-Performance Breeds</p>
                                <p className="text-sm">We currently raise and sell several popular and proven layer breeds, including:</p>
                                <ul className="p-3 list-disc space-y-[3vh]">
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <p className="underline text-xl">Nigerian Indigenous Chicken (NIC)</p>  
                                        <div className="flex flex-row items-center w-full h-[60vh] gap-3">
                                            <img className="w-[60%] h-[85%] object-cover" src="https://www.nairaland.com/attachments/7219076_images6_jpeg_jpegb8e70b8cebe0822fdd8baa3435f1ac08"/>
                                            <img className="w-[40%] h-[60%] object-cover object-bottom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckRGVoiThDdoZ1XIRghcPxvdE75N6n_2rWhbhSi0r-_y_AUgDN8ziCI9bnt2lYhVsB68&usqp=CAU"/>
                                        </div>
                                        <p>This term often refers to the Yoruba and Fulani breeds, highlighting the importance of local adaptations. </p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <p className="underline text-xl">Orpingtons</p>  
                                        <div className="flex flex-row items-center w-full h-[60vh] gap-3">
                                            <img className="w-[60%] h-[85%] object-cover" src="https://static.wixstatic.com/media/bb9498_6309e02a9bda434081e98447be364178~mv2.jpg/v1/fill/w_520,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bb9498_6309e02a9bda434081e98447be364178~mv2.jpg"/>
                                            <img className="w-[40%] h-[60%] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-S34MwU82vdlsIL3VF_QcW-j0YJhrI4wZw&s"/>
                                        </div>
                                        <p>This breed is known for its good egg production and maternal instincts, making it a popular choice for backyard flocks.</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <p className="underline text-xl">White Leghorns</p> 
                                        <div className="flex flex-row items-center w-full h-[60vh] gap-3">
                                            <img className="w-[60%] h-[85%] object-cover" src="https://www.backyardchickens.com/content/type/61/id/5247977/"/>
                                            <img className="w-[40%] h-[60%] object-cover" src="https://i.redd.it/e6qey8rog4xa1.jpg"/>
                                        </div> 
                                        <p>While not as commonly mentioned as the others, they are a highly productive egg-laying breed and are often used in commercial egg production systems. </p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <p className="underline text-xl">Hybrid breeds</p>
                                        <div className="flex flex-row items-center w-full h-[60vh] gap-3">
                                            <img className="w-[60%] h-[85%] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_nKwzxg3OXWKTYs4VtT9jRrR8YNVmVFGK2IjaHZgj8Wa0dhhgrZy9koi8eiqMZsxgk8&usqp=CAU"/>
                                            <img className="w-[40%] h-[60%] object-cover" src="https://www.backyardchickens.com/content/type/61/id/5820794/"/>
                                        </div> 
                                        <p>Hybrid breeds like Golden Buffs are also gaining popularity due to their high egg production rates. </p>      
                                    </li>
                                </ul>
                                <div className="flex flex-col space-y-[2vh]">
                                    <p>🩺 Regular Health Checks:</p>  
                                    <p>Our experienced poultry care team conducts routine health assessments, watching for signs of illness or discomfort. Birds are vaccinated according to best veterinary practices, and any health issues are addressed immediately and humanely.</p>      
                                </div>
                                <div className="flex flex-col space-y-[2vh]">
                                    <p>Ready-to-Lay Pullets</p>
                                    <img src="https://www.coopsandcages.com.au/wp-content/uploads/2020/01/flock-of-hens-on-green-field-2255459-scaled.jpg" className="w-full h-full object-cover" />
                                    <p>We offer point-of-lay pullets—hens that are approximately 16–20 weeks old and ready to begin laying within a few weeks of arrival. These birds are fully vaccinated, acclimatized, and hand-selected for vigor and evenness in size. Buying pullets at this stage ensures you skip the fragile chick stage and head straight into productive poultry keeping.</p>
                                </div>
                                <p className="flex">
                                    <p className="">
                                        All our hens are raised in stress-free, spacious environments, with access to fresh air, natural light, clean bedding, and carefully balanced diets. We never use hormones or harsh antibiotics—just responsible, ethical farming that reflects our commitment to animal welfare.</p>
                                    </p>
                                </p>
                            {/* {ishover2 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Layers</h3> : null} */}
                        </li>
                    </ul>     
                    <Footer className={"absolute bottom-0"}/>
                </div>
            </div>
        </>
    )
}