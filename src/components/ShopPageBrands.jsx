import Brand1 from "../assets/images/Brand1.png"
import Brand2 from "../assets/images/Brand2.png"
import Brand3 from "../assets/images/Brand3.png"
import Brand4 from "../assets/images/Brand4.png"
import Brand5 from "../assets/images/Brand5.png"
import Brand6 from "../assets/images/Brand6.png"

export function ShopPageBrands() {
    return(
        <>
        <section className = "brands-section bg-[#FAFAFA] py-24 flex flex-col items-center gap-y-16">
        <img src = {Brand1} alt="Brand1" className="h-12 object-contain"/>
        <img src = {Brand2} alt="Brand2" className="h-16 object-contain"/>
        <img src = {Brand3} alt="Brand3" className="h-24 object-contain"/>
        <img src = {Brand4} alt="Brand4" className="h-16 object-contain"/>
        <img src = {Brand5} alt="Brand5" className="h-20 object-contain"/>
        <img src = {Brand6} alt="Brand6" className="h-32 object-contain"/>
        </section>
        </>
    )
}