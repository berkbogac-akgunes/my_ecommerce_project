import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutUsVideoPlayer() {
    return(
        <>
        <section className = "flex justify-center items-center 2xl:mx-72 md:mx-32">
        <div className="relative md:h-[35rem] md:w-full w-[20rem] h-72 rounded-xl overflow-hidden shadow-md">
        <img
          className="w-full h-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/bf53/61f3/08dd0c5a04f10121bc68f6cb9ff0d63d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RJwlzyb-CWuCR55IC461Rcx4dD5ZLB-7nuvAdOppN0wmZOeTBHG9DJbG4xkrzhxzAINalfnUWSHm6qUv4xbhiL6OZ6HxzWV-cSuXTlHS~axSPnKaNTmOxhfDpw8w~5ZmZlkoyJZhWBDcQkfLEmZ3M3U6dzt9PGEMCxvO~3I1oVwwoEx1ZX40ec9mE7eaRKTuj08TPPHvfj22CnBJutsCIOqkWnxM2xRRaUxK~9EYMplJ7tnZLQkz57uWGjNru5GQ7A-2763tFGqpI-oXPVOBrRmgQR6cqCAg8D8K8tbjfRrJTKA15Hlu09WokBzHs262eyMvwX8dE3dKJmuI7enBLA__"
          title="Mountains Background"
        />
        <div className = "absolute inset-0 flex justify-center items-center text-2xl">
        <button className = "py-3 px-6 bg-[#23A6F0] rounded-full"><FontAwesomeIcon icon={faPlay} /></button>
        </div>
        </div>
        </section>
        </>
    )
}