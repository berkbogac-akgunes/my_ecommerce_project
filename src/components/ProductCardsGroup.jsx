import product1 from "../assets/images/product1.jpeg"
import product2 from "../assets/images/product2.jpeg"
import product3 from "../assets/images/product3.jpeg"
import product4 from "../assets/images/product4.jpeg"
import product5 from "../assets/images/product5.jpeg"
import product6 from "../assets/images/product6.jpeg"
import product7 from "../assets/images/product7.jpeg"
import product8 from "../assets/images/product8.jpeg"
import { ProductCard } from "./ProductCard";

export function ProductCardsGroup() {
    const cardInfo = [
        {title: "product1", src: product1, productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product2", src: product2, productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product3", src: product3, productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product4", src: product4, productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product5", src: product5, productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product6", src: product6, productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product7", src: product7, productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product8", src: product8, productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
    ]

    return (
        cardInfo.map((item, index) => {
            return <ProductCard key={index} item={item}/>
        })
    )
}