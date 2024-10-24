import { NavLink } from "react-router-dom";

export function ContactPage() {
    return(
        <>
        <div className = "bg-cover bg-center bg-no-repeat bg-[url('https://s3-alpha-sig.figma.com/img/8671/5b00/02656e5e55f527a50fe8ae2bc1e70550?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZJbK1IdLI-67rpxzWMLVkGdpkGREHTW4TbX6Nt1ccqxOFbIPbmOz5QnuBwjP-3JvjSIdA3icKz-Yan7Y4aiuaVvGnJsP2JE3Ljg7joHWauOwbUvar4n~8Jwc3GCFgEVcwoX4pb9h26ILcOe0z1L~POV7VC8FMsNN~x8PhkAvaijwCOHMFVbHujwJZDSLHx5SkvHMP1MF3orh9kwtb9EtEzafLgx2rxYIIjmxOZCA-ZkdB603OJyHQ8E66m7TgMoC-7tkqp7sw1D5waskbLV3XJp4nHYKmJms1-ufc7J6Ii~pghOidVPzJFDAWyBhEZOEs0446CfoW3WRvp3TOEq3A__')]">
        <section className = "px-16 w-screen h-screen flex flex-col justify-center items-center text-center">
            <div>
            <h2 className = "mont font-bold text-5xl md:text-6xl w-72 md:w-full text-[#252B42] mb-8">Questions & Answers</h2>
            </div>
            <div>
                <p className = "mont text-[#737373] md:w-[32rem] md:text-xl text-lg font-medium mb-10">Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
            </div>
            <div>
            <NavLink to = ""><h6 className = "mont text-lg md:text-xl text-[#23A6F0] font-semibold mb-4">CONTACT US</h6></NavLink>
            </div>
        </section>
        </div>
        </>
    )
}