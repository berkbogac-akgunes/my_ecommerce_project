import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function ProductPageDescription() {
    return(
        <>
        <section className = "">
        <div className = "flex px-2 gap-x-3 justify-center mt-6">
        <NavLink className = "text-[#737373] font-medium text-base" to = "">Description</NavLink>
        <NavLink className = "text-[#737373] font-medium text-base" to = "">Additional Information</NavLink>
        <div className = "flex gap-x-1">
        <NavLink className = "text-[#737373] font-medium text-base" to = "">Reviews</NavLink>
        <p className = "text-[#23856D] font-medium font-sm">(0)</p>
        </div>
        </div>
        </section>
        <section className = "px-8 flex flex-col items-left mb-8">
            <img className = "my-20 shadow-lg w-[20rem] h-[17rem]" src = "https://s3-alpha-sig.figma.com/img/8b0c/0f76/c949a2cffacf01d40c82241e905719cb?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FeRi25CMHVJ0twiH~~i4Aj6Z8qDuF7XnHb~8nieBKC7bTeZyFSglmgiQ7viMWtrhvGSaJlzomX5y2Td5KXhcw6EEGwXqwWj4nusn95pIxLVg-ZnWpdAhu4sm1EFk4EwZD8lp7DoVghfoxevEyiuE1ka354Dh0SatadimLDNXu4J49zxATbIhtJM16vboBoXu1ddSGHKJsuinlBMHjBmxt7hc1cq~lqIjzRP5JBDeyl-BfK62trDWXj1eyfrQvXyp2tiORa57UnB7hjwql1O4IL0-2xESROz8cfs1BGTUg9UDz-sUp~45JgmYd8w4jnaDi0CAZu~8wtSa4wyv2RolMQ__" title = "1"/>
            <h3 className = "mont font-bold text-2xl mb-9">the quick fox jumps over</h3>
            <h6 className = "mont text-[#737373] font-semibold mb-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </h6>
            <h6 className = "mont text-[#737373] font-semibold mb-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </h6>
            <h6 className = "mont text-[#737373] font-semibold">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </h6>
            <h3 className = "mont font-bold text-2xl mb-9 mt-20">the quick fox jumps over</h3>
            <div className = "flex gap-x-4">
            <FontAwesomeIcon icon={faChevronRight} />
            <h6 className = "mont text-[#737373] font-semibold mb-4">the quick fox jumps over the lazy dog</h6>
            </div>
            <div className = "flex gap-x-4">
            <FontAwesomeIcon icon={faChevronRight} />
            <h6 className = "mont text-[#737373] font-semibold mb-4">the quick fox jumps over the lazy dog</h6>
            </div>
            <div className = "flex gap-x-4">
            <FontAwesomeIcon icon={faChevronRight} />
            <h6 className = "mont text-[#737373] font-semibold mb-4">the quick fox jumps over the lazy dog</h6>
            </div>
            <div className = "flex gap-x-4">
            <FontAwesomeIcon icon={faChevronRight} />
            <h6 className = "mont text-[#737373] font-semibold mb-4">the quick fox jumps over the lazy dog</h6>
            </div>
            <h3 className = "mont font-bold text-2xl mb-9 mt-20">the quick fox jumps over</h3>
            <div className = "flex gap-x-4">
            <FontAwesomeIcon icon={faChevronRight} />
            <h6 className = "mont text-[#737373] font-semibold mb-4">the quick fox jumps over the lazy dog</h6>
            </div>
            <div className = "flex gap-x-4">
            <FontAwesomeIcon icon={faChevronRight} />
            <h6 className = "mont text-[#737373] font-semibold mb-4">the quick fox jumps over the lazy dog</h6>
            </div>
            <div className = "flex gap-x-4">
            <FontAwesomeIcon icon={faChevronRight} />
            <h6 className = "mont text-[#737373] font-semibold mb-4">the quick fox jumps over the lazy dog</h6>
            </div>
            <div className = "flex gap-x-4">
            <FontAwesomeIcon icon={faChevronRight} />
            <h6 className = "mont text-[#737373] font-semibold mb-4">the quick fox jumps over the lazy dog</h6>
            </div>
        </section>
        </>
    )
}