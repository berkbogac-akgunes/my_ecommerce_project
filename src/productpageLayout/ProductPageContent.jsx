import { ProductPageBestSellers } from "@/components/ProductPageBestSellers";
import { ProductPageDescription } from "@/components/ProductPageDescription";
import { ProductPageProduct } from "@/components/ProductPageProduct";
import { ShopPageBrands } from "@/components/ShopPageBrands";
import { Footer } from "@/layout/Footer";

export function ProductPageContent() {
    return(
        <>
        <ProductPageProduct/>
        <ProductPageDescription/>
        <ProductPageBestSellers/>
        <ShopPageBrands/>
        <Footer/>
        </>
    )
}