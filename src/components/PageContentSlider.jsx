import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

export function PageContentSlider() {

    return(
        <>
          <CCarousel controls indicators>
            <CCarouselItem>
                <div className = "bg-[#23856D] w-[100%] h-[750px] text-white flex flex-col items-center text-center mont">
                    <h4 className = "font-semibold text-lg mb-9 mt-[15.5rem]">SUMMER 2020</h4>
                    <h2 className = "font-bold text-4xl mb-9 w-60">Vita Classic 
                    Product</h2>
                    <h4 className = "flex flex-wrap font-normal text-xl mb-9 w-60">We know how large objects will act, but things on a small scale.</h4>
                    <h3 className = "mont font-bold text-2xl mb-9">$16.48</h3>
                    <button className = "md:w-1/4 md:mb-6 bg-[#2DC071] py-3 px-10 rounded font-bold text-2xl">ADD TO CART</button>
                </div>
                <div>
                <CImage className="bg-[#23856D] object-cover w-[100%] h-[550px] object-top" src="https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW2HOiffto0NYDqHISwkH9Ahc9Qg5~mhPWG7KuYA2gSHfLgobHGvbI0ataWk~JDL2Dqry2tGKtBqx2UMDLl7A4SerosozvXfk-QbEPO7vV2a-i0Wr0KFcDBx7i7yRZf9h8pIee-97HTiW8Sje~7qEBYPS~IJ9jrL0UFwsSxFHfWzbmMC3FGyjRromszbpIfH6SV8f7eXkFNJgY8Mc1lfCy9sLQ~-77fjT3BaMNcbfmXWSzXAX42nGO57J1LJnnrZsJBqhnt0btdWSCtNWl7AVUT676j3GIvdbY2hyHfHkABcmrNS9Im7GtBkfo7pIwU~gdRe3A9VhfRnq2fUsxzhZw__" alt="slide 1" />
                </div>
            </CCarouselItem>
            <CCarouselItem>
                <div className = "forBorder bg-[#23856D] w-[100%] h-[750px] text-white flex flex-col items-center text-center mont">
                    <h4 className = "font-semibold text-lg mb-9 mt-[15.5rem]">SUMMER 2020</h4>
                    <h2 className = "forBorder font-bold text-4xl mb-9 w-60">Vita Classic 
                    Product</h2>
                    <h4 className = "flex flex-wrap font-normal text-xl mb-9 w-60">We know how large objects will act, but things on a small scale.</h4>
                    <h3 className = "mont font-bold text-2xl mb-9">$16.48</h3>
                    <button className = "md:w-1/4 md:mb-6 bg-[#2DC071] py-3 px-10 rounded font-bold text-2xl">ADD TO CART</button>
                </div>
                <div>
                <CImage className="bg-[#23856D] object-cover w-[100%] h-[550px] object-top" src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slide 1" />
                </div>
            </CCarouselItem>
            <CCarouselItem>
                <div className = "forBorder bg-[#23856D] w-[100%] h-[750px] text-white flex flex-col items-center text-center mont">
                    <h4 className = "font-semibold text-lg mb-9 mt-[15.5rem]">SUMMER 2020</h4>
                    <h2 className = "forBorder font-bold text-4xl mb-9 w-60">Vita Classic 
                    Product</h2>
                    <h4 className = "flex flex-wrap font-normal text-xl mb-9 w-60">We know how large objects will act, but things on a small scale.</h4>
                    <h3 className = "mont font-bold text-2xl mb-9">$16.48</h3>
                    <button className = "md:w-1/4 md:mb-6 bg-[#2DC071] py-3 px-10 rounded font-bold text-2xl">ADD TO CART</button>
                </div>
                <div>
                <CImage className="bg-[#23856D] object-cover w-[100%] h-[550px] object-top" src="https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slide 1" />
                </div>
            </CCarouselItem>
          </CCarousel>
        </>
    )
}