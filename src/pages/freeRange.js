import { useEffect, useState } from "react"
import Sidebar from "@/components/Sidebar"
import Subnavbar from "@/components/SubNavbar"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"
import Spinner from "@/components/Spinner"
// import Link from "next/link"
export default function FreeRange(){
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [ishover, setIshover] = useState(false)
    const [ishover2, setIshover2] = useState(false)
    const [ishover3, setIshover3] = useState(false)
    const [ishover4, setIshover4] = useState(false)
    const [ishover5, setIshover5] = useState(false)
    const [isOverlay, setOverlay] = useState(false)
    const [shade1, setShade1] = useState(false)
    const [shade2, setShade2] = useState(false)
    const [shade3, setShade3] = useState(false)
    const [shade4, setShade4] = useState(false)


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
                                <img src="https://i.pinimg.com/736x/d1/7c/52/d17c5220ffe18acd2b9afa2b64b67c4f.jpg" className="h-fit w-fit shadow-lg border border-amber-400 my-auto mx-auto flex object-contain"></img>
                                {/* <div className="border flex my-auto border-yellow-500 bg-black opacity-80 h-fit w-[40%] text-sm p-2 text-center items-center absolute bottom-40 ">
                                    lorem ipaokjnvkmjkvo;slk v.l;n;knn/l alksclnvljkbva;lvmad;khvdnv; ld;vnpohl;npvi;adlld;jv;ej;o
                                </div> */}
                            </div>
                        }
                        {shade2 && 
                            <div className="flex my-3 h-[100%] gap-10 w-[100%]">
                                <img src="https://images.medindia.net/patientinfo/450_237/benefits-of-vitamin-e.jpg" className="h-fit w-fit shadow-lg border border-amber-400 my-auto mx-auto flex object-contain"></img>
                                {/* <div className="border flex my-auto border-yellow-500 bg-black opacity-80 h-fit w-[40%] text-sm p-2 text-center items-center absolute bottom-40 ">
                                    lorem ipaokjnvkmjkvo;slk v.l;n;knn/l alksclnvljkbva;lvmad;khvdnv; ld;vnpohl;npvi;adlld;jv;ej;o
                                </div> */}
                            </div>
                        }
                        {shade3 && 
                            <div className="flex my-3 h-[100%] gap-10 w-[100%]">
                                <img src="https://www.health.com/thmb/mpNyGKaeC9OEIpv7iHg3siCe94I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-Beta-Carotene-BLUE-horiz2-4b665068a36f43cc8a4bdd7f224b859a.png" className="h-fit w-fit shadow-lg border border-amber-400 my-auto mx-auto flex object-contain"></img>
                                {/* <div className="border flex my-auto border-yellow-500 bg-black opacity-80 h-fit w-[40%] text-sm p-2 text-center items-center absolute bottom-40 ">
                                    lorem ipaokjnvkmjkvo;slk v.l;n;knn/l alksclnvljkbva;lvmad;khvdnv; ld;vnpohl;npvi;adlld;jv;ej;o
                                </div> */}
                            </div>
                        }
                        {shade4 && 
                            <div className="flex my-3 h-[100%] gap-10 w-[100%]">
                                <img src="https://images.squarespace-cdn.com/content/v1/597be712f9a61e963d944444/1548696001531-835B1Q9S5FGFMIQ2SUFC/Eating-1-3-eggs-per-day-1.png" className="h-fit w-fit shadow-lg border border-amber-400 my-auto mx-auto flex object-contain"></img>
                                {/* <div className="border flex my-auto border-yellow-500 bg-black opacity-80 h-fit w-[40%] text-sm p-2 text-center items-center absolute bottom-40 ">
                                    lorem ipaokjnvkmjkvo;slk v.l;n;knn/l alksclnvljkbva;lvmad;khvdnv; ld;vnpohl;npvi;adlld;jv;ej;o
                                </div> */}
                            </div>
                        }
                    </div>
                }
                <div className="ml-[5%] mt-20 p-4 space-y-10 flex flex-col relative">
                    <div><p className="text-3xl text-white">Free Range</p></div>
                    
                    <ul className="grid grid-cols-5 space-y-10 space-x-5 text-center h-full">
                        <li className={`${isVisible ? "sticky top-0" : "relative"} hover:text-white shadow text-sm shadow-white col-span-2 h-fit`} onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}>
                            <img className="w-full object-cover object-top h-[500px]" src="https://ideogram.ai/assets/image/lossless/response/vYLqzm2lQPOZJPMaQcJYow"/>
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
                                                                Noilers
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
                                                                Sasso
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
                                                                Kuroilers
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
                                <p className="text-2xl text-center">Free-Range Chickens: Healthy, Hardy & Naturally Raised</p>
                                <p>
                                    Free-range chickens are a smart and sustainable choice for farmers, homesteaders, and consumers who value natural farming, nutrient-rich meat and eggs, and animal welfare. In West Africa, where land and climate support open-air rearing, free-range systems are not only practical—they’re profitable.
                                </p>
                                <p>At Mrs. Tweedy’s Chicken Farm, our free-range birds roam freely in a secure, spacious environment. They are raised without synthetic enhancers, making them ideal for those who want wholesome poultry products and a healthy, environmentally responsible lifestyle.</p>

                                <p className="text-2xl underline text-center">What Are Free-Range Chickens?</p>
                                <p className="text-sm">Free-range chickens are birds that are allowed to roam outdoors for part or most of the day. Unlike caged or confined birds, they forage naturally—scratching for insects, eating grasses, and sunbathing. This system leads to:</p>
                                <ul className="p-3 list-disc space-y-[3vh] grid grid-cols-4 gap-5">
                                    <li className="flex flex-col space-y-[2vh] my-5 ">
                                        <img className="w-[100%] h-[150px] object-cover rounded-full hover:animate-bounce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTjKLhA2LAjn8-CwSRWyPsriEyPTIzgXLVDW_GbLJhyB-nFvv6DOkYRMg7aGGuVtBD_0&usqp=CAU"/>
                                        <p className="text-center">Healthier chickens</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <img className="w-[100%] h-[150px] object-cover rounded-full bg-white hover:animate-bounce" src="https://creator.nightcafe.studio/jobs/OYfDun7xOa6pD8tPEBN8/OYfDun7xOa6pD8tPEBN8--1--ze9ii_bg-rmvd.png"/>
                                        <p className="text-center">Stronger immunity</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <img className="w-[100%] h-[150px] object-cover rounded-full hover:animate-bounce" src="https://c8.alamy.com/comp/2XY9MM7/male-chef-elegantly-serves-delicious-cooked-turkey-or-chicken-a-delicious-lunch-in-a-luxurious-establishment-experienced-culinary-professional-2XY9MM7.jpg"/>
                                        <p className="text-center">Better quality meat and eggs</p>      
                                    </li>
                                    <li className="flex flex-col space-y-[2vh] my-5">
                                        <img className="w-[100%] h-[150px] object-cover rounded-full hover:animate-bounce" src="https://masterpiecer-images.s3.yandex.net/b794eaa592ce11ee8e2c2656ee3db587:upscaled"/>
                                        <p className="text-center">Lower feed costs</p>      
                                    </li>
                                </ul>
                                <p>Free-range birds are also less stressed, more active, and exhibit natural behaviors, which boosts their lifespan and reduces the need for medication.</p>      
                                
                                <div className="flex flex-col space-y-[2vh]">
                                    <div className="text-lg flex text-center mx-auto flex-col items-center justify-center">
                                        <p className="underline">Egg Production the Natural Way</p>
                                        <p className="text-xl">🥚 </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>
                                            Free-range hens produce richer, more nutritious eggs. Their yolks are darker, and their shells are often thicker due to better calcium absorption from natural diets. These eggs are high in:
                                        </p>
                                        <ul className="p-3 list-disc space-y-[3vh] grid grid-cols-4 gap-5">
                                            <li className="flex flex-col space-y-[2vh] my-5 " 
                                                onMouseEnter={()=>{
                                                    setShade1(true)
                                                    setOverlay(true)
                                                }}
                                                onMouseLeave={()=>{
                                                    setShade1(false)
                                                    setOverlay(false)
                                                }}>
                                                <img className="w-[100%] h-[150px] object-cover rounded-lg hover:animate-pulse" src="https://ideogram.ai/assets/progressive-image/balanced/response/A65nZoptQsSYmjInlBtbTA"/>
                                                <p className="text-center">Omega-3 fatty acids</p>      
                                            </li>
                                            <li className="flex flex-col space-y-[2vh] my-5"
                                                onMouseEnter={()=>{
                                                    setShade2(true)
                                                    setOverlay(true)
                                                }}
                                                onMouseLeave={()=>{
                                                    setShade2(false)
                                                    setOverlay(false)
                                                }}>
                                                <img className="w-[100%] h-[150px] object-cover rounded-lg bg-white hover:animate-pulse" src="https://ideogram.ai/assets/progressive-image/balanced/response/w6SXSjO6Si-3vo8ZEa4GfA"/>
                                                <p className="text-center">Vitamin A & E</p>      
                                            </li>
                                            <li className="flex flex-col space-y-[2vh] my-5"
                                                onMouseEnter={()=>{
                                                    setShade3(true)
                                                    setOverlay(true)
                                                }}
                                                onMouseLeave={()=>{
                                                    setShade3(false)
                                                    setOverlay(false)
                                                }}>
                                                <img className="w-[100%] h-[150px] object-cover rounded-lg hover:animate-pulse" src="https://www.freepik.com/designer/edit/api/vector/9ed8a76d-f2f9-4f77-92cd-0b5586ad52c8/preview"/>
                                                <p className="text-center">Beta-carotene</p>      
                                            </li>
                                            <li className="flex flex-col space-y-[2vh] my-5"
                                                onMouseEnter={()=>{
                                                    setShade4(true)
                                                    setOverlay(true)
                                                }}
                                                onMouseLeave={()=>{
                                                    setShade4(false)
                                                    setOverlay(false)
                                                }}>
                                                <img className="w-[100%] h-[150px] object-cover rounded-lg hover:animate-pulse" src="https://www.freepik.com/designer/edit/api/vector/9edc58c5-52d3-4a19-8724-c077e2b368cb/preview"/>
                                                <p className="text-center">Lower cholesterol</p>      
                                            </li>
                                        </ul>
                                        <p>In traditional markets across West Africa, free-range eggs attract premium prices. Consumers trust their purity, taste, and health benefits—especially in urban centers where demand is high.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-[2vh]">
                                    <div className="text-lg flex text-center mx-auto flex-col items-center justify-center">
                                        <p className="underline">Meat That Tastes Like Home</p>
                                        <p className="text-xl">🍗</p>
                                    </div>
                                    <div className="flex flex-col space-y-[4vh]">
                                        <p>
                                        Free-range chicken meat has a firmer texture and deeper flavour than commercial broilers. These birds build muscle through movement and grow at a natural pace, leading to leaner, tastier meat. In many parts of West Africa, free-range chickens are a centerpiece of cultural meals, especially during festivals, family gatherings and traditional ceremonies.
                                        </p>
                                        <div className="w-full h-[80vh] relative grid grid-cols-3 gap-2">
                                            <div className="grid grid-rows-3 h-[100%] w-[100%] gap-3 rounded-lg col-span-1">
                                                <img src="https://www.chefadora.com/_next/image?url=https%3A%2F%2Fchefadora.b-cdn.net%2FFB_IMG_1721085315451_3a265147c5.jpg&w=3840&q=75" className="h-full w-[100%] object-cover rounded-lg shadow-lg shadow-gray-600 row-span-2" />
                                                <p className="rounded-lg row-span-1"></p>
                                            </div>
                                            <div className="grid grid-rows-5 h-[100%] w-[100%] gap-3 rounded-lg col-span-1">
                                                <p className="rounded-lg row-span-1"></p>
                                                <img src="https://afrifoodnetwork.com/wp-content/uploads/2021/10/43D67F6C-2E5C-4BAA-A44E-F2233F9C31FE.jpeg" className="h-full w-[100%] object-cover rounded-lg shadow-lg shadow-gray-600 row-span-3" />
                                                <p className="rounded-lg row-span-1"></p>
                                            </div>
                                            <div className="grid grid-rows-3 h-[100%] w-[100%] gap-3 rounded-lg col-span-1">
                                                <p className="rounded-lg row-span-1"></p>
                                                <img src="https://cdn.guardian.ng/wp-content/uploads/2023/12/Photo-Credit-Jollof-Festival-.jpg" className="h-full w-[100%] object-cover rounded-lg shadow-lg shadow-gray-600 row-span-2" />
                                            </div>
                                        </div>                                        
                                        <p>The slow-grown nature of free-range birds aligns with local food traditions, making them a preferred choice over mass-farmed alternatives.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-[2vh]">
                                    <div className="text-xl flex text-center mx-auto flex-col items-center justify-center">
                                        <p className="underline">Sustainable & Economical</p>
                                    </div>
                                    <div className="flex flex-col space-y-[2vh] p-2">
                                        <p>
                                        Free-range systems support eco-friendly agriculture:
                                        </p>
                                        <ul className="list-disc space-y-3 p-5">
                                            <li>Lower feed costs thanks to natural foraging</li>
                                            <li>Reduced disease risk with clean, open environments</li>
                                            <li>Manure-based fertilization for nearby crops</li>
                                            <li>Fewer antibiotics and chemicals needed</li>
                                        </ul>
                                        <p>Smallholder farmers across Nigeria, Ghana, Senegal, and beyond are rediscovering the benefits of free-range methods to improve income and food security.</p>
                                    </div>
                                    <div className="flex flex-col space-y-[2vh] p-2">
                                        <p>Best Breeds for Free-Range in West Africa include:</p>
                                        <div className="grid grid-cols-4 space-x-5 text-center my-5">
                                            <div className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://i.ytimg.com/vi/dk24Y1lht0c/maxresdefault.jpg"/>{ishover ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Noilers</h3> : null}</div>
                                            <div className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover2(true)} onMouseLeave={()=>setIshover2(false)}><img className="w-full h-[200px] object-cover object-right rounded-xl" src="https://pbs.twimg.com/media/GZS5YK4XQAEyu0C.jpg:large"/>{ishover2 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Fulani Ecotype</h3> : null}</div>
                                            <div className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover3(true)} onMouseLeave={()=>setIshover3(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://b2573706.smushcdn.com/2573706/wp-content/uploads/2019/03/flock-1024x680.jpg?lossy=1&strip=1&webp=1"/>{ishover3 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Sasso</h3> : null}</div>
                                            <div className="cursor-pointer relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover4(true)} onMouseLeave={()=>setIshover4(false)}><img className="w-full h-[200px] object-cover rounded-xl" src="https://www.farmingug.com/wp-content/uploads/2021/12/kuroiler-uganda-poultry.jpg"/>{ishover4 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Kuroiler</h3> : null}</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col space-y-[2vh]">
                                    <p>🛒 Buy Free-Range Chickens from Mrs. Tweedy’s Today</p>  
                                    <p>Looking for healthy, productive, and naturally raised poultry? Mrs. Tweedy’s Chicken Farm is your trusted supplier of high-quality free-range birds, raised under hygienic conditions with expert care. Whether you’re starting small or expanding your flock, we’re here to help.</p>      
                                </div>
                            </p>
                        </li>
                    </ul>     
                    <Footer className={"absolute bottom-0"}/>
                </div>
            </div>
        </>
    )
}