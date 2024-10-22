import { ShopPageBrands } from "@/components/ShopPageBrands";
import { ShopPageCategories } from "@/components/ShopPageCaterogies";
import { ShopPageProducts } from "@/components/ShopPageProducts";
import { Footer } from "@/layout/Footer";

export function ShopPageContent() {
    return(
        <>
        <ShopPageCategories/>
        <ShopPageProducts/>
        <ShopPageBrands/>
        <Footer/>
        </>
    )
}