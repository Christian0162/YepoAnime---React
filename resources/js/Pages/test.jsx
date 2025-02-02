import NavBar from "@/Components/NavBar";
import Spotlight from "@/Components/Spotlight";
import AnimeCard from "@/Components/AnimeCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';
import { useDarkMode } from "@/Context/DarkModeContext";

import "swiper/css";
import "swiper/css/navigation";

export default function Test({ allAnime, getTrending, getSeason }) {

    const { darkMode } = useDarkMode();

  return (
    <>
      <NavBar />
    <div className={`min-h-screen text-black p-5 pt-10  ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white'}`}>
        <Swiper
        modules={[ Autoplay]}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        className="w-full h-[95%]"
        >
            {getTrending.map((anime, key) => (
                <SwiperSlide key={anime.id}>
                    <Spotlight anime={anime} genres={anime.genres} />
                </SwiperSlide>
            ))}

        </Swiper>

        {/* border line */}
        <div className={`border-b-2  ${darkMode ? 'border-violet-700' : 'border-dark'} relative top-3 my-7 mt-[3.2rem]`}></div>

        {/* New Season Exclusives */}
        <div
        className="flex flex-col p-5"
        >
            <div
            className="mt-2 flex flex-col space-y-2 py-3"
            >
                <h1
                className="text-3xl"
                >
                    New Season Exclusives
                </h1>
                <span
                className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} text-lg`}
                >
                    YepoAnime is the only place to find these titles!
                </span>
            </div>
            <div
            className="flex justify-center relative right-3 bottom-3 mt-3"
            >
                <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                spaceBetween={112}
                navigation
                >
                    {allAnime.map((anime, key) => (
                        <SwiperSlide
                        key={anime.id}
                        >
                            <AnimeCard anime={anime}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

        {/* border line */}
        <div className={`border-b-2  ${darkMode ? 'border-violet-700' : 'border-dark'} relative top-3 my-7 mt-8`}></div>

        {/* New Season Exclusives */}
        <div
        className="flex flex-col p-5"
        >
            <div
            className="mt-2 flex flex-col space-y-2 py-3"
            >
                <h1
                className="text-3xl"
                >
                    Latest Series From The Winter Season
                </h1>
                <span
                className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} text-lg`}
                >
                    YepoAnime now offers the newest and most popular series!
                </span>
            </div>
            <div
            className="flex justify-center relative right-3 bottom-3 mt-3"
            >
                <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                spaceBetween={112}
                navigation
                >
                    {getSeason?.map((anime, key) => (
                        <SwiperSlide
                        key={anime.id}
                        >
                            <AnimeCard anime={anime}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    </div>
    </>
  );
}
