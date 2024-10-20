import { faChartSimple, faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export function CardSection() {
    const cardInfo = [
        {
          src: "https://s3-alpha-sig.figma.com/img/6fa1/d42d/da5f231255f5a899906c50f4f3638388?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgBMKRB5YKf0dSNxuyB2j04XQc4uf87E5yBkcdhLn05poRH16VTYsjfJEGX4MyP2UbuFFfZaMr1iUclGTi9iaPItDwO-qCiWGn2pJ5lh6FWpn12G59l5kY6Nrdil6T-DIjyTlqcosg5hcv-h9~GNH8CMBoPEW4djilIB56q-M9aCNVYLF6iTxjx5Cpoab7zUzl3YI29nADAJH-g7mENTIZt88PyEgyvQzXPHWAp6lcCM8OakPyT42l-zpgxd13lj50P7wbF9bWWZIexO4K0wlo2TcKRd1-1VyD97-cuwBAxdhL0lyej29GCqbSqE0LHatYVNdk75RnWJS9UVEQQyTg__",
          title: "card1",
          cardTitle: "Loudest à la Madison #1 (L'integral)",
          text:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          date: "22 April 2021",
          commentText: 10,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/3f46/bc27/bfdeda7c44028b59453c136c10512828?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wm5iSQt-t~BbuUQFX7WWy1Do~mQS-3ElMamnQvWo4AnblV-QCZ19VQF3lgb6R1viJFfkOaPrX3huAA3QcPGv7R8NJzLjP9eCzL6XAPkqilyNrzatzvKXSaYAmkAdIKKVzWE9sWHMFIVswqlfaeI1z-WluEYRg9CKBDLCs4SClfibMZBk4Zd2SxXRwjZAKN00VLErArYNMuuKENNya3s2A8GMn6GmqoL5CIuyVhu-2Pq90fsCepVw5-iNj0JzxFkGoW4cy2OcA1FcMBB-BkCcEtZprjK9q27MI5~UeW5tGokXzgueUq-gUaucpEuYLqkIBrZaIy3542PepRQCNglm6w__",
          title: "card2",
          cardTitle: "Loudest à la Madison #1 (L'integral)",
          text:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          date: "22 April 2021",
          commentText: 10,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/6e5a/1e40/7b100e0e65dada874a961f311a92cfce?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piSGFgZp7ddlTb~kDOBjAHDFh7-BIlHOsayK6f1dwD-gX92hpkS3a0UbGujfeVYZlmK2h4sE3ydqx8-JvgicJSz-CuEx2VYaaCdTvczKxPxVcv-aO6stZPZzaiCF57m1Ma2fQMxbboTUVPMOpYHHMKRo~v8bZtO-s3TGzUF9K4bqrVXgcC~hUxr1Y5TsXPyumkVuoIsVJaNP4N1aasc5dgrs4m8tntWN44IvB2mWI5gnWcsXNaAf6ibhBW7zm3aXtL3YKWaQFnFWvWCHtPXDK3PJuJEslyyABVH~SaLVMVISCEyhoAYZJg73tWfNCFcenT2evl0iwGjnYL6j73ZRNQ__",
          title: "card3",
          cardTitle: "Loudest à la Madison #1 (L'integral)",
          text:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          date: "22 April 2021",
          commentText: 10,
        },
      ];
    return(
        <>
        <div className = "pt-32 w-[100%] flex flex-col items-center text-center mont">
            <h6 className = "font-semibold text-lg mb-4 text-[#23A6F0]">Practice Advice</h6>
            <h2 className = "font-bold text-5xl mb-4 w-60 text-[#252B42]">Featured Products</h2>
            <p className = "flex flex-wrap font-medium text-base mb-9 w-60 text-[#737373]">Problems trying to resolve the conflict between the two major</p>
        </div>

        <div className = "flex items-center flex-col mx-10">
            <div className = "shadow-md h-[38rem] w-full mb-8">
                <img
                  className = "h-[19rem] w-full object-cover"
                  src = {cardInfo[0].src}
                  title = {cardInfo[0].title}
                />
                <div className = "card-bottom-container px-6 pt-6 pb-9">
                    <div className = "flex mb-2.5">
                        <p className = "mr-4 font-semibold text-xs text-[#8EC2F2]">Google</p>
                        <p className = "mr-4 font-semibold text-xs text-[#737373]">Trending</p>
                        <p className = "font-semibold text-xs text-[#737373]">New</p>
                    </div>
                    <h4 className = "flex flex-wrap font-semibold text-xl mb-2.5 w-60 text-[#252B42]">{cardInfo[0].cardTitle}</h4>
                    <p className = "flex flex-wrap font-semibold text-sm mb-3 text-[#737373] w-64">{cardInfo[0].text}</p>
                    <div className = "flex justify-between">
                        <div className = "flex mb-4">
                        <FontAwesomeIcon className = "mr-1.5 pt-0.5" icon={faClock} />
                        <p className = "font-semibold text-sm text-[#737373]">{cardInfo[0].date}</p>
                        </div>
                        <div className = "flex">
                        <FontAwesomeIcon className = "mr-1.5 pt-0.5" icon={faChartSimple} />
                        <p className = "font-semibold text-sm text-[#737373]">{cardInfo[0].commentText} comments</p>
                        </div>
                    </div>
                    <NavLink to = "">Learn More <FontAwesomeIcon icon={faChevronRight} /></NavLink>
                </div>
            </div>

            <div className = "shadow-md w-full h-[38rem] mb-8">
                <img
                  className = "h-[19rem] w-full object-cover"
                  src = {cardInfo[1].src}
                  title = {cardInfo[1].title}
                />
                <div className = "card-bottom-container px-6 pt-6 pb-9">
                    <div className = "flex mb-2.5">
                        <p className = "mr-4 font-semibold text-xs text-[#8EC2F2]">Google</p>
                        <p className = "mr-4 font-semibold text-xs text-[#737373]">Trending</p>
                        <p className = "font-semibold text-xs text-[#737373]">New</p>
                    </div>
                    <h4 className = "flex flex-wrap font-semibold text-xl mb-2.5 w-60 text-[#252B42]">{cardInfo[1].cardTitle}</h4>
                    <p className = "flex flex-wrap font-semibold text-sm mb-3 text-[#737373] w-64">{cardInfo[1].text}</p>
                    <div className = "flex justify-between">
                        <div className = "flex mb-4">
                        <FontAwesomeIcon className = "mr-1.5 pt-0.5" icon={faClock} />
                        <p className = "font-semibold text-sm text-[#737373]">{cardInfo[1].date}</p>
                        </div>
                        <div className = "flex">
                        <FontAwesomeIcon className = "mr-1.5 pt-0.5" icon={faChartSimple} />
                        <p className = "font-semibold text-sm text-[#737373]">{cardInfo[1].commentText} comments</p>
                        </div>
                    </div>
                    <NavLink to = "">Learn More <FontAwesomeIcon icon={faChevronRight} /></NavLink>
                </div>
            </div>

            <div className = "shadow-md w-full h-[38rem]">
                <div className = "">
                <img
                  className = "h-[19rem] w-full object-cover"
                  src = {cardInfo[2].src}
                  title = {cardInfo[2].title}
                />
                </div>
                <div className = "card-bottom-container px-6 pt-6 pb-9">
                    <div className = "flex mb-2.5">
                        <p className = "mr-4 font-semibold text-xs text-[#8EC2F2]">Google</p>
                        <p className = "mr-4 font-semibold text-xs text-[#737373]">Trending</p>
                        <p className = "font-semibold text-xs text-[#737373]">New</p>
                    </div>
                    <h4 className = "flex flex-wrap font-semibold text-xl mb-2.5 w-60 text-[#252B42]">{cardInfo[2].cardTitle}</h4>
                    <p className = "flex flex-wrap font-semibold text-sm mb-3 text-[#737373] w-64">{cardInfo[2].text}</p>
                    <div className = "flex justify-between">
                        <div className = "flex mb-4">
                        <FontAwesomeIcon className = "mr-1.5 pt-0.5" icon={faClock} />
                        <p className = "font-semibold text-sm text-[#737373]">{cardInfo[2].date}</p>
                        </div>
                        <div className = "flex">
                        <FontAwesomeIcon className = "mr-1.5 pt-0.5" icon={faChartSimple} />
                        <p className = "font-semibold text-sm text-[#737373]">{cardInfo[2].commentText} comments</p>
                        </div>
                    </div>
                    <NavLink to = "">Learn More <FontAwesomeIcon icon={faChevronRight} /></NavLink>
                </div>
            </div>
        </div>
        </>
    )
}