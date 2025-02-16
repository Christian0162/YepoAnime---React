import NavBar from "@/Components/NavBar";
import Spotlight from "@/Components/Spotlight";
import AnimeCard from "@/Components/AnimeCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useDarkMode } from "@/Context/DarkModeContext";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


import "swiper/css";
import "swiper/css/navigation";

export default function Home({ allAnime, getTrending, getSeason }) {
    const { darkMode } = useDarkMode();

    return (
        <>
            <AuthenticatedLayout>
                <div className={`min-h-screen text-black p-5 pt-10 ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white'}`}>
                    {/* Spotlight Section */}
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        className="w-full h-[95%]"
                    >
                        {getTrending.map((anime) => (
                            <SwiperSlide key={anime.id}>
                                <Spotlight anime={anime} genres={anime.genres} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Border Line */}
                    <div className={`border-b-2 ${darkMode ? 'border-violet-700' : 'border-dark'} relative top-3 my-7 mt-[3.2rem]`}></div>

                    {/* New Season Exclusives Section */}
                    <div className="flex flex-col p-5">
                        <div className="mt-2 flex flex-col space-y-2 py-3">
                            <h1 className="text-2xl sm:text-3xl">New Season Exclusives</h1>
                            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} text-base sm:text-lg`}>
                                YepoAnime is the only place to find these titles!
                            </span>
                        </div>
                        <div className="flex justify-center mt-3">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={100}
                                navigation
                                breakpoints={{
                                    320: { slidesPerView: 2 }, // Mobile
                                    640: { slidesPerView: 2 }, // Small screens
                                    768: { slidesPerView: 3 }, // Tablets
                                    1024: { slidesPerView: 4 }, // Laptops
                                    1280: { slidesPerView: 5 }, // Large screens
                                }}
                            >
                                {allAnime.map((anime) => (
                                    <SwiperSlide key={anime.id}>
                                        <AnimeCard anime={anime} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Border Line */}
                    <div className={`border-b-2 ${darkMode ? 'border-violet-700' : 'border-dark'} relative top-3 my-7 mt-8`}></div>

                    {/* Latest Series From The Winter Season Section */}
                    <div className="flex flex-col p-5">
                        <div className="mt-2 flex flex-col space-y-2 py-3">
                            <h1 className="text-2xl sm:text-3xl">Latest Series From The Winter Season</h1>
                            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} text-base sm:text-lg`}>
                                YepoAnime now offers the newest and most popular series!
                            </span>
                        </div>
                        <div className="flex justify-center mt-3">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={100}
                                navigation
                                breakpoints={{
                                    320: { slidesPerView: 2 }, // Mobile
                                    640: { slidesPerView: 2 }, // Small screens
                                    768: { slidesPerView: 3 }, // Tablets
                                    1024: { slidesPerView: 5 }, // Laptops
                                    1280: { slidesPerView: 5 }, // Large screens
                                }}
                            >
                                {getSeason?.map((anime) => (
                                    <SwiperSlide key={anime.id}>
                                        <AnimeCard anime={anime} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
