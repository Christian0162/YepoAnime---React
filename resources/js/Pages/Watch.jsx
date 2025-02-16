import NavBar from "@/Components/NavBar"
import { useDarkMode } from "@/Context/DarkModeContext";
import { useState } from "react";
import { Smile, SendHorizontal, ThumbsUp, ThumbsDown, Reply, Ellipsis } from "lucide-react";
import Comment from "@/Components/Comment";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";



export default function Watch({ getAnime, getEpisode, comments, user }) {
    const [watched, setWatched] = useState({});
    const [more, setMore] = useState(true);
    const { darkMode } = useDarkMode();

    // console.log(user.name);

    const toggleMore = () => {
        setMore(!more);
    }

    const toggleWatched = (mal_id) => {
        setWatched((prev) => ({
            ...prev,
            [mal_id]: !prev[mal_id]

        }))
    }

    return (
        <>
            <AuthenticatedLayout>
                <div
                    className={`${darkMode ? 'bg-zinc-950 text-white' : 'bg-white'} min-h-screen p-5`}
                >
                    <div
                        className="flex flex-col p-3 space-y-6"
                    >
                        <div
                            className="flex space-x-3 mt-2"
                        >
                            <span>Home</span>
                            <span>•</span>
                            <span>{getAnime.type}</span>
                            <span>•</span>
                            <span>{getAnime.title}</span>
                        </div>
                        <div
                            className="flex"
                        >
                            <div
                                className="flex flex-col text-md">
                                <div
                                    className="flex space-x-5 items-center mb-2"
                                >
                                    <span>List of Episodes:</span>
                                    <input
                                        type="search"
                                        className="h-6 w-[150px] rounded-md"
                                    />
                                </div>
                                <div
                                    className="flex flex-col mt-3 max-h-[530px] overflow-y-auto rounded-md"
                                >
                                    {getEpisode.map((anime) => (
                                        <div
                                            className="flex"
                                        >
                                            <button
                                                onClick={() => toggleWatched(anime.mal_id)}
                                                className={`border-none h-14 w-[300px] flex space-x-5 items-center pl-5 ${darkMode ? watched[anime.mal_id] ? 'bg-slate-300' : 'bg-slate-700' : watched[anime.mal_id] ? 'bg-slate-700' : 'bg-slate-300'}`}
                                            >
                                                <span>{anime.mal_id}</span>
                                                <span>{anime.title.length > 20 ? anime.title.slice(0, 20) + "..." : anime.title}</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full">
                                <iframe
                                    className="h-full w-full"
                                    src={getAnime?.trailer?.embed_url}
                                ></iframe>
                            </div>
                        </div>
                        {/* details */}
                        <div
                            className={`flex space-x-3 pt-5 p-3 ${darkMode ? 'drop-shadow-md shadow-violet-700 shadow-md' : ''}`}
                        >
                            <div
                                className="h-1/4 w-1/4"
                            >
                                <img
                                    className="h-full w-full object-fill rounded-lg"
                                    src={getAnime.images.jpg.large_image_url}
                                    alt={getAnime.title} />
                            </div>
                            <div
                                className="flex flex-col space-y-3 w-full"
                            >
                                <span
                                    className="text-xl font-bold"
                                >
                                    {getAnime.title}
                                </span>
                                <div
                                    className="flex space-x-3 items-center"
                                >
                                    <span>{getAnime.type}</span>
                                    <span
                                        className="text-sm"
                                    >|</span>
                                    <span>{getAnime.source}</span>
                                    <span
                                        className="text-sm"
                                    >|</span>
                                    <span>{getAnime.status}</span>
                                    <span
                                        className="text-sm"
                                    >|</span>
                                    <span>{getAnime.duration}</span>
                                </div>
                                <div
                                    className="max-h-[130px] overflow-y-auto"
                                >
                                    <span
                                        className="text-sm space-x-2"
                                    >
                                        {more ? getAnime.synopsis.length > 350 ? getAnime.synopsis.slice(0, 350) + " ... " : getAnime.synopsis + " " : getAnime.synopsis + " "}
                                        <button
                                            onClick={toggleMore}
                                            className="border-b border-gray-700"
                                        >{more ? '- more' : ' - less'}</button>
                                    </span>
                                </div>
                            </div>
                            <div
                                className="h-1/4 w-1/3 bg-slate-500 space-y-5 rounded-md"
                            >
                                <div
                                    className="flex justify-between p-6"
                                >
                                    <div
                                        className="space-x-2"
                                    >
                                        <span>⭐</span>
                                        <span>{getAnime.score}</span>
                                    </div>
                                    <span>Vote now</span>
                                </div>
                                <div
                                    className="flex justify-center pb-5 relative top-3"
                                >
                                    <span>
                                        What do you think of me love?</span>
                                </div>
                                <div
                                    className="flex"
                                >

                                    <button
                                        className="p-5 px-7 transition-all duration-200 hover:bg-slate-300 w-full h-full flex flex-col items-center"
                                    >
                                        <span>😩</span>
                                        Boring
                                    </button>
                                    <button
                                        className="p-5 px-7 transition-all duration-200 hover:bg-slate-300 w-full h-full flex flex-col items-center"
                                    >
                                        <span>😩</span>
                                        Boring
                                    </button>
                                    <button
                                        className="p-5 px-7 transition-all duration-200 hover:bg-slate-300 w-full h-full flex flex-col items-center"
                                    >
                                        <span>😩</span>
                                        Boring
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* comment section */}
                        <div
                            className="space-y-3"
                        >
                            <h1
                                className="text-2xl text-violet-600"
                            >
                                Comments
                            </h1>
                            <div
                                className="p-7 w-[70%] bg-slate-600 rounded"
                            >
                                <div
                                    className="flex justify-between space-y-8"
                                >
                                    <div
                                        className="space-x-5"
                                    >
                                        <span>Episode 1</span>
                                        <span
                                            className="text-xl"
                                        >|</span>
                                        <span>1,175 Comments</span>
                                    </div>
                                    <span
                                        className="relative bottom-4"
                                    >Sort By</span>
                                </div>
                                <div
                                    className="space-y-2"
                                >
                                    <div
                                        className="flex space-x-5 items-center"
                                    >
                                        <img src={getAnime.images.jpg.image_url} alt="ambot" className="rounded-full h-10 w-10" />
                                        <div
                                            className="flex flex-col space-y-3 text-sm"
                                        >
                                            <span>
                                                {user?.name ?? "Guest"}
                                            </span>
                                            <span
                                                className="text-sm"
                                            >You must be
                                                login
                                                to post a comment</span>
                                        </div>
                                    </div>
                                    <div
                                        className="h-[130px]"
                                    >
                                        <form action={route('watch.comment.store', getAnime.mal_id)} method="POST">
                                            <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content} />

                                            <textarea
                                                className="p-4 h-[100px] mx-[66px] resize-none rounded-lg text-sm w-[90%]"
                                                name="comment"
                                                id="comment"
                                                placeholder="Leave a comment"></textarea>
                                            <Smile
                                                size={23}
                                                strokeWidth={1}
                                                className="relative left-[780px] bottom-[85px]"
                                            />
                                            <button
                                                type="Submit"
                                                className="border-none relative bottom-[60px] left-[780px] text-gray-700"
                                            >
                                                <SendHorizontal
                                                    size={23}
                                                    strokeWidth={1}
                                                ></SendHorizontal>
                                            </button>
                                        </form>
                                    </div>
                                    {/* user comment */}
                                    <Comment getAnime={getAnime} comments={comments}></Comment>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}
