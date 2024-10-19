import LearnMore from "../assets/images/LearnMore.png"

export function PageContentLearnMore() {
    return(
        <>
        <div className = "pt-32 w-[100%] flex flex-col items-center text-center mont">
            <div className = "">
            <h4 className = "font-semibold text-lg mb-9 text-[#BDBDBD]">SUMMER 2020</h4>
            <h2 className = "font-bold text-4xl mb-9 w-60 text-[#252B42]">Part of the Neural Universe</h2>
            <h4 className = "flex flex-wrap font-semibold text-xl mb-9 w-60 text-[#737373]">We know how large objects will act, but things on a small scale.</h4>
            <div className = "flex flex-col gap-y-6">
            <button className = "bg-[#2DC071] text-white py-3 px-8 rounded font-semibold text-lg">BUY NOW</button>
            <button className = "border-2 border-[#2DC071] bg-white py-3 px-8 rounded font-semibold text-lg text-[#2DC071]">Learn More</button>
            </div>
            </div>
            </div>
            <div>
            <img className = "object-cover w-[85%] h-[320px]" title = "LearnMore" src = {LearnMore} />
        </div>
        </>
    )
}