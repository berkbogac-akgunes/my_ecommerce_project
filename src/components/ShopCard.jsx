import menImage from "../assets/images/men.jpeg"

export function ShopCard() {
    return(
        <>
        <div className ="relative">
          <img
          className ="h-[31rem] object-cover" 
          src = {menImage}
          title="men"
          />
          <button className = "absolute left-7 bottom-6 absolute bg-white py-2.5 px-16 font-bold text-lg">MEN</button>
        </div>
        {/* create 4 shop cards here and get images with prop drilling so we can change it easily next time if we want. */}
        {/* same with product cards but just in the component we need just 1 product card. */}
        </>
    )
}