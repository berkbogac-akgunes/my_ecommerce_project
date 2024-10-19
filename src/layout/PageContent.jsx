import { ProductCardsGroup } from "@/components/ProductCardsGroup";
import { ShopCardGroup } from "@/components/ShopCardGroup";
import { PageContentSlider } from '../components/PageContentSlider';
import { PageContentLearnMore } from "@/components/PageContentLearnMore";

export function PageContent() {
    return(
        <>
        <section className = "bg-[#FAFAFA]">
        <div className = "py-20 gap-y-12 mx-10 md:mx-60">
            <div className = "flex flex-col text-center gap-y-2.5">
                <h3 className = "mont font-bold text-2xl text-[#252B42]">{"EDITOR'S PICK"}</h3>
                <p className = "font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>
            <div className = "">
                <ShopCardGroup/>
            </div>
        </div>
        </section>
        <section className = "py-20 mx-10 md:mx-60">
            <div className = "flex flex-col text-center items-center gap-y-2.5">
                <h4 className = "flex flex-wrap font-normal text-xl text-[#737373]">Featured Products</h4>
                <h3 className = "flex flex-wrap justify-center w-[15rem] mont font-bold text-2xl text-[#252B42]">BESTSELLER PRODUCTS</h3>
                <p className = "flex flex-wrap justify-center w-[16rem] font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>
            <div className = "">
                <ProductCardsGroup/>
            </div>
        </section>
        <div className = "">
                <PageContentSlider/>
            </div>
            <div className = "">
                <PageContentLearnMore/>
            </div>
        </>
    )
}