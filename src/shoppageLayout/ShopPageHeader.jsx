import { ShopPageDesktopHeaderMenu } from "@/components/ShopPageDesktopHeaderMenu";
import { ShopPageMobileHeaderMenu } from "@/components/ShopPageMobileHeaderMenu";

export function ShopPageHeader() {
    return(
        <>
        <header>
            <section className = "mobile-nav-section max-sm:hidden">
                <ShopPageDesktopHeaderMenu/>
            </section>
            <section className = "mobile-nav-section md:hidden">
                <ShopPageMobileHeaderMenu/>
            </section>
        </header>
        </>
    )
}