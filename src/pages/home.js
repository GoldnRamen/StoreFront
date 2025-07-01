import Image from "next/image"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"

import { useState } from "react"
import SmallSidebar from "@/components/SmallSideBar"
export default function Home(){
    const [overlay, setOverlay] = useState(false)
    const [ishover, setIshover] = useState(false)
    const [ishover2, setIshover2] = useState(false)
    const [ishover3, setIshover3] = useState(false)
    const [ishover4, setIshover4] = useState(false)
    const [ishover5, setIshover5] = useState(false)
    
    return(
        <>
        <div onMouseEnter={()=>setOverlay(true)} onMouseLeave={()=>setOverlay(false)}><Sidebar/></div>
        <SmallSidebar/>
        <div className="relative lg:ml-[5%]">
            <div className={`${overlay ? "opacity-70 h-[95vh] w-full fixed top-[400px] lg:top-[50px] bg-black z-40" : null} `}></div>
            <img src={"https://ideogram.ai/assets/image/lossless/response/pHogom8BRzmrgOVOX4FLXw"}
                className="w-full top-20 opacity-55 h-[700px] object-cover" />
                <div className="absolute top-[35vh] lg:left-[300px] lg:text-left text-center flex flex-col mx-auto">
                    {/* <h1 className={`text-9xl ${inter.className}`}>Mrs Dabup's Poultry Haven</h1> */}
                    <h1 className="lg:text-9xl text-3xl lg:p-0 p-2 mb-[10vh]">Mrs Tweedy's Poultry Haven</h1>
                    <p className="lg:text-2xl text-xl lg:p-0 p-2" id="about">Sustainably Farmed, Deliciously Fresh!</p>
                </div>
            <div className="p-2 mt-[20vh] mx-auto">
                <div className="w-[80%] mx-auto">
                    <p className="text-sm lg:text-lg">Welcome to Mrs Tweedy's Poultry Haven, your trusted source for high-quality poultry products. Nestled in the heart of Southern Kaduna, our farm is dedicated to providing fresh, healthy, and sustainable poultry to individuals, businesses, and communities. With years of experience in poultry farming, we have perfected the art of raising chickens ethically and efficiently, ensuring that our customers receive only the best.</p>
                    <p className="text-2xl mt-[7vh] mb-[3vh]">Our Story</p>
                    <p className="text-sm lg:text-lg">At Mrs Tweedy's Poultry Haven, our journey began with a simple mission: to provide farm-fresh, nutrient-rich poultry products while maintaining the highest standards of animal welfare and sustainability. Over the years, we have grown from a small family-owned farm into a trusted name in the poultry industry. Despite our growth, we have remained committed to our core values—quality, integrity, and sustainability.</p>
                    <p className="text-2xl mt-[7vh] mb-[3vh]">What We Offer</p>
                    
                    <div className="text-sm lg:text-lg">
                        <p>We take pride in offering a wide range of poultry products that cater to different needs, including:</p>
                        <ul className="space-y-4 my-10">
                            <li className="grid grid-cols-3 gap-2 items-center mt-[5vh]">
                                <div className="col-span-2">
                                    <p>Live Chickens</p>
                                    <p className="hidden lg:block">Our farm-raised chickens are bred and nurtured under optimal conditions to ensure they are healthy and strong. Whether you are a farmer looking to expand your flock or a business seeking reliable poultry supply, our live chickens are available for sale in different breeds, including broilers, layers, cockerels, and indigenous (local) chickens.</p>
                                </div>
                                <img src={"https://ideogram.ai/assets/progressive-image/balanced/response/yX8-4GMjTLKVMKcR7HND4g"} className="w-full object-cover h-full"/>
                            </li>
                            <li className="grid grid-cols-3 gap-2 items-center">
                                <img src={"https://ideogram.ai/assets/progressive-image/balanced/response/iQD_BMtyTlamrKsvkkqq4w"} className="w-full object-cover h-full"/>
                                <div className="col-span-2">
                                    <p>Fresh Chicken Meat</p>
                                    <p className="hidden lg:block">We provide premium-quality, farm-fresh chicken meat that is hygienically processed to retain its natural taste and nutrition. Our chickens are raised on a healthy diet, ensuring that their meat is tender, flavorful, and rich in essential nutrients. Whether you need whole chickens, cut portions, or specialty cuts, we cater to both wholesale and retail customers.</p>
                                </div>
                            </li>
                            <li className="grid grid-cols-3 gap-2 items-center">
                                <div className="col-span-2">
                                    <p>Fresh Farm Eggs</p>
                                    <p className="hidden lg:block">Our eggs are collected daily to ensure freshness and quality. We offer different egg sizes to meet the preferences of our customers. Our layers are well-fed and housed in a comfortable environment, resulting in eggs that are rich in flavor and packed with nutrients. Whether you are a retailer, baker, or household looking for nutritious eggs, we have you covered.</p>
                                </div>
                                <img src={"https://cdn.pixabay.com/photo/2017/08/04/18/04/egg-2580904_1280.jpg"} className="w-full object-cover h-full"/>
                            </li>
                            <li className="grid grid-cols-3 gap-2 items-center">
                                <img src={"https://www.poultryworld.net/app/uploads/2021/04/001_302_IMG_feathers-768x512.jpg"} className="w-full object-cover h-full"/>
                                <div  className="col-span-2">
                                    <p>Feathers</p>
                                    <p className="hidden lg:block">Feathers are a valuable byproduct of poultry farming, and we supply them for various purposes. Our feathers are cleaned and processed, making them ideal for use in pillow manufacturing, decorations, arts and crafts, and other industries.</p>
                                </div >    
                            </li>
                            <li className="grid grid-cols-3 gap-2 items-center">
                                <div  className="col-span-2">
                                    <p className="lg:hidden block">Offal</p>
                                    <p className="hidden lg:block">Offal (Gizzards, Liver, Feet, and Other Byproducts)</p>
                                    <p className="hidden lg:block">We offer high-quality offal, including chicken gizzards, liver, hearts, and feet, which are rich in flavor and widely used in different cuisines. These byproducts are processed and packaged under hygienic conditions, ensuring their freshness and nutritional value.</p>
                                </div >
                                <img src="https://thepoultrypunch.com/wp-content/uploads/2023/12/sdagfshgdjh.png" className="w-full object-cover h-full"/>
                                
                            </li>
                            <li className="grid grid-cols-3 gap-2 items-center">
                                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhQwmDcAjAWcQj8vIw-52ZkfVa5yF8bOq4aeLX8HngYWe528cUIMlly5votkUOf-z3RgnDafGuCTFKqiUt-Zl7SwQE54w87tgwCwEOvs8HwAeLX8U50fqsvdBC0OilnICKYQYuAz-2keBzTpET7hVSLPDZgEvnruhTS4wJocIPh_IrsNl0VvkCg3QrUHQT/s1280/chicken-manure.jpg" className="w-full object-cover h-full"/>
                                <div  className="col-span-2">
                                    <p>Chicken Manure</p>
                                    <p className="hidden lg:block">As part of our commitment to sustainable farming, we provide nutrient-rich chicken manure, an excellent organic fertilizer for crops. Our manure is processed to ensure it retains essential nutrients, making it an effective and eco-friendly solution for farmers and gardeners looking to enrich their soil naturally.</p>
                                </div >
                            </li>
                        </ul>
                    </div>
                </div>
                


                <div className="my-[5vh] relative">
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/haIL6hEpTPyI3dK5eoD-2A" className="w-full h-[30vh] lg:h-[70vh] object-cover object-center"/>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/P6KB-uHMT0yewoeHyTFvAg" className="w-full h-[30vh] lg:h-[70vh] object-cover object-center"/>
                    </div>
                    <p className="hidden lg:block absolute bottom-12 left-[10%] w-[70%] bg-black p-3 opacity-75">We also prioritize the well-being of our birds, raising them in spacious and clean environments, free from harmful chemicals or artificial growth enhancers. Our ethical farming practices ensure that our customers receive wholesome, naturally grown poultry products.</p>
                    <p className="block lg:hidden w-full text-xs my-2">We also prioritize the well-being of our birds, raising them in spacious and clean environments, free from harmful chemicals or artificial growth enhancers. Our ethical farming practices ensure that our customers receive wholesome, naturally grown poultry products.</p>
                </div>
                    
                <div className="w-[80%] mx-auto lg:grid grid-cols-5 gap-3 my-[15vh] border-t border-b py-3 hidden">
                    <img src="/dung.png" className="w-full h-[20vh] object-contain object-center"/>                    
                    <div className="col-span-3">
                        <p className="text-2xl mb-[3vh]">Sustainability and Environmental Responsibility</p>
                        <p>Here at The Haven, we believe in responsible farming that benefits both our customers and the environment. Our farming practices are designed to minimize waste and promote sustainability. We recycle organic waste, manage poultry manure efficiently, and ensure that every byproduct has a purpose, contributing to a cleaner and healthier ecosystem.</p>
                    </div>
                    <img src="/compost.png" className="w-full h-[20vh] object-contain object-center"/>
                </div>

                <div className="w-[90%] mx-auto">
                    <div className="space-y-20 my-[15vh]">
                        <p className="text-2xl">Why Choose Us?</p>
                        <ul className="grid lg:grid-cols-5 space-y-5 lg:space-y-0 space-x-5 text-center">
                            <li className="flex flex-col gap-2 items-center col-span-1 space-y-3"><img src="https://cdn.pixabay.com/photo/2019/05/18/17/03/chicken-eggs-4212132_1280.jpg" className="w-full h-[200px] object-cover rounded-full"/><div className="flex-col flex text-sm space-y-2"><h3 className="font-extrabold underline">Fresh high-Quality Products</h3> <h4>We ensure that all our poultry products are fresh, nutritious, and of the highest quality.</h4></div></li>
                            <li className="flex flex-col gap-2 items-center col-span-1 space-y-3"><img src="https://cdn.pixabay.com/photo/2020/10/10/12/28/hen-5642953_1280.jpg" className="w-full h-[200px] object-cover rounded-full"/><div className="flex-col flex text-sm space-y-2"><h3 className="font-extrabold underline">Ethical Farming Practices</h3><h4>Our chickens are raised in humane and stress-free conditions, resulting in better products for our customers.</h4></div></li>
                            <li className="flex flex-col gap-2 items-center col-span-1 space-y-3"><img src="https://cdn.pixabay.com/photo/2020/09/06/08/38/hens-5548388_1280.jpg" className="w-full h-[200px] object-cover rounded-full"/><div className="flex-col flex text-sm space-y-2"><h3 className="font-extrabold underline">Sustainable Agriculture</h3><h4>We adopt eco-friendly practices to reduce our carbon footprint and promote environmental responsibility.</h4></div></li>
                            <li className="flex flex-col gap-2 items-center col-span-1 space-y-3"><img src="https://livestocking.com/wp-content/uploads/2024/04/Broiler-chickens.jpg" className="w-full h-[200px] object-cover rounded-full"/><div className="flex-col flex text-sm space-y-2"><h3 className="font-extrabold underline">Reliable Supply</h3><h4>Whether you need poultry for personal use, business, or large-scale distribution, we have the capacity to meet your needs.</h4></div></li>
                            <li className="flex flex-col gap-2 items-center col-span-1 space-y-3"><img src="https://www.thecable.ng/wp-content/uploads/2023/06/Dollars-and-Naira_TheCable15-e1696528364400.jpg" className="w-full h-[200px] object-cover rounded-full"/><div className="flex-col flex text-sm space-y-2"><h3 className="font-extrabold underline">Affordable Prices</h3><h4>We offer competitive pricing to ensure that our customers get value for their money.</h4></div></li>
                        </ul>
                    </div>
                    
                    <div className="lg:space-y-20 space-y-10 my-[15vh]">
                        <p className="text-2xl">Our Customers</p>
                        <p className="text-lg text-center">We proudly serve a wide range of customers, including:</p>
                            <ul className="grid lg:grid-cols-5 lg:space-x-5 space-y-5 text-center">
                                <li className="relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}><img className="w-full h-[200px] lg:h-[400px] object-cover rounded-xl" src="https://cdn.pixabay.com/photo/2019/06/03/22/06/eggs-4250077_1280.jpg"/>{ishover ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Households</h3> : null}</li>
                                <li className="relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover2(true)} onMouseLeave={()=>setIshover2(false)}><img className="w-full h-[200px] lg:h-[400px] object-cover rounded-xl" src="https://cdn.pixabay.com/photo/2019/10/21/17/12/wings-4566612_1280.jpg"/>{ishover2 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Restaurants and hotels</h3> : null}</li>
                                <li className="relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover3(true)} onMouseLeave={()=>setIshover3(false)}><img className="w-full h-[200px] lg:h-[400px] object-cover rounded-xl" src="https://cdn.pixabay.com/photo/2017/07/22/20/29/bird-2529859_1280.jpg"/>{ishover3 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Farmers</h3> : null}</li>
                                <li className="relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover4(true)} onMouseLeave={()=>setIshover4(false)}><img className="w-full h-[200px] lg:h-[400px] object-cover rounded-xl" src="https://cdn.pixabay.com/photo/2016/04/08/16/08/egg-1316407_1280.jpg"/>{ishover4 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Retailers and distributors</h3> : null}</li>
                                <li className="relative hover:text-white text-black shadow text-sm shadow-white rounded-xl" onMouseEnter={()=>setIshover5(true)} onMouseLeave={()=>setIshover5(false)}><img className="w-full h-[200px] lg:h-[400px] object-cover rounded-xl" src="https://ideogram.ai/assets/progressive-image/balanced/response/XBJkNZzxRmS1AiV0W7Lb1A"/>{ishover5 ? <h3 className="font-extrabold absolute top-5 left-5 border opacity-65 bg-black rounded-lg p-2">Individuals and businesses</h3> : null}</li>
                            </ul> 
                    </div>
                    

                    <div className="lg:space-y-20 space-y-10 my-[15vh]"  id="contact">
                        <p className="text-2xl">Get in Touch</p>
                        <div className="space-y-8">
                            <p className="lg:text-lg text-sm">We would love to hear from you! Whether you are looking to purchase our products, partner with us, or learn more about our farm, feel free to contact us. Our team is always ready to assist you with your poultry needs.</p>
                            <ul className="lg:text-lg text-sm">
                                <li className="my-[3vh] ms-8 lg:ms-8">📍 Location: New Buwaya, Gonin-Gora Kaduna South, Kaduna</li>
                                <li className="my-[3vh] ms-8 lg:ms-12">📞 Phone: 09055731649</li>
                                <li className="my-[3vh] ms-8 lg:ms-16">📧 Email: tweedy@farms@gmail.com</li>
                                <li className="my-[3vh] ms-8 lg:ms-20">🌐 Website: www.tweedyhavenfarms.com</li>
                            </ul>
                        </div>
                    </div>
                     
                    <p className="lg:text-lg text-sm">Thank you for choosing Mrs Tweedy's Poultry Haven where quality meets sustainability!</p>

                </div>
            </div>
            <Footer />
        </div>
        
        </>
    )
}