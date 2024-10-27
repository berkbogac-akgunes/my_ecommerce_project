import { AboutUsHero } from "@/components/AboutUsHero";
import { AboutUsStatsBottom } from "@/components/AboutUsStatsBottom";
import { AboutUsStatsTop } from "@/components/AboutUsStatsTop";
import AboutUsVideoPlayer from "@/components/AboutUsVideoPlayer";
import { DesktopHeaderMenu } from "@/components/DesktopHeaderMenu";
import { MobileHeaderMenu } from "@/components/MobileHeaderMenu";
import { AboutUsTeam } from "@/components/AboutUsTeam";
import { AboutUsBrands } from "@/components/AboutUsBrands";
import { AboutUsWork } from "@/components/AboutUsWork";
import { Footer } from "@/layout/Footer";

export function AboutUs() {
    return(
        <>
        <section className = "mobile-nav-section max-sm:hidden">
                <DesktopHeaderMenu/>
            </section>
            <section className = "mobile-nav-section md:hidden bg-[#FAFAFA] pb-4">
                <MobileHeaderMenu/>
            </section>
            <section>
                <AboutUsHero/>
            </section>
            <section>
                <AboutUsStatsTop/>
            </section>
            <section>
                <AboutUsStatsBottom/>
            </section>
            <section>
                <AboutUsVideoPlayer/>
            </section>
            <section className = "my-32">
                <AboutUsTeam/>
            </section>
            <section>
                <AboutUsBrands/>
            </section>
            <section>
                <AboutUsWork/>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}