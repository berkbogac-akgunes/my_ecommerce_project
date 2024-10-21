import { ShopCard } from "./ShopCard";
import menImage from "../assets/images/men.jpeg"
import womenImage from "../assets/images/women.jpeg"
import accessoriesImage from "../assets/images/accessories.jpeg"
import kidsImage from "../assets/images/kids.jpeg"

export function ShopCardGroup() {
    const cardInfo = [
        {title: "men", src: menImage, buttonTitle: "MEN"},
        {title: "women", src: womenImage, buttonTitle: "WOMEN"},
        {title: "accessories", src: accessoriesImage, buttonTitle: "ACCESSORIES"},
        {title: "kids", src: kidsImage, buttonTitle: "KIDS"}
    ]

    return <ShopCard cardInfo={cardInfo} />
}