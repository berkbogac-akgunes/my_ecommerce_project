import { getGravatarUrl } from "@/helpers/utils/gravatar";
import { faBars, faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export function MobileHeaderMenu() {
  const user = useSelector((state) => state.client.user);
    return(
        <>
        <div className = "flex justify-between">
                  <div>
                    <h3 className = "mont font-bold text-2xl text-[#252B42] ml-6 mt-10">BB Butik</h3>
                  </div>
                  <div className = "flex justify-end text-2xl text-[#252B42] mr-4 mt-9">
                  { user?.name ? 
                (
                    <div className="flex items-center">
                    <img
                    src={getGravatarUrl(user.email)}
                    alt="User avatar"
                    className="h-4 w-4 rounded-full mr-1"
                    />
                    <span className="flex flex-wrap w-[2.5rem] text-sm font-medium text-gray-700">{user.name}</span>
                    </div>
                ) :
                (
                  <NavLink className = "mr-3" to="/login"><FontAwesomeIcon icon={faUser} /></NavLink>
                )}
                <div className = "mr-4 ml-2">
                  <NavLink className = "mr-4" to=""><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
                  <NavLink className = "mr-4" to=""><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                  <NavLink className = "" to=""><FontAwesomeIcon icon={faBars} /></NavLink>
                  </div>
                  </div>
                </div>
                <div>
                <nav className = "flex flex-col items-center font-medium my-24 text-3xl gap-8 text-[#737373]">
                    <NavLink className = "font-normal" to="/">Home</NavLink>
                    <NavLink to="">Product</NavLink>
                    <NavLink to="">Pricing</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/team">Team</NavLink>
                </nav>
                </div>
        </>
    )
}