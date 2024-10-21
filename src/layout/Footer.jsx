import { NavLink } from "react-router-dom";

export function Footer() {
    return(
        <>
        <section className = "mt-20 bg-[#FAFAFA] w-full">
            <div className = "py-10 ml-10">
            <h3 className = "mont font-bold text-2xl text-[#252B42] mb-3">BB Butik</h3>
                <div className = "flex">
                <i className="fa fa-facebook-square text-[#23A6F0] text-2xl mr-5"></i>
                <i className="fa fa-instagram text-[#23A6F0] text-2xl mr-5"></i>
                <i className="fa fa-twitter text-[#23A6F0] text-2xl"></i>
                </div>
            </div>
        </section>

        <section className = "py-16 ml-11">
        <div className = "mb-8">
        <h5 className = "font-bold text-lg mb-3 text-[#252B42]">Company Info</h5>
        <div className = "flex flex-col">
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">About Us</NavLink>
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">Carrier</NavLink>
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">We are hiring</NavLink>
        <NavLink className = "font-bold text-[#737373]" to = "">Blog</NavLink>
        </div>
        </div>

        <div className = "mb-8">
        <h5 className = "font-bold text-lg mb-3 text-[#252B42]">Legal</h5>
        <div className = "flex flex-col">
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">About Us</NavLink>
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">Carrier</NavLink>
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">We are hiring</NavLink>
        <NavLink className = "font-bold text-[#737373]" to = "">Blog</NavLink>
        </div>
        </div>

        <div className = "mb-8">
        <h5 className = "font-bold text-lg mb-3 text-[#252B42]">Features</h5>
        <div className = "flex flex-col">
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">Business Marketing</NavLink>
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">User Analytic</NavLink>
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">Live Chat</NavLink>
        <NavLink className = "font-bold text-[#737373]" to = "">Unlimited Support</NavLink>
        </div>
        </div>

        <div className = "mb-8">
        <h5 className = "font-bold text-lg mb-3 text-[#252B42]">Resources</h5>
        <div className = "flex flex-col">
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">IOS & Android</NavLink>
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">Watch a demo</NavLink>
        <NavLink className = "font-bold text-[#737373] mb-2.5" to = "">Customers</NavLink>
        <NavLink className = "font-bold text-[#737373]" to = "">API</NavLink>
        </div>
        </div>

        <div>
        <h5 className = "font-bold text-lg mb-3 text-[#252B42]">Get In Touch</h5>
        <div className = "">
        <form>
            <label className = "flex">
                <input placeholder="Your Email" className = "font-normal border-1 px-4 rounded-l bg-[#F9F9F9]" type="email" name="email" />
                <button className = "bg-[#23A6F0] text-white py-3 px-4 rounded-r-sm font-medium text-sm">Subscribe</button>
            </label>
        </form>
        </div>
        </div>
        </section>

        <section className = "mt-6 bg-[#FAFAFA] w-full">
            <div className = "py-10 flex justify-center">
            <h6 className = "flex flex-wrap w-44 text-center mont font-bold text-sm text-[#737373]">Made With Love By Berk Boğaç Akgüneş</h6>
            </div>
        </section>
        </>
    )
}