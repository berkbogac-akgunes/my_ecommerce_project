/* eslint-disable react/prop-types */
export function ProductPageBestSellersCard(props) {
    const {item} = props
    return(
        <>
        <section className = "bg-white mt-12">
          <div className ="md:w-64 flex flex-col text-center items-center">
            <img
            className ="h-[30rem] md:w-[15rem] md:h-[19rem] object-cover pb-4"
            src = {item.src}
            title= {item.title}
            />
            <div className = "w-full pl-2 pb-6 flex flex-col items-start">
                <h5 className = "font-bold text-lg mb-2">{item.productTitle}</h5>
                <p className = "font-bold text-[#737373] mb-3">{item.productExplanation}</p>
                <div className = "flex text-center justify-center mb-3">
                    <h5 className = "font-bold text-base mr-1.5 text-[#BDBDBD]">{item.oldPrice}</h5>
                    <h5 className = "font-bold text-base text-[#23856D]">{item.newPrice}</h5>
                </div>
            </div>
          </div>
        </section>
        </>
    )
}