import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

export function PageContentSlider() {

    return(
        <>
          <CCarousel controls indicators>
            <CCarouselItem>
                <div className = "md:flex md:flex-row">
                <div className = "md:text-left bg-[#23856D] w-[100%] h-[750px] text-white flex flex-col items-center text-center mont">
                    <div className = "md:w-[32rem]">
                    <h4 className = "md:w-full md:text-left font-semibold text-xl mb-9 mt-[15.5rem]">SUMMER 2020</h4>
                    <h2 className = "md:w-full md:text-left font-bold md:text-7xl text-4xl mb-9 w-60">Vita Classic 
                    Product</h2>
                    <h4 className = "md:w-[25rem] md:mb-1 md:text-left flex flex-wrap font-normal text-xl mb-9 w-60">We know how large objects will act, but things on a small scale.</h4>
                    <div className ="md:w-full md:flex">
                    <h3 className = "md:mt-10 md:text-left mont font-bold text-2xl mb-9">$16.48</h3>
                    <button className = "md:w-3/4 md:ml-12 md:mt-6 md:w-[14rem] md:h-[4rem] bg-[#2DC071] py-3 px-10 rounded font-bold text-lg">ADD TO CART</button>
                    </div>
                    </div>
                </div>
                <div>
                <CImage className="md:pt-32 md:pr-44 md:w-[75rem] md:h-[750px] md:object-top md:object-left bg-[#23856D] object-cover w-[100%] h-[550px] object-top" src="https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW2HOiffto0NYDqHISwkH9Ahc9Qg5~mhPWG7KuYA2gSHfLgobHGvbI0ataWk~JDL2Dqry2tGKtBqx2UMDLl7A4SerosozvXfk-QbEPO7vV2a-i0Wr0KFcDBx7i7yRZf9h8pIee-97HTiW8Sje~7qEBYPS~IJ9jrL0UFwsSxFHfWzbmMC3FGyjRromszbpIfH6SV8f7eXkFNJgY8Mc1lfCy9sLQ~-77fjT3BaMNcbfmXWSzXAX42nGO57J1LJnnrZsJBqhnt0btdWSCtNWl7AVUT676j3GIvdbY2hyHfHkABcmrNS9Im7GtBkfo7pIwU~gdRe3A9VhfRnq2fUsxzhZw__" alt="slide 1" />
                </div>
                </div>
            </CCarouselItem>
            <CCarouselItem>
            <div className = "md:flex md:flex-row">
                <div className = "md:text-left bg-[#23856D] w-[100%] h-[750px] text-white flex flex-col items-center text-center mont">
                    <div className = "md:w-[32rem]">
                    <h4 className = "md:w-full md:text-left font-semibold text-xl mb-9 mt-[15.5rem]">SUMMER 2020</h4>
                    <h2 className = "md:w-full md:text-left font-bold text-7xl mb-9 w-60">Vita Classic 
                    Product</h2>
                    <h4 className = "md:w-[25rem] md:mb-1 md:text-left flex flex-wrap font-normal text-xl mb-9 w-60">We know how large objects will act, but things on a small scale.</h4>
                    <div className ="md:w-full md:flex">
                    <h3 className = "md:mt-10 md:text-left mont font-bold text-2xl mb-9">$16.48</h3>
                    <button className = "md:w-3/4 md:ml-12 md:mt-6 md:w-[14rem] md:h-[4rem] bg-[#2DC071] py-3 px-10 rounded font-bold text-lg">ADD TO CART</button>
                    </div>
                    </div>
                </div>
                <div>
                <CImage className="md:pt-32 md:pr-44 md:w-[75rem] md:h-[750px] md:object-top md:object-left bg-[#23856D] object-cover w-[100%] h-[550px] object-top" src="https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW2HOiffto0NYDqHISwkH9Ahc9Qg5~mhPWG7KuYA2gSHfLgobHGvbI0ataWk~JDL2Dqry2tGKtBqx2UMDLl7A4SerosozvXfk-QbEPO7vV2a-i0Wr0KFcDBx7i7yRZf9h8pIee-97HTiW8Sje~7qEBYPS~IJ9jrL0UFwsSxFHfWzbmMC3FGyjRromszbpIfH6SV8f7eXkFNJgY8Mc1lfCy9sLQ~-77fjT3BaMNcbfmXWSzXAX42nGO57J1LJnnrZsJBqhnt0btdWSCtNWl7AVUT676j3GIvdbY2hyHfHkABcmrNS9Im7GtBkfo7pIwU~gdRe3A9VhfRnq2fUsxzhZw__" alt="slide 2" />
                </div>
                </div>
            </CCarouselItem>
            <CCarouselItem>
            <div className = "md:flex md:flex-row">
                <div className = "md:text-left bg-[#23856D] w-[100%] h-[750px] text-white flex flex-col items-center text-center mont">
                    <div className = "md:w-[32rem]">
                    <h4 className = "md:w-full md:text-left font-semibold text-xl mb-9 mt-[15.5rem]">SUMMER 2020</h4>
                    <h2 className = "md:w-full md:text-left font-bold text-7xl mb-9 w-60">Vita Classic 
                    Product</h2>
                    <h4 className = "md:w-[25rem] md:mb-1 md:text-left flex flex-wrap font-normal text-xl mb-9 w-60">We know how large objects will act, but things on a small scale.</h4>
                    <div className ="md:w-full md:flex">
                    <h3 className = "md:mt-10 md:text-left mont font-bold text-2xl mb-9">$16.48</h3>
                    <button className = "md:w-3/4 md:ml-12 md:mt-6 md:w-[14rem] md:h-[4rem] bg-[#2DC071] py-3 px-10 rounded font-bold text-lg">ADD TO CART</button>
                    </div>
                    </div>
                </div>
                <div>
                <CImage className="md:pt-32 md:pr-44 md:w-[75rem] md:h-[750px] md:object-top md:object-left bg-[#23856D] object-cover w-[100%] h-[550px] object-top" src="https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW2HOiffto0NYDqHISwkH9Ahc9Qg5~mhPWG7KuYA2gSHfLgobHGvbI0ataWk~JDL2Dqry2tGKtBqx2UMDLl7A4SerosozvXfk-QbEPO7vV2a-i0Wr0KFcDBx7i7yRZf9h8pIee-97HTiW8Sje~7qEBYPS~IJ9jrL0UFwsSxFHfWzbmMC3FGyjRromszbpIfH6SV8f7eXkFNJgY8Mc1lfCy9sLQ~-77fjT3BaMNcbfmXWSzXAX42nGO57J1LJnnrZsJBqhnt0btdWSCtNWl7AVUT676j3GIvdbY2hyHfHkABcmrNS9Im7GtBkfo7pIwU~gdRe3A9VhfRnq2fUsxzhZw__" alt="slide 3" />
                </div>
                </div>
            </CCarouselItem>
          </CCarousel>
        </>
    )
}