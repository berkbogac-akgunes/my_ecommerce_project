import { ProductPageBestSellersCard } from "./ProductPageBestSellersCard"

export function ProductPageBestSellers() {
    const bestSellersInfo = [
        {title: "product1", src: "https://s3-alpha-sig.figma.com/img/0bfc/bfef/c49b63d0071c5ef94c3d4dde5f05172f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O7wY-U9Yt7OlEUyLeAZAejVO45fnCtGUzgu5muLGJHPlAmF72Gx51Bj9kgqSIR4k8Okxr6edRIoUTTa2TfvrG7jrowInHAnAYsbLDIrrSiHahT2DhDwW5hz4sUHTM64MuwLSHC6E0EA5FJT5OW7R4W1t36A7ShzZ-Xil~FKFITcfVEJxIaGMXTrFG59jONbSwO0Ma8xxjg9Vh20B-d7JQbDlH2JOw9lGh3~xAnmyEmf5j5DvjdT6IilMXE78HsjEZqZv0AYMGxhYWu81w55YxJ-kiklokdkKluCpJw5fGCC8hoD8jpBjM4NpsNSAa4OmMlnQle3nqx7IQ109jLjlpA__", productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product2", src: "https://s3-alpha-sig.figma.com/img/f454/f9ee/9a7979dac6cbd7699a260c7deacd7b13?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YIvt1qQN13ovhvpZv9bYeqGMO5MWIXQRMxBsDBjIX7TVyk3FrRguI~wpC7AU6bWfP4Neyx~iwRjCw3ildugArLJs23zajOTpTLqnqWkHNo1LwRYKVrR-Hc5Kg0PS6ROhilZ2PP3YXvQzZWVXpnd9fwZ9guxr7RziR3s~qtRrhG-m5EPmFl2BZaFi87UcPjM4NWXi6rtmAv1bROVCo8iKp0nTmP8evRui9yAVIH~tdtiWF1BYYLxIBFtxxtV1b20BdLuWu7uMMUWvfPZhC0tp7oHBaNksuvj3eXymUxUvI2GCEgopL87dwk5Vl563Tmu-BWXLNacLkgK7~oNGG6K-JQ__", productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product3", src: "https://s3-alpha-sig.figma.com/img/685f/2d7c/3cabc3250d9fd223e5b93cebd2761439?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJVGbwlQILdJL1J46ldq5WJf4JQmgEv5bs1cpM5ysyZgxCYy01txje0gcIuDgRZxKwDRaF-yCboWM3aNkxjKma6qMcCaSpckVBjaJynjtD6qsViFYXhZA89SQtnrGau6kl~bEkmo-CQrN0EvI2xDMiw5tWjPnLOT1f-KaqBQj9x-rSQ4TgvMwCXLkjTJgogyfWXdKmBs3DsOpAzyS3TAqZfhznpei81fovE6beXGARn-d1Vk2WkUxfYUzwcj01AV~81Chj27cIrUnWFuM3YxOp-5lb3zde9kyoaS6GLTFc8wj2xpGZ3OrjHFzx~1dEZWqaVTlAJqgjVaOblSbcoQng__", productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
        {title: "product4", src: "https://s3-alpha-sig.figma.com/img/079b/4c5d/47938d7b09087b31f361063fb40f9a11?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xl6xorgUZnw-vk3otwtct7N5AmJRQe-YYUQWEvy9R-vP-G76tGQ9VKWdLoBvfJ7u3KMLLOesUQTJw8N8oHqFzadYZLuoEpLlmJu5xoVdc66BnOBy5U9EwpHK53aPJCFMnSXBN1e9rg9IKjMIP~RyWcP9juntWUc2hrQyz1iIbya3WhsxRjG3dIiXver-pDTqPonfB9s-qOgqALO2nJ2V-me3hMu7shdMmlPwDPFadAi4fRFEvIFsWGHl1lId2LpMI2atbH~YpOtHcx-OL7lVl5D8srZzCEPXd5lE28jjdrDzOZbKcjsiKK1WJfwesGF6p1LOjagWxzrE3csxFLeM-Q__", productTitle: "Graphic Design", productExplanation: "English Department", oldPrice: "$16.48", newPrice: "$6.48"},
    ]
    return(
        <>
        <section className = "bg-[#FAFAFA] px-8 flex flex-col items-center">
        <h3 className = "mont font-bold text-2xl py-20">BESTSELLER PRODUCTS</h3>
        <div className="border-b-2 py-2"></div>
        <div>
        {bestSellersInfo.map((item, index) => {
            return <ProductPageBestSellersCard key={index} item={item}/>
        })}
        </div>
        </section>
        </>
    )
}