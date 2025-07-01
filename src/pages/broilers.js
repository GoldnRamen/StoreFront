import { useEffect, useState } from "react"
import Sidebar from "@/components/Sidebar"
import Subnavbar from "@/components/SubNavbar"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"
// import Link from "next/link"
export default function Broilers(){
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
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
                    <div><p className="text-3xl text-white">Broilers</p></div>
                    <ul className="grid grid-cols-5 space-y-10 space-x-5 text-center h-full">
                        <li className={`${isVisible ? "sticky top-0" : "relative"} hover:text-white shadow text-sm shadow-white col-span-2 h-fit`} onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}>
                            <img className="w-full object-cover object-top h-[500px]" src="https://cdn.wikifarmer.com/images/detailed/2024/09/Improving-Broiler-Chicken-Production-Trends-and-Techniques.png"/>
                            <form className="p-4 bg-white flex flex-col text-black">
                                <p className={`bg-amber-500 cursor-pointer p-2 w-fit mx-auto mb-3 ${isVisible2 ? "animate-none" : "animate-pulse border rounded-lg"}`} onClick={()=>setIsVisible2(prevState => !prevState)}>Place an Order</p>
                                {isVisible2 &&
                                    (
                                        <div className="flex flex-col text-left space-y-2">
                                            <select className="bg-white text-black w-[60%] border p-1" defaultValue={""}>
                                                <option value={""} disabled>Select Age of Bird(s)</option>
                                                <option value={"DOC"}>Day Old Chicks</option>
                                                <option value={"Starter"}>Starter Broilers (1-3 Weeks)</option>
                                                <option value={"Grower"}>Growers (3-5 Weeks)</option>
                                                <option value={"Finisher"}>Finishers(6-8 Weeks)</option>
                                            </select>
                                            <div className="space-x-2">
                                                <label>Enter number of birds</label>
                                                <input className="border rounded border-gray-500" />
                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">+</button>
                                                <button className="border border-gray-600 px-2 bg-amber-100 rounded">-</button>
                                            </div>
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
                                <p className="text-xl text-center">Our Premium Broilers: Raised with Care, Delivered with Pride</p>
                                <p>
                                    At Mrs. Tweedy’s Poultry Haven, broilers aren’t just birds—they’re a promise of quality, health, and responsible farming. Broilers are chickens specifically bred and raised for meat production, prized for their rapid growth, tender flesh, and juicy flavor. These birds are typically ready for market within 6–8 weeks, making them one of the most efficient sources of protein in poultry farming.
                                </p>
                                <p>But not all broilers are raised the same way. What sets Mrs. Tweedy’s broilers apart is the passion and precision that go into every stage of their care. From hatch to harvest, our broilers are nurtured under optimal conditions designed to ensure premium quality and customer satisfaction.</p>

                                <p className="text-lg underline text-center">Best Practices at Mrs. Tweedy’s Poultry Haven</p>
                                <ul className="p-3 list-disc space-y-[3vh]">
                                    <li className="flex flex-col space-y-[2vh]">
                                        <p>🐥 Careful Selection of Chicks:</p>  
                                        <p>We begin with the highest quality day-old broiler chicks from reputable hatcheries. These chicks are selected based on their genetic strength and resistance to common poultry diseases. Only the healthiest and most vigorous chicks make it into our broiler houses.</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh]">
                                        <p>🌿 Nutritious Feed for Rapid, Healthy Growth:</p>  
                                        <p> Our broilers are fed a specially formulated diet that includes balanced proteins, vitamins, and minerals. We use locally sourced grains and avoid growth hormones or unnecessary antibiotics. This ensures natural, steady growth and a rich, authentic flavor profile in the meat.</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh]">
                                        <p>🏠 Spacious, Hygienic Housing:</p>  
                                        <p>At Mrs. Tweedy’s, we maintain clean, well-ventilated poultry houses with adequate space to allow natural movement. Overcrowding is strictly avoided, ensuring each bird thrives in a stress-free environment. Our sanitation routines are meticulous, reducing the risk of disease and boosting overall health.</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh]">
                                        <p>💧 Clean Water, Always Available:</p>  
                                        <p>Fresh, clean water is available to our broilers 24/7. Proper hydration not only supports healthy metabolism but also improves meat quality. We monitor our water systems daily to ensure they are free of contaminants.</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh]">
                                        <p>🩺 Regular Health Checks:</p>  
                                        <p>Our experienced poultry care team conducts routine health assessments, watching for signs of illness or discomfort. Birds are vaccinated according to best veterinary practices, and any health issues are addressed immediately and humanely.</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh]">
                                        <p>✅ Humane Processing and Clean Packaging:</p>  
                                        <p>When ready for market, our broilers are processed under strict hygienic conditions, following all safety and humane handling standards. Customers can purchase our broilers live, freshly dressed, or neatly packaged in parts, depending on their preference.</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh]">
                                        <p>🌞 Natural Daylight and Rest Cycles:</p>  
                                        <p>Unlike commercial farms that often use artificial lighting to force faster growth, we use natural daylight cycles to promote ethical growth and strong immunity. We believe in letting chickens be chickens—and it shows in the quality of our broilers.</p>      
                                    </li>
                                </ul>
                                <p className="flex">
                                    <p className="">
                                        Customers choose Mrs. Tweedy’s broilers for their tenderness, juiciness, and superior taste. Whether you're preparing a festive roast, a weekday stew, or spicy wings for the grill, our broilers deliver rich, consistent flavour every time.</p>
                                    </p>
                                    <p className="col-span-1"><img src="https://ideogram.ai/assets/progressive-image/balanced/response/36iT6sqrTwaWmDlh-GnaGg" className="w-full h-full object-cover" /></p>
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