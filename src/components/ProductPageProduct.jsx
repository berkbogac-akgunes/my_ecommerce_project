import { ProductPageSlide } from "@/components/ProductPageSlide";
import { faCartShopping, faChevronRight, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export function ProductPageProduct() {
    return(
        <>
        <section className = "bg-[#FAFAFA] px-8">
        <div className = "md:mx-44">
            <section className = "flex flex-col md:flex-row md:justify-between items-center py-7">
            <div className = "flex py-2.5 gap-x-4">
                <NavLink className = "font-bold" to="">Home</NavLink>
                <FontAwesomeIcon className = "text-[#BDBDBD] mt-1.5 text-sm" icon={faChevronRight} />
                <h6 className = "text-[#737373] font-semibold mt-0.5">Shop</h6>
            </div>
            </section>
            <section className = "py-12">
                <ProductPageSlide/>
                <div className = "mt-6 pl-6">
                <h4 className = "font-semibold text-xl text-[#252B42] mb-3">Floating Phone</h4>
                <div className = "flex">
                <div className = "mb-3">
                <FontAwesomeIcon className = "text-yellow-400 mr-2" icon={faStar} />
                <FontAwesomeIcon className = "text-yellow-400 mr-2" icon={faStar} />
                <FontAwesomeIcon className = "text-yellow-400 mr-2" icon={faStar} />
                <FontAwesomeIcon className = "text-yellow-400 mr-2" icon={faStar} />
                <FontAwesomeIcon className = "" icon={faStar} />
                </div>
                <h6 className = "text-[#737373] font-semibold ml-3 pt-0.5">10 Reviews</h6>
                </div>
                </div>
                <div className = "pl-6">
                <h3 className = "mont font-bold text-2xl mb-2">$1,139.33</h3>
                <div className = "flex gap-x-1 mb-3">
                <h6 className = "text-[#737373] font-semibold">Availability</h6>
                <h6 className = "text-[#737373] font-semibold">:</h6>
                <h6 className = "text-[#23A6F0] font-semibold">In Stock</h6>
                </div>
                <p className="text-[#858585] mr-12">Met minim Mollie non desert 
                Alamo est sit cliquey dolor do 
                met sent. RELIT official consequent 
                door ENIM RELIT Mollie. Excitation 
                venial consequent sent nostrum met.
                </p>
                <div className="border-b-2 py-2"></div>
                <div className = "flex mt-3">
                <span className="h-7 w-7 bg-[#23A6F0] rounded-full mr-3 inline-block"></span>
                <span className="h-7 w-7 bg-[#23856D] rounded-full mr-3 inline-block"></span>
                <span className="h-7 w-7 bg-[#E77C40] rounded-full mr-3 inline-block"></span>
                <span className="h-7 w-7 bg-[#252B42] rounded-full inline-block"></span>
                </div>
                <div className = "flex gap-x-2 mt-10">
                <button className = "bg-[#23A6F0] py-2 px-3 rounded font-semibold text-base text-white">Select Options</button>
                <FontAwesomeIcon className = "bg-white border rounded-full p-2.5" icon={faHeart} />
                <FontAwesomeIcon className = "bg-white border rounded-full p-2.5" icon={faCartShopping} />
                <FontAwesomeIcon className = "bg-white border rounded-full p-2.5" icon={faEye} />
                </div>
                </div>
            </section>
        </div>
        </section>
        </>
    )
}