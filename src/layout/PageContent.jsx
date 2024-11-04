import { ShopCardGroup } from "@/components/ShopCardGroup";
import { PageContentSlider } from '../components/PageContentSlider';
import { PageContentLearnMore } from "@/components/PageContentLearnMore";
import { CardSection } from "@/components/CardSection";
import { ProductCard } from "@/components/ProductCard";

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
        <section className = "md:flex md:flex-col md:justify-center py-20 mx-10 md:mx-40 2xl:mx-64">
            <div className = "flex flex-col text-center items-center gap-y-2.5">
                <h4 className = "md:w-[40rem] flex flex-wrap justify-center font-normal text-xl text-[#737373]">Featured Products</h4>
                <h3 className = "md:w-[40rem] flex flex-wrap justify-center w-[15rem] mont font-bold text-2xl text-[#252B42]">BESTSELLER PRODUCTS</h3>
                <p className = "md:w-[40rem] flex flex-wrap justify-center w-[16rem] font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>
            <div className = "md:flex md:flex-wrap md:justify-center md:gap-x-7">
                <ProductCard/>
            </div>
        </section>
        <div className = "">
                <PageContentSlider/>
            </div>
            <div className = "">
                <PageContentLearnMore/>
            </div>
            <div className = "md:mx-60">
                <CardSection/>
            </div>
        </>
    )
}