import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react"
import { NavLink } from "react-router-dom"

export function Slider() {

    return(
        <>
          <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="object-cover w-[100%] h-[753px] object-top" src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rj7Gnkq7WuiIUaXnIIq00gZrouM1WPiTMzb2uZ0dQBjVpkc8wMEpMaf9oVbqy~nc01h7RpF39CSKN1cYyfQa0GDCP2fZV-HGaQHatmgR5YlPu2w8HtBYWv1itIPM7mBBihOYMBxanKW2pELQzexr~pjMySr0JfJjBVvkkSG6JOkjUFp6yiBQrJj1pW52wGvhgnJCRzct~XCbykoEL9kODfnxnhtEnym30Nbp3tpRDHlEhMiu92J70yMnc~wO8iAiPdpp~8e~AuVpwDzZopAX~gpmq9ue4yOrtQu-ohZjNrTAOPJKLZx9oWde7jrTXwH3M04hDKrei0JHwExeILSJYg__" alt="slide 1" />
                <CCarouselCaption className = "w-4/6 md:flex flex-col mont pt-12 pb-14 mb-24">
                        <h5 className = "md:text-lg md:text-start font-bold text-base mb-9">SUMMER 2020</h5>
                        <h2 className = "md:text-6xl md:text-start font-bold text-4xl mb-9">NEW COLLECTION</h2>
                        <h4 className = "md:font-medium md:w-5/12 md:text-start flex flex-wrap font-normal text-xl mb-9">We know how large objects will act, but things on a small scale.</h4>
                        <NavLink className = "md:w-1/4 md:mb-6 bg-[#2DC071] py-3 px-10 rounded font-bold text-2xl" to = "/shop"><button>SHOP NOW</button></NavLink>
                    </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="object-cover w-[100%] h-[753px]" src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slide 2" />
                <CCarouselCaption className = "w-4/6 md:flex flex-col mont pt-12 pb-14 mb-24">
                        <h5 className = "md:text-lg md:text-start font-bold text-base mb-9">SUMMER 2020</h5>
                        <h2 className = "md:text-6xl md:text-start font-bold text-4xl mb-9">NEW COLLECTION</h2>
                        <h4 className = "md:font-medium md:w-5/12 md:text-start flex flex-wrap font-normal text-xl mb-9">We know how large objects will act, but things on a small scale.</h4>
                        <button className = "md:w-1/4 md:mb-6 bg-[#2DC071] py-3 px-10 rounded font-bold text-2xl">SHOP NOW</button>
                    </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="object-cover w-[100%] h-[753px]" src="https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slide 3" />
                <CCarouselCaption className = "w-4/6 md:flex flex-col mont pt-12 pb-14 mb-24">
                        <h5 className = "md:text-lg md:text-start font-bold text-base mb-9">SUMMER 2020</h5>
                        <h2 className = "md:text-6xl md:text-start font-bold text-4xl mb-9">NEW COLLECTION</h2>
                        <h4 className = "md:font-medium md:w-5/12 md:text-start flex flex-wrap font-normal text-xl mb-9">We know how large objects will act, but things on a small scale.</h4>
                        <button className = "md:w-1/4 md:mb-6 bg-[#2DC071] py-3 px-10 rounded font-bold text-2xl">SHOP NOW</button>
                    </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </>
    )
}