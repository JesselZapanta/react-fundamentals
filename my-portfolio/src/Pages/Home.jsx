import { Typewriter } from "react-simple-typewriter";

export default function Home({ setActiveSection }) {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl min-h-screen mx-auto flex items-center justify-center pt-16 px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-18">
                    <div className="space-y-6 text-center lg:text-left order-last lg:order-first">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                                Hi, I'm <br />
                                <span className="font-bold">
                                    <Typewriter
                                        words={["Jessel Zapanta"]}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={150}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </h1>
                            <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                                Full Stack Developer <br />
                                <span className="text-indigo-400">
                                    React
                                </span> &{" "}
                                <span className="text-indigo-400">Laravel</span>
                            </p>
                        </div>
                        <p className="text-justify sm:text-lg text-slate-500">
                            I'm an extremely aspirational web developer seeking
                            any position in a reputable IT business that will
                            allow me to use my abilities. For businesses and
                            organizations looking to succeed, I specialize in
                            creating engaging and interactive websites.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#Projects"
                                onClick={() => setActiveSection("Projects")}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-slate-900 text-gray-200 h-11 rounded-md px-8 w-full sm:w-auto hover:bg-slate-700 transition ease-in-out">
                                View My Work
                            </a>
                            <a
                                href="#Contact"
                                onClick={() => setActiveSection("Contact")}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border border-slate-900 text-slate-900 h-11 rounded-md px-8 w-full sm:w-auto hover:bg-slate-100 transition ease-in-out">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center order-first lg:order-last">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-64 w-64 md:w-96 md:h-96 shadow-lg border-4 border-white hover:scale-105 transform transition-all duration-300">
                            <img
                                className="aspect-square h-full w-full"
                                src="./pfp.png"
                                alt="Jessel Zapanta"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
