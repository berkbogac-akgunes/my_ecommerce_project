export function TeamPageCards() {
    const cardInfo = [
        {title: "team1", src: "https://media.licdn.com/dms/image/v2/D4D35AQH7S4tWlpr5gQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1725350801989?e=1730401200&v=beta&t=dLpyxk_BngvucpUNCsTfd6aBYm0mUKvJKdYRi6puxmM", teamName: "Erhan Fırat", teamJob: "Product Owner"},
        {title: "team2", src: "https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635783306921?e=1735171200&v=beta&t=x0PyMv1-ZSfsWtVBqrInfGESxao8qyOe5Sy919jOP_Y", teamName: "Gökhan Özdemir", teamJob: "Scrum Master"},
        {title: "team3", src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", teamName: "Berk Boğaç Akgüneş", teamJob: "Full Stack Developer"},
        {title: "team4", src: "https://s3-alpha-sig.figma.com/img/5426/8cf0/4ad0f612e9f8f311e9d1c6bbd31a03f3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMMs~muKHYT1dTxR5y44flZqtI7eomWJ4dpCtwte33~uZbmFZvbY-wJRMXJKBVKbqu5P7QzaS6qszuBjABCvHUHTWuHajWTeglhZwZ8wQ9Plr9Vkv6KTObeMDwitkZ87B~HPbBTZKxJcgI8Yrn7Zf2ulKDis7sxHSSqIE5mWPN0zsEnUnn~jfzznQ3tlAu3pwzIhj-NHEQehFUK2DhR3xJxWse3Uh~0sLAm~iBJS3bmmjINvlNTi9bt4Du6icopj8Jn-XuwFIqkXoyCBGds~ZUd2ris2L4XNbSooMLVr71g5rNRW-q7PKcvLooiixr93RafADiJLebuG7W5T1JO90Q__", teamName: "Username", teamJob: "Profession"},
        {title: "team5", src: "https://s3-alpha-sig.figma.com/img/24a6/b8d9/efd1b9c2401fb0702dc41f18a42ed89c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnTS0cpmJPsx~BdyZfGA3GxnFMIaSaZCRxX1Ec7VqRz37WrwB7lO834DmcR3kytMAg3oOHWMbxDLlKYeS5M0Z3-pjtE2U3pf6wLiTE3CwsN7FTPWAsHIS2u7BUKNEqpRejhO7N2Fuv1gzsLkGl34zrjLcrgfCNGyzyczKHHlcahUTaX-XnIh3d~qykuTKEhCLdegmmibSyK-yIFjhAKfmepIFUGZt5u51eTijAM6uHV-Sx-MLzyFYDRk-hunu~xhBlWFYtDdMIyXaCF40JG3lgEqaD9ir-nVhnDOPOA8AmGBwN4hDkEuT7Lz41ZicbaL2CGk3I-U5uOMvN5XvUO4Zg__", teamName: "Username", teamJob: "Profession"},
        {title: "team6", src: "https://s3-alpha-sig.figma.com/img/0a05/d6ce/0fd1eeff9355b162a7e7c01605dd3c55?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ortHuFlHeeARkiChKJYXHH2HXCC~5fZeOUCj6MCc8GONbnBN1LXJQEPI3Q3cnVVNM5lI8bLXSKIxChiaIG-F4X2r~rlBUIaz72pUaeTpmmQFOPSh7qoypOTJMh4JIYXVf0utAAHw9K9mBITO6F6Yn9gc9hLgDf5kwcQnDyjEWNbGRgcr7vxISPorBtJ~S9ly~VP3xWiT6NGT-04HZNoMMvOFc6QY8xHMRvfYc0u3VZo~aXCJ24ezxwJLyZ1otfp-aMqznmXkLqrUYMyoDEp1MTe2d7nsNHDI6FfjB5lzWocpg4G6oLdtRmaGdzqlQ338nm7uAIabqOtQz2w13tlmrw__", teamName: "Username", teamJob: "Profession"},
]
    return(
        cardInfo.map((item) => {
            return (
        <>
        <section className = "bg-white shadow-xl md:mt-16 mt-12 w-[18rem] h-[30rem]">
          <div className ="flex flex-col text-center items-center">
            <img
            className ="w-[18rem] h-[21rem] w-full h-[19rem] object-cover pb-4"
            src = {item.src}
            title= {item.title}
            />
            <div className = "w-full text-center">
                <h5 className = "font-bold text-lg mb-2.5">{item.teamName}</h5>
                <p className = "font-bold text-base text-[#737373]">{item.teamJob}</p>
            </div>
            <div className = "mt-3">
            <i className="text-4xl fa fa-github mr-4"></i>
            <i className="text-4xl fa fa-linkedin-square mr-4"></i>
            <i className="text-4xl fa fa-twitter-square"></i>
            </div>
          </div>
        </section>
        </>
        )})
    )
}