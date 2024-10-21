import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import shopCard1 from "../assets/images/shopCard1.jpeg"
import shopCard2 from "../assets/images/shopCard2.jpeg"
import shopCard3 from "../assets/images/shopCard3.jpeg"
import shopCard4 from "../assets/images/shopCard4.jpeg"
import shopCard5 from "../assets/images/shopCard5.jpeg"

export function ShopPageCategories() {
    const itemInfo = [
        {src: shopCard1, title: shopCard1, mainTitle: "CLOTHS", total: 5},
        {src: shopCard2, title: shopCard2, mainTitle: "CLOTHS", total: 5},
        {src: shopCard3, title: shopCard3, mainTitle: "CLOTHS", total: 5},
        {src: shopCard4, title: shopCard4, mainTitle: "CLOTHS", total: 5},
        {src: shopCard5, title: shopCard5, mainTitle: "CLOTHS", total: 5}
    ]
    return(
        <section className = "bg-[#FAFAFA]">
        <section className = "flex flex-col items-center py-7">
        <h3 className = "mont font-bold text-2xl mb-9 text-[#252B42]">Shop</h3>
        <div className = "flex py-2.5 gap-x-4">
            <NavLink className = "font-bold" to="">Home</NavLink>
            <FontAwesomeIcon className = "text-[#BDBDBD] mt-1.5 text-sm" icon={faChevronRight} />
            <h6 className = "text-[#737373] font-semibold mt-0.5">Shop</h6>
        </div>
        </section>

        <section className = "py-6 mx-10">
            {itemInfo.map((item, index) => {
                return(
                 // eslint-disable-next-line react/jsx-key
                 <div className = "relative mb-4">
                 <img className = "brightness-75 object-cover h-[19rem] w-[21rem]" src = {itemInfo[index].src} title = {itemInfo[index].title}/>
                 <div className = "absolute left-[8.5rem] bottom-[8rem]">
                 <h5 className = "font-bold text-base mr-1.5 text-white">{itemInfo[index].mainTitle}</h5>
                 <h6 className = "text-white font-semibold mt-0.5">{itemInfo[index].total} Items</h6>
                 </div>
                 </div>
                )
            })}
        </section>
        </section>
    )
}