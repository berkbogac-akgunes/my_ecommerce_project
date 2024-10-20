/* eslint-disable react/prop-types */
export function ShopCard(props) {
    const {cardInfo} = props
    return(
        <>
        <section className = "md:flex md:justify-center mt-12">
          <div className ="relative mb-8 md:mr-8">
            <img
            className ="md:h-[31rem] md:w-[32rem] h-[31rem] object-cover"
            src = {cardInfo[0].src}
            title= {cardInfo[0].title}
            />
            <button className = "absolute left-7 bottom-6 absolute bg-white py-2.5 px-16 font-bold text-lg">{cardInfo[0].buttonTitle}</button>
          </div>

          <div className ="relative mb-8 md:mr-8">
            <img
            className ="md:h-[31rem] md:w-[15rem] h-[31rem] w-full object-cover"
            src = {cardInfo[1].src}
            title= {cardInfo[1].title}
            />
            <button className = "md:px-8 md:left-4 md:text-base absolute left-7 bottom-6 absolute bg-white py-2.5 px-16 font-bold text-lg">{cardInfo[1].buttonTitle}</button>
          </div>
          <div className = "md:flex md:flex-col">
            <div className ="relative mb-4">
              <img
              className ="md:h-[15rem] md:w-[15rem] h-[15rem] w-full object-cover" 
              src = {cardInfo[2].src}
              title= {cardInfo[2].title}
              />
              <button className = "md:px-4 md:left-4 md:text-base absolute left-7 bottom-6 absolute bg-white py-2.5 px-8 font-bold text-lg">{cardInfo[2].buttonTitle}</button>
            </div>

            <div className ="relative">
              <img
              className ="md:h-[15rem] md:w-[15rem] h-[15rem] w-full object-cover" 
              src = {cardInfo[3].src}
              title= {cardInfo[3].title}
              />
              <button className = "absolute left-7 bottom-6 absolute bg-white py-2.5 px-8 font-bold text-lg">{cardInfo[3].buttonTitle}</button>
            </div>
          </div>
        </section>
        </>
    )
}