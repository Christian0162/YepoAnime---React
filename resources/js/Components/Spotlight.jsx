import { motion } from "framer-motion";
import { useDarkMode } from "@/Context/DarkModeContext";

export default function Spotlight({ anime, genres }) {
    const { darkMode } = useDarkMode();

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${darkMode ? 'bg-zinc-950' : 'bg-white'} flex w-full h-[600px] sm:h-[95%] rounded-lg border-2 border-violet-500`}
        >
            <div className="w-full flex flex-col sm:flex-row-reverse lg:flex-row-reverse justify-between">
                {/* Image Section - Visible on all screens */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-full sm:w-1/2 h-full sm:h-[610px] relative lg:flex lg:justify-end overflow-hidden rounded-lg"
                >
                    <img
                        src={anime?.images?.jpg?.large_image_url}
                        alt={anime.title}
                        className="w-full lg:w-[70%] h-full object-cover p-2 rounded-xl"
                    />
                    {/* Overlay for buttons on small screens */}
                    <div className="sm:hidden absolute inset-0 flex items-end justify-center bottom-5 p-4">
                        <div className="flex space-x-3">
                            <a
                                href={route('watch.show', anime.mal_id)}
                                className="py-2 px-4 transition-all duration-300 bg-violet-600 rounded-xl hover:bg-violet-700 text-white"
                            >
                                Watch Now
                            </a>
                            <a
                                href="#"
                                className="hidden py-2 px-4 transition-all duration-300 bg-violet-400 rounded-xl hover:bg-violet-700 text-white"
                            >
                                Details
                            </a>
                        </div>
                    </div>
                    {/* Gradient overlay */}
                    {/* <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-zinc-950' : 'from-white'} via-transparent to-transparent`}></div> */}
                </motion.div>

                {/* Text Content - Hidden on small screens, visible on larger screens */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden sm:flex flex-col items-center w-full sm:w-1/2 p-5"
                >
                    {/* Title & Year */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-baseline space-x-2 mt-[100px] mb-[25px]"
                    >
                        <h1 className="text-center text-5xl font-bold font-sans self-baseline">{anime?.title}</h1>
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-800'} self-baseline`}>
                            {anime?.year === null ? "Not Aired" : anime?.year}
                        </span>
                    </motion.div>

                    {/* Synopsis */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center"
                    >
                        <span>
                            {anime?.synopsis.length > 300
                                ? anime?.synopsis.slice(0, 300) + "..."
                                : anime?.synopsis}
                        </span>
                    </motion.div>

                    {/* Genres */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-left"
                    >
                        <span className="flex space-x-1 items-center gap-1 mt-[25px]">
                            Genres:
                            {genres?.map((genre) => (
                                <span
                                    key={genre.name}
                                    className={`border ${darkMode ? 'border-gray-600' : 'border-gray-400'} rounded-xl px-2 text-md text-center`}
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </span>
                    </motion.div>

                    {/* Buttons - Hidden on small screens, visible on larger screens */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-[40px] flex space-x-3"
                    >
                        <a
                            href={route('watch.show', anime.mal_id)}
                            className="py-2 px-4 transition-all duration-300 bg-violet-600 rounded-xl hover:bg-violet-700 text-white"
                        >
                            Watch Now
                        </a>
                        <a
                            href="#"
                            className="py-2 px-4 transition-all duration-300 bg-violet-400 rounded-xl hover:bg-violet-700 text-white"
                        >
                            Details
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
