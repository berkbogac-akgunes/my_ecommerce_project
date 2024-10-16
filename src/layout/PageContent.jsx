import { ShopCardGroup } from "@/components/ShopCardGroup";

export function PageContent() {
    return(
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
    )
}