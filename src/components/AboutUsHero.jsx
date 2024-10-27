import HeroImage from "../assets/images/AboutUsHeroImage.png"

export function AboutUsHero() {
    return(
        <>
        <section className = "2xl:mx-64 md:mx-24 md:flex md:flex-row">
        <div className = "md:mt-16 md:text-left md:pl-[1rem] md:pr-[12rem] md:w-[40rem] pt-32 w-[100%] flex flex-col items-center text-center md:items-left md:text-left mont">
            <div className = "">
            <h4 className = "md:text-left md:w-full font-bold text-lg mb-9 text-[#252B42] max-sm:hidden">ABOUT COMPANY</h4>
            <h2 className = "md:text-left md:w-full font-bold md:text-6xl text-5xl mb-9 text-[#252B42]">ABOUT US</h2>
            <h4 className = "md:text-left md:w-full flex flex-wrap font-semibold text-xl mb-9 w-60 text-[#737373]">We know how large objects will act, but things on a small scale.</h4>
            <div className = "md:text-left md:w-full md:flex-row flex flex-col gap-y-6">
            <button className = "md:mr-4 bg-[#2DC071] text-white py-3 px-8 rounded font-semibold text-lg">Get Quote Now</button>
            </div>
            </div>
            </div>
            <div className = "flex justify-center mt-40 md:mt-0">
            <img className = "2xl:w-[48rem] 2xl:h-[48rem] md:w-[40rem] md:h-[40rem] object-cover w-[85%] h-[320px]" title = "LearnMore" src = {HeroImage} />
        </div>
        </section>
        </>
    )
}