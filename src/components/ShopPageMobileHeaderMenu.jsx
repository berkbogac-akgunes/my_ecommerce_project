import { faBars, faCartShopping, faHeart, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function ShopPageMobileHeaderMenu() {
    return(
        <>
        <div className = "flex justify-between">
                  <div>
                    <h3 className = "mont font-bold text-2xl text-[#252B42] ml-9 mt-9">BB Butik</h3>
                  </div>
                  <div className = "flex justify-end text-2xl text-[#252B42] mr-9 mt-9 gap-6">
                  <NavLink to=""><FontAwesomeIcon icon={faBars} /></NavLink>
                  </div>
                </div>
                <div className = "flex flex-col items-center font-medium my-24 text-3xl gap-8">
                <nav className = "flex flex-col items-center font-medium gap-8 text-[#737373]">
                    <NavLink className = "font-semibold text-[#252B42]" to="/">Home</NavLink>
                    <NavLink to="">Product</NavLink>
                    <NavLink to="">Pricing</NavLink>
                    <NavLink to="">Contact</NavLink>
                    <NavLink to="">Pages</NavLink>
                </nav>
                <div className = "flex flex-col items-center font-medium gap-8 text-[#23A6F0]">
                <div className = "flex flex-row w-[16rem]">
                <FontAwesomeIcon className="mt-1 mr-2 text-2xl" icon={faUser} />
                <NavLink className = "mr-3" to="">Login</NavLink>
                <p className = "mr-3">/</p>
                <NavLink className = "mr-12" to="">Register</NavLink>
                </div>
                <FontAwesomeIcon className = "mr-7 mt-1" icon={faMagnifyingGlass} />
                <div className = "flex gap-x-2 mr-7">
                <FontAwesomeIcon className = "mt-1"icon={faCartShopping} />
                <p className = "text-sm mt-2">1</p>
                </div>
                <div className = "flex gap-x-2 mr-7 ">
                <FontAwesomeIcon className = "mt-1" icon={faHeart} />
                <p className = "text-sm mt-2">1</p>
                </div>
            </div>
            </div>
        </>
    )
}