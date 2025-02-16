import { useDarkMode } from "@/Context/DarkModeContext"
import { Smile, SendHorizontal, ThumbsUp, ThumbsDown, Reply, Ellipsis } from "lucide-react";
export default function Comment({ getAnime, comments }) {

    const { darkMode } = useDarkMode();
    // console.log(content)
    // console.log(comments[3].anime_id)

    return (
        <>
            {comments.map((com) => (
                getAnime.mal_id != com.anime_id ? undefined
                    : <div
                        key={com.id}
                        className="flex flex-col pb-5"
                    >
                        <div
                            className="flex space-x-5"
                        >
                            <img src={getAnime.images.jpg.image_url} alt="ambot" className="rounded-full h-10 w-10" />
                            <span
                                className="text-sm"
                            >{com.user.name}</span>
                            <span
                                className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-900'}`}
                            >a day ago</span>
                        </div>
                        <div
                            className="text-sm mx-[3.6rem] relative bottom-2"
                        >
                            <span>{com?.content}</span>
                        </div>
                        <div
                            className="flex space-x-7 mx-[3.6rem] items-center"
                        >
                            <button
                                className="flex items-center justify-center text-sm  gap-1"
                            >
                                <Reply
                                    size={20}
                                    strokeWidth={1}
                                ></Reply>
                                <span
                                    className="mt-1"
                                >Reply</span>
                            </button>

                            {/* like button */}
                            <ThumbsUp
                                size={20}
                                strokeWidth={1}
                            ></ThumbsUp>

                            {/* unlike button */}
                            <ThumbsDown
                                size={20}
                                strokeWidth={1}
                            ></ThumbsDown>
                            <button
                                className="flex space-x-1 items-center text-sm"
                            >
                                <Ellipsis
                                    size={20}
                                    strokeWidth={1}
                                ></Ellipsis>
                                <span>More</span>
                            </button>
                        </div>
                    </div>
            ))}
        </>
    )
}
