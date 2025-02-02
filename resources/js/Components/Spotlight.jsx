import { motion } from "framer-motion"
import { useDarkMode } from "@/Context/DarkModeContext"

export default function Spotlight({anime, genres}) {
    const { darkMode } = useDarkMode();
    return (
        <>
        {/* spot-light */}
        <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`${darkMode ? 'bg-zinc-950' : 'bg-white'} flex w-full h-[95%] rounded-lg border-2 border-violet-500`}
              >
                <div className="w-full flex justify-between">
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center w-[65%] p-5"
                  >
                    {/* Title & Year */}
                    <motion.div
                      initial={{ opacity: 0}}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-baseline justify-center space-x-2 mt-[100px] mb-[25px]"
                    >
                      <h1 className="text-center text-5xl font-bold font-sans">{anime?.title}</h1>
                      <span className="text-gray-800">
                        {anime?.year === null ? "Not Aired" : anime?.year}
                      </span>
                    </motion.div>

                    {/* Synopsis */}
                    <motion.div
                      initial={{ opacity: 0}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-center"
                    >
                      <span>
                        {anime?.synopsis.length > 500
                          ? anime?.synopsis.slice(0, 500) + "..."
                          : anime?.synopsis}
                      </span>
                    </motion.div>

                    {/* Genres */}
                    <motion.div
                      initial={{ opacity: 0}}
                      whileInView={{ opacity: 1}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-center"
                    >
                      <span className="flex space-x-1 items-center gap-1 mt-[25px] scale-[0.9] relative right-[45px]">
                        Genres:
                        {genres?.map((genre) => (
                          <span
                            key={genre.name}
                            className="border border-gray-600 rounded-xl px-2 text-md text-center"
                          >
                            {genre.name}
                          </span>
                        ))}
                      </span>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                      initial={{ opacity: 0}}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="mt-[40px] flex space-x-3 relative right-[30px]"
                    >
                      <button className="py-2 px-4 transition-all duration-300 bg-violet-600 rounded-xl hover:bg-violet-700 text-white">
                        Watch Now
                      </button>
                      <button className="py-2 px-4 transition-all duration-300 bg-violet-400 rounded-xl hover:bg-violet-700 text-white">
                        Details
                      </button>
                    </motion.div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-1/3 h-[610px] relative"
                  >
                    <img
                        src={anime?.images?.jpg?.large_image_url}
                        alt={anime.title}
                        className="scale-[1] w-full h-full drop"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-zinc-950' : 'from-white'} via-transparent to-transparent`}></div>
                  </motion.div>
                </div>
              </motion.div>
        </>
    )
}
