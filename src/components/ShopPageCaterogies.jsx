import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function ShopPageCategories() {
    const history = useHistory();
    const categories = useSelector((state) => state.products.categories);

    // Get top 5 categories sorted by rating
    const topCategories = useMemo(() => {
        return categories
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
    }, [categories]);

    // Handle category navigation
    const handleCategoryNavigation = (newGender, newCategory) => {
        history.push(`/shop/${newGender === 'k' ? 'kadin' : 'erkek'}/${newCategory.toLowerCase()}`);
    };

    return(
        <section className = "bg-[#FAFAFA]">
        <div className = "md:mx-44">
        <section className = "flex flex-col md:flex-row md:justify-between items-center py-7">
        <h3 className = "md:mb-0 mont font-bold text-2xl mb-9 text-[#252B42]">Shop</h3>
        <div className = "flex py-2.5 gap-x-4">
            <NavLink className = "font-bold" to="">Home</NavLink>
            <FontAwesomeIcon className = "text-[#BDBDBD] mt-1.5 text-sm" icon={faChevronRight} />
            <h6 className = "text-[#737373] font-semibold mt-0.5">Shop</h6>
        </div>
        </section>

        <section className = "md:mx-0 py-6 mx-10 md:flex md:flex-row md:gap-x-4">
            {topCategories.map((cat) => {
                return(
                <>
                <div
                key={cat.id} 
                onClick={() => handleCategoryNavigation(cat.gender, cat.title)}
                ></div>
                 <div className = "relative mb-4">
                 <img className = "brightness-75 object-cover md:h-[16rem] h-[19rem] w-[21rem]" src = {cat.img} title = {cat.title}/>
                 <Link to={`/shop/${cat.gender}/${cat.code.split(':')[1]}`}>
                 <div className = "inset-0 absolute flex flex-col justify-center items-center">
                 <h5 className = "font-bold text-base text-white">{cat.title}</h5>
                 <h6 className = "text-white font-semibold">Rating: {cat.rating.toFixed(1)}</h6>
                 </div>
                 </Link>
                 </div>
                 </>
                 )})}
        </section>
        </div>
        </section>
    )
}