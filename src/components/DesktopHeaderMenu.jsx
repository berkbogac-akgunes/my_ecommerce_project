import { faCartShopping, faEnvelope, faHeart, faMagnifyingGlass, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function DesktopHeaderMenu() {
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
                <NavLink className = "font-semibold" to="/shop">Shop</NavLink>
                <NavLink to="">About</NavLink>
                <NavLink to="">Blog</NavLink>
                <NavLink to="">Contact</NavLink>
                <NavLink to="">Pages</NavLink>
            </div>
            <div className = "font-semibold text-[#23A6F0] flex gap-x-2">
                <FontAwesomeIcon className="mt-1 text-sm" icon={faUser} />
                <NavLink to="">Login</NavLink>
                <p>/</p>
                <NavLink className = "mr-12" to="">Register</NavLink>
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