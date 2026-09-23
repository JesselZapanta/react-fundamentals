import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Reveal from "../Components/Reveal";

export default function Home({ setActiveSection }) {
    return (
        <div className="relative bg-gray-50 overflow-hidden">
            {/* Subtle gradient mesh */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl min-h-screen mx-auto flex items-center justify-center pt-16 px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-20 w-full">
                    <div className="space-y-7 text-center lg:text-left order-last lg:order-first">
                        <Reveal delay={0}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm text-xs font-medium text-slate-600">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Available for new opportunities
                                <Sparkles className="w-3 h-3 text-indigo-400" />
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <div className="space-y-4">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-slate-900">
                                    Hi, I&apos;m <br />
                                    <span className="font-black tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 bg-clip-text text-transparent">
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
                                <p className="text-lg font-semibold sm:text-xl md:text-2xl text-slate-700">
                                    Full Stack Developer <br />
                                    <span className="text-indigo-500">React</span>
                                    <span className="text-slate-400 mx-2">&</span>
                                    <span className="text-indigo-500">Laravel</span>
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={200}>
                            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                I&apos;m an aspirational web developer passionate
                                about building engaging, interactive websites that
                                help businesses and organizations succeed.
                            </p>
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                                <a
                                    href="#Projects"
                                    onClick={() => setActiveSection?.("Projects")}
                                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold bg-slate-900 text-white h-11 rounded-full px-7 shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                    View My Work
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                                <a
                                    href="#Contact"
                                    onClick={() => setActiveSection?.("Contact")}
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border border-slate-200 bg-white text-slate-900 h-11 rounded-full px-7 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300">
                                    <Mail className="w-4 h-4" />
                                    Contact Me
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delay={400}>
                            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-slate-900">6+</span>
                                    <span className="text-slate-500 leading-none text-left">
                                        Projects
                                        <br />
                                        Shipped
                                    </span>
                                </div>
                                <div className="h-8 w-px bg-slate-200"></div>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-slate-900">3</span>
                                    <span className="text-slate-500 leading-none text-left">
                                        Years
                                        <br />
                                        Learning
                                    </span>
                                </div>
                                <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
                                <div className="hidden sm:flex items-center gap-2">
                                    <span className="text-2xl font-bold text-indigo-500">∞</span>
                                    <span className="text-slate-500 leading-none text-left">
                                        Passion for
                                        <br />
                                        Building
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={150} y={32} className="flex justify-center items-center order-first lg:order-last relative">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-72 h-72 md:w-[420px] md:h-[420px] bg-gradient-to-br from-indigo-200 via-violet-100 to-white rounded-full blur-2xl opacity-60"></div>
                        </div>
                        <span className="relative flex shrink-0 overflow-hidden rounded-[2.5rem] h-72 w-72 md:w-[420px] md:h-[420px] shadow-2xl shadow-indigo-100 border-[8px] border-white hover:scale-[1.02] transition-transform duration-500">
                            <img
                                className="aspect-square h-full w-full object-cover"
                                src="./pfp.png"
                                alt="Jessel Zapanta"
                            />
                        </span>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
