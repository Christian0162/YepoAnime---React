import { useDarkMode } from "@/Context/DarkModeContext";

export default function NavBar () {

    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
    <>
            <nav
            className={`${darkMode ? 'bg-zinc-950 text-white drop-shadow-md shadow-md shadow-violet-700' : 'bg-white text-black shadow-md drop-shadow-md'} flex items-center justify-between space-x-4 p-5 py-4`}
            >
            <div
            className="flex items-center space-x-4"
            >
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </a>
                <h1
                className="text-xl"
                >
                    <a href={route('test')}>
                        YepoAnime
                    </a>
                </h1>
            </div>
            <div
            className="flex items-center space-x-4 relative right-5"
            >
                <a
                href="#"
                className=""
                >
                    Register
                </a>
                <a
                href="#"
                className=""
                >
                    Login
                </a>

                <button
                onClick={toggleDarkMode}
                className="group relative left-3"
                >
                    <svg className="transition-all duration-150 group-hover:text-violet-700 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                    </svg>
                </button>
            </div>
            </nav>
    </>
    )
}
