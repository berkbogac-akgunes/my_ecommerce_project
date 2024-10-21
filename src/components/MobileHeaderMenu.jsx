import { faBars, faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function MobileHeaderMenu() {
    return(
        <>
        <div className = "flex justify-between">
                  <div>
                    <h3 className = "mont font-bold text-2xl text-[#252B42] ml-9 mt-9">BB Butik</h3>
                  </div>
                  <div className = "flex justify-end text-2xl text-[#252B42] mr-9 mt-9 gap-6">
                  <NavLink to=""><FontAwesomeIcon icon={faUser} /></NavLink>
                  <NavLink to=""><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
                  <NavLink to=""><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                  <NavLink to=""><FontAwesomeIcon icon={faBars} /></NavLink>
                  </div>
                </div>
                <div>
                <nav className = "flex flex-col items-center font-medium my-24 text-3xl gap-8 text-[#737373]">
                    <NavLink className = "font-normal" to="/">Home</NavLink>
                    <NavLink to="">Product</NavLink>
                    <NavLink to="">Pricing</NavLink>
                    <NavLink to="">Contact</NavLink>
                </nav>
                </div>
        </>
    )
}