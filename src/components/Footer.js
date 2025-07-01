import Link from "next/link"
import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return(
        <footer className="w-full border-t border-white">
            <div className="lg:p-12 p-3 me-2 bg-slate-950 text-white text-xs h-fit">
                <ul className="justify-between lg:space-x-3 grid grid-cols-4 gap-8">
                    <li className="mx-auto space-y-4 flex flex-col p-2">
                        <a className="text-sm my-4 text-center"><h2 className="text-xl mb-8">📨</h2> <h3 className="underline lg:block hidden">Sign Up for Our Newsletter</h3><h3 className="underline lg:hidden block">Newsletter</h3></a>
                        <p className="lg:block hidden">Be the first to know about new stock, seasonal sales, poultry care tips, and behind-the-scenes stories from the Haven. Join our cluckin' awesome newsletter and stay connected with the coop!</p>
                        <p className="lg:block hidden">Subscribe to Our Newsletter! We promise not to spam—we hate it more than a fox in the henhouse!</p>
                        <div className="my-4 lg:block hidden">
                            <div className="text-center"><h2>📱</h2> <h2> Follow the Flock </h2> </div>
                            <div className="lg:block hidden">Join us online and follow the daily adventures of Mrs. Tweedy and her beloved hens. From sunrise crowing to egg-laying marvels, you'll get an authentic peek into the joy of poultry farming and updates on what’s fresh.</div>
                        </div>
                        <div className="space-y-1 lg:block hidden">
                            <div className="text-center items-center flex justify-between"><FaXTwitter /> <p className=""> Twitter: @mrstweedyshaven</p></div>                        
                            <div className="text-center items-center flex justify-between"><AiFillInstagram /> <p> Instagram: @mrstweedyspoultry</p></div>                        
                            <div className="text-center items-center flex justify-between"><FaFacebookF /> <p> Facebook: Mrs. Tweedy’s Poultry Haven</p></div>                        
                            <div className="text-center items-center flex justify-between"><FaYoutube /> <p> YouTube: CluckTube – Life at the Haven</p></div>                        
                        </div>
                        <p>
                        
                        </p>
                    </li>
                    <li className="mx-auto space-y-4 flex flex-col p-2">
                        <a  className="text-sm my-4 text-center"><h2 className="text-xl mb-8">📄</h2> <h3 className="underline lg:block hidden">Policies & Customer Care</h3><h3 className="underline lg:hidden block">Policies</h3></a>
                        <p className="lg:block hidden">At Mrs. Tweedy’s Poultry Haven, trust and transparency rule the roost. That’s why we’ve laid out everything you need to know in plain language:</p>
                        <ul className="list-disc space-y-4 ms-4 lg:block hidden">
                            <li>Shipping & Delivery – Learn about how and when your poultry products arrive safely at your doorstep.</li>
                            <li>Returns & Refunds – If there’s ever a problem, we’ll make it right—no squawks about it.</li>
                            <li>Animal Welfare Standards – Discover how we care for our birds with kindness, space, and sunshine.</li>
                            <li>Privacy Policy – Your data is as safe with us as our hens in the coop at night.</li>
                            <li>Terms & Conditions – The fine print, made friendly.</li>
                        </ul>
                        <p className="lg:block hidden">Need help? Don’t hesitate to reach out through our contact form or send us a direct email.</p>
                    </li>
                    <li className="mx-auto space-y-4 flex flex-col p-2">
                        <a className="text-sm my-4 text-center"><h2 className="text-xl mb-8">🧺</h2> <h3 className="underline lg:block hidden">Shop With Confidence</h3><h3 className="underline lg:hidden block">Shop</h3></a>
                        <p className="lg:block hidden">All our poultry products are hand-processed, packed with care, and sourced directly from our farm to preserve freshness and quality. We are DEFRA-certified and proudly support British farming standards. Whether you're ordering online or picking up from the farm, we ensure every product meets our “egg-ceptional” standards.</p>
                        <div className="my-4 space-y-2 lg:block hidden">
                            <p>Secure Payment Options:</p>
                            <ul className="space-y-2 list-disc ms-4">
                                <li>We accept all major credit/debit cards, PayPal, and farm-to-fork gift vouchers.</li>
                                <li>🔐 SSL-encrypted checkout for your peace of mind.</li>
                            </ul>
                        </div>
                    </li>
                    <li className="mx-auto space-y-4 flex flex-col p-2">
                        <a className="text-sm my-4 text-center"><h2 className="text-xl mb-8">❤️</h2> <h3 className="underline lg:block hidden"> A Note from Mrs. Tweedy Herself</h3></a>
                        <div className="lg:block hidden">
                            <p className="text-amber-200">
                                “Raising chickens started as a childhood passion and bloomed into a calling. At Mrs. Tweedy’s Poultry Haven, we don’t just raise birds—we nurture life. Each feathered friend is part of our family, and we work tirelessly to ensure their happiness and health, because we believe it leads to better food for your family too.
                                From our coop to your kitchen, thank you for choosing kindness, quality, and sustainability. Whether you’re enjoying our juicy roasted chicken on a Sunday afternoon or cracking open one of our golden-yolked eggs for breakfast, you’re sharing in a tradition of care that began with a girl, a hen, and a whole lot of heart.”
                            </p>
                            <p>– Mrs. Agatha Tweedy Founder & Chief Chicken Whisperer</p>
                            <div className="space-y-2">
                                <p className="text-center">🐣 Bringing Farms Closer to Families</p>
                                <p>Mrs. Tweedy’s Poultry Haven is more than just a poultry farm—it’s a way of life. A place where tradition meets innovation, we’re delighted to have you as part of the flock.</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <div className="my-4 lg:hidden block">
                        <div className="text-center"><h2>📱</h2> <h2> Follow the Flock </h2> </div>
                        <div className="lg:block hidden">Join us online and follow the daily adventures of Mrs. Tweedy and her beloved hens. From sunrise crowing to egg-laying marvels, you'll get an authentic peek into the joy of poultry farming and updates on what’s fresh.</div>
                        <div className="space-y-1 flex justify-between lg:hidden px-20 py-8">
                            <p className="text-center items-center flex justify-between"><FaXTwitter /></p>                        
                            <p className="text-center items-center flex justify-between"><AiFillInstagram /></p>                        
                            <p className="text-center items-center flex justify-between"><FaFacebookF /></p>                        
                            <p className="text-center items-center flex justify-between"><FaYoutube /></p>                        
                        </div>
                    </div>
                </ul>
            </div>
            <div>

                
                
                
            </div>
            <p className="text-xs text-center bg-blue-900 p-2">© 2025 Mrs. Tweedy’s Poultry Haven. All Rights Reserved. “Where every cluck tells a story.”</p>
        </footer>

    )
}