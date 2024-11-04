import { getGravatarUrl } from "@/helpers/utils/gravatar";
import { faCartShopping, faEnvelope, faHeart, faMagnifyingGlass, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShopDropdownMenu from "./ShopDropDownMenu";
import { ProfileDropdown } from "./ProfileDropDown";

export function ShopPageDesktopHeaderMenu() {
    const user = useSelector((state) => state.client.user);
    return(
        <>
        <section className = "mont bg-[#252B42] text-white h-14 flex items-center justify-between px-9">
            <div className = "flex">
                <FontAwesomeIcon className = "mr-2 mt-0.5" icon={faPhone} />
                <h6 className = "font-semibold mr-10">(225) 555-0118</h6>
                <FontAwesomeIcon className = "mr-2 mt-0.5" icon={faEnvelope} />
                <h6 className = "font-semibold">michelle.rivera@example.com</h6>
            </div>
            <div className = "flex">
                <h6 className = "font-semibold">Follow Us  and get a chance to win 80% off</h6>
            </div>
            <div className = "flex">
                <h6 className = "font-semibold mr-5 mt-1">Follow Us :</h6>
                <div className = "mb-1 text-xl">
                    <i className="mr-6 fa fa-instagram"></i>
                    <i className="mr-6 fa fa-youtube-play"></i>
                    <i className="mr-6 fa fa-facebook-square"></i>
                    <i className="mr-6 fa fa-twitter"></i>
                </div>
            </div>
        </section>
        <section className = "mont flex justify-between h-20 items-center px-10">
        <div className = "flex">
                <h3 className = "font-bold text-2xl">BB Butik</h3>
            </div>
            <div className = "font-bold flex ml-24 mr-56 gap-x-10">
                <NavLink to="/">Home</NavLink>
                <div className = "font-bold flex">
                <NavLink to = "/shop">Shop</NavLink>
                <ShopDropdownMenu />
                </div>
                <NavLink to="">About</NavLink>
                <NavLink to="">Blog</NavLink>
                <NavLink to="">Contact</NavLink>
                <NavLink to="">Pages</NavLink>
            </div>
            <div className = "font-semibold text-[#23A6F0] flex gap-x-2">
                { user?.name ? 
                (
                    <div className="flex items-center space-x-4 mr-12">
                    <img
                    src={getGravatarUrl(user.email)}
                    alt="User avatar"
                    className="h-8 w-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                    <ProfileDropdown/>
                    </div>
                ) :
                (
                <div className = "font-semibold text-[#23A6F0] flex gap-x-2">
                <FontAwesomeIcon className="mt-1 text-sm" icon={faUser} />
                <NavLink to="login">Login</NavLink>
                <p>/</p>
                <NavLink className = "mr-12" to="/signup">Register</NavLink>
                </div>
                )}
                <FontAwesomeIcon className = "mr-7 mt-1" icon={faMagnifyingGlass} />
                <div className = "flex gap-x-2 mr-7">
                <FontAwesomeIcon className = "mt-1"icon={faCartShopping} />
                <p>1</p>
                </div>
                <div className = "flex gap-x-2 mr-7 ">
                <FontAwesomeIcon className = "mt-1" icon={faHeart} />
                <p>1</p>
                </div>
            </div>
    </section>
    </>
    )
}