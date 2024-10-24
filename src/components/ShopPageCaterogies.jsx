import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function ShopPageCategories() {
    const itemInfo = [
        {src: "https://s3-alpha-sig.figma.com/img/c9a6/4276/a14f623312021f83a598c945b5165068?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DUwE4unCJKcN1mC0jXvXPY4fb6k4Ige5RNglWhPfSBqK2y4oWfVHA9HUak-sYw7iRgJ74TxrbPJwI3tMJSb8HzAkUQU5jmj2PdydKrpx-Nq6Nn1DapboQuLU7zS8Q6ZO6IqPTXUxoDH0amR5daQpTCpLqBKQaPklCSUreeDJ3aDY~ZBZaUiNn9Hpgrmlx3NcUb8j3diR5zMVW~ehfwzdqCixf0E1gYfj0FWnHCJYZaAepm~xVYkil3vZeZScZLB~QzYYJPb4tRJIyxSFgH6G-rouQcqD7cdV5JDxegPlofMNUGl98c9DSAOVkDHEd8tpFUoGiUyqqqagaJwueNpPzg__", title: "shopCard1", mainTitle: "CLOTHS", total: 5},
        {src: "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agNi7zKWkppz7Wk6j2o4EmsuiBTHmx5dM6JP0WtMFWawYtJGgaIhNubW8kaX7wtNGz8n02Z2H~ikcXhNqgo5bCZ~BOTt8GPUKHUu7t8Ys4OdTKun4b1f3234ZPn2Fm5hBgiMI~UjSW8NX8obxQ0SjwzhDDpXTtjQHkiUhQK55AipXcHUXLaT0vwWiEvrGP4RohJwkg3hkzyfeD~tE7iU1KzfFddh3UnzdGSg7A1DBnYIwFE2J1MFoT-2jKmMJKQGW9PvcrFDxpjsS4g2-V~rxFYw2aBnRLYqgU7r3fmiSq~v5FeC57ocysksgnw8~9Y962hK7Mo3sMxkJKXiEd4Npw__", title: "shopCard2", mainTitle: "CLOTHS", total: 5},
        {src: "https://s3-alpha-sig.figma.com/img/7bc2/f9fb/559eeb7e6b92ed49f40128729a9f74f1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QX6oX~Zmdk9iN9-1hX5H14w913Ei4aDd0VThTfmhmTsZUOkhwEnpHlpCeOgg1VpKIPIKzJhzQPUaX19NdfovgofJ16JTZ97OftHIm1k2qjqQ9EKmbnHPaJjpdXfY6POdRsFQE1v8XHKJ0lXkurvJ~xLxGEWOG1P5pxcbpVWIZx7270PjFl4BFfV4-U7yeXbNp0kafCFoY8RhUEy1gsANKfYxHTU9HFHrfd7Lt1KkqfSmsgPDhGynUUG2R6Et-JRd07YpuHSYGdww~ZHtyLUAJE7Twci~pzT8SffqB4MmcLQ6CVQ6NDv9kHSg2LaQAc49DYlJyg4MJiV-~NTaw2iDEA__", title: "shopCard3", mainTitle: "CLOTHS", total: 5},
        {src: "https://s3-alpha-sig.figma.com/img/6e72/2a25/b740dd4eea5b5580d5e1601a818f98c2?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OIoEc5lfi544BNBN81BxwIuvT7pwM-tXe3vKTG6z5PoBbJmFcTBnWDX11Y0Rmcepya2SIwgarhl2UD3dAcdF58E4uH0f11Y-FQhqP91hc4WuXWIiGlKs58-4R~qicNVTtTaMe2Ie3sFazYq1QS-uSp5~Eb1jE3kQ-UWxiem7msWDdhWFmhuzGR7HGOzEo0EYnSuYLnnzh~2oM6ajtNnx7wbLghOyh-on9zJ02FGyhEm7V6GvRZBTUmRSrs1DLTBytkqeBnAzNYmRg0KotAsOXG9GueY5377e1ylwgSXhGJ85-rZrvGTWshJyV-2isA42uhHGYbCG8rhrcF90jLF6rA__", title: "shopCard4", mainTitle: "CLOTHS", total: 5},
        {src: "https://s3-alpha-sig.figma.com/img/2650/d8d7/92d83e3292df63340b2a44fd9763c159?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ox6yioDVxjuiEQCzTVbW~EK6TkWZFAP08TUBXl59zK6UNMC9LqXmjetF5Zyvrr2eQdQL0ICT9yhMTKan418iFG1-grMr28xtsyYCo9eedXh-J5kk7MyPdOsAzk~kPE08X7rA2y960fRNEAAxrW1LMVSUsOZSc3mweXi9rQFqm5dMpT~m3y6DVuhtsP0BPEaD6i2zfIgP1assLIH3Nw9ukUIVCr4FpEvRxolFxb4c9gY1dKaOGS6Hk2NBx9xKRB-LYz089tImcbABFRrYco4RZ7zbybuz9Dgi8r1A3CbIvGA8daqPsCmOfiRN54n~PQxLZPcxEh8Ksx3PQmbd1qfnlQ__", title: "shopCard5", mainTitle: "CLOTHS", total: 5}
    ]
    return(
        <section className = "bg-[#FAFAFA]">
        <div className = "md:mx-44">
        <section className = "flex flex-col md:flex-row md:justify-between items-center py-7">
        <h3 className = "md:mb-0 mont font-bold text-2xl mb-9 text-[#252B42]">Shop</h3>
        <div className = "flex py-2.5 gap-x-4">
            <NavLink className = "font-bold" to="">Home</NavLink>
            <FontAwesomeIcon className = "text-[#BDBDBD] mt-1.5 text-sm" icon={faChevronRight} />
            <h6 className = "text-[#737373] font-semibold mt-0.5">Shop</h6>
        </div>
        </section>

        <section className = "md:mx-0 py-6 mx-10 md:flex md:flex-row md:gap-x-4">
            {itemInfo.map((item, index) => {
                return(
                 // eslint-disable-next-line react/jsx-key
                 <div className = "relative mb-4">
                 <img className = "brightness-75 object-cover md:h-[16rem] h-[19rem] w-[21rem]" src = {itemInfo[index].src} title = {itemInfo[index].title}/>
                 <div className = "absolute 2xl:left-[7.5rem] 2xl:bottom-[6.5rem] md:left-[4.5rem] md:bottom-[6rem] left-[8.5rem] bottom-[8rem]">
                 <h5 className = "font-bold text-base mr-1.5 text-white">{itemInfo[index].mainTitle}</h5>
                 <h6 className = "text-white font-semibold mt-0.5">{itemInfo[index].total} Items</h6>
                 </div>
                 </div>
                )
            })}
        </section>
        </div>
        </section>
    )
}