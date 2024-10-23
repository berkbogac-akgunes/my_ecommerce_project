import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

export function ProductPageSlide() {
    return(
        <>
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="object-cover w-[100%] w-[22rem] h-[17rem]" src="https://s3-alpha-sig.figma.com/img/2b79/e11e/d885dbe3ab31e6f0c95ec64b26599246?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hX31UZcDbRhv7fJV1WeikiZBW2jQ5C1hwknZRPJ7sfZ0gFnhthQ5bl1NOxH2XJw8Fg5kY7OGNSF6AFyDgijv2eGpEQcsZ4Db6545jZbBKElIzHnR0473-aZIyfItF8ab1hdEWCcsrdNfVGgthKc1UwuUDwB2OMKLyDIr~GfSVW8N6VOOZOl5VeRKkjWWw3ehuPShfinSBS29gSNO6Q3QlFsR3YDQu7H2Z3hBz2oKTG2tXca4JTP-s-dsz9vghoZtd5Fn8BbShE3gz1yVkvptq4ZfcGqM1BO7QswTjveDNmlkcgWuFTO1OUypxfihExfboDYVaVanUln9J719GnUQ__" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="object-cover w-[100%] w-[22rem] h-[17rem]" src="https://s3-alpha-sig.figma.com/img/8823/5526/0767f5620ba9dda5365be14f4ce71741?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSt2E542WM6fcsL7qosYOUSX8vwLZzi7tJfcecj3lHN2KyYOMDvi3XxISApRmS6lHqe0eHOM0pzAXhOPS8lebGwdj-ULnQPyQeuwRTsB5f92dSUAwD3CIjXL4xaUbj8AWIwYalgOGn8NjprfVuVSxNpNgp35ayEjDBM43wSgabKFr3CiQjU68JL3zGC2LdcI8kRXErqx00FANIgBx6gEC9Phwnf8eutgR70ZlRA3CsWlkThK1sdEBwkC3c0YWzDMyNsjK22N-sadlJptmCdRqGpyG~LDxQVnMKbwGct0WDHXZj2ReozNvwBueRr4~I4sas1jRLZad6yDoNQHWUHO5w__" alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="object-cover w-[100%] w-[22rem] h-[17rem]" src="https://s3-alpha-sig.figma.com/img/8823/5526/0767f5620ba9dda5365be14f4ce71741?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSt2E542WM6fcsL7qosYOUSX8vwLZzi7tJfcecj3lHN2KyYOMDvi3XxISApRmS6lHqe0eHOM0pzAXhOPS8lebGwdj-ULnQPyQeuwRTsB5f92dSUAwD3CIjXL4xaUbj8AWIwYalgOGn8NjprfVuVSxNpNgp35ayEjDBM43wSgabKFr3CiQjU68JL3zGC2LdcI8kRXErqx00FANIgBx6gEC9Phwnf8eutgR70ZlRA3CsWlkThK1sdEBwkC3c0YWzDMyNsjK22N-sadlJptmCdRqGpyG~LDxQVnMKbwGct0WDHXZj2ReozNvwBueRr4~I4sas1jRLZad6yDoNQHWUHO5w__" alt="slide 3" />
            </CCarouselItem>
          </CCarousel>
        </>
    )
}