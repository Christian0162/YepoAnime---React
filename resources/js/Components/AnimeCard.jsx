import { motion } from "framer-motion"

export default function AnimeCard ({anime}) {
    return (
        <>
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="group transition-all duration-75 h-[400px] w-[270px] drop-shadow-xl flex flex-col hover:bg-gray-300"
            >
                {/* Image */}
                <div
                className="w-[90%] transition-all duration-75 group-hover:w-full h-full self-center"
                >
                    <img
                    src={anime?.images?.jpg?.large_image_url}
                    alt={ anime?.title || "Anime Card"}
                    className="transition-all duration-75 w-full h-full object-cover group-hover:w-full group-hover:h-full group-hover:opacity-10"
                    />
                    <div
                    className="text-md mt-2"
                    >
                        <span
                            >{anime?.title}
                        </span>
                    </div>
                </div>

                {/* Details */}
                <div
                className="w-full h-full flex flex-col text-black absolute p-3 left-1 top-2 opacity-0 group-hover:opacity-100 space-y-2"
                >
                    <span
                    className="text-center"
                    >{anime?.title}</span>
                    <div
                    className="flex items-center space-x-2"
                    >
                    <div
                    className="flex items-center justify-center space-x-3 left-1 relative my-3"
                    >
                        <div
                        className="flex items-center gap-1"
                        >
                            <span>
                                {anime?.score}

                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </span>
                        </div>
                        <span>1 Season</span>
                        <span>12 Episodes</span>
                    </div>

                    </div>
                    <span
                    className="text-center"
                    >{anime?.synopsis?.length > 200 ? anime.synopsis.slice(0, 200)+'. . . ' : anime?.synopsis}</span>
                    <div
                    className="flex space-x-3 relative top-5"
                    >
                        <button
                        className="transition-all duration-200 py-2 px-3 bg-violet-500 text-sm rounded-lg hover:bg-violet-700"
                        >
                            Watch Now
                        </button>

                        <button
                        className="transition-all duration-200 py-2 px-3 bg-violet-500 text-sm rounded-lg hover:bg-violet-700"
                        >
                            Add to Favoites
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

