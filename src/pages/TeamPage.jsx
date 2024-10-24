import { TeamPageCards } from "@/components/TeamPageCards";

export function TeamPage() {
    return(
        <>
        <section className = "bg-[#FAFAFA] flex flex-col items-center py-12 pt-8 px-6 md:pt-16 md:px-[10rem] 2xl:px-[20rem]">
        <div className = "">
        <h2 className = "mont font-bold text-5xl text-[#252B42] w-[16rem] md:w-full text-center mb-4">Meet Our Team</h2>
        <p className = "mont font-bold text-base text-[#737373] w-[17rem] md:w-[27rem] text-center">Problems trying to resolve the conflict between the two major 
        realms of Classical physics: Newtonian mechanics 
        </p>
        </div>
        <div className = "md:flex md:flex-wrap md:gap-x-20 md:justify-center pb-12">
            <TeamPageCards/>
        </div>
        </section>
        </>
    )
}