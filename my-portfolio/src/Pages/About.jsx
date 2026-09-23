import Code from "../Components/Code";
import Tag from "../Components/Tag";
import Reveal from "../Components/Reveal";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <Reveal>
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold tracking-widest text-indigo-600 uppercase">
                        Get to know me
                    </span>
                    <h2 className="text-4xl md:text-5xl text-slate-800 font-black tracking-tight mt-4 mb-3">
                        About Me
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto rounded-full"></div>
                </div>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <Reveal delay={100}>
                    <Code />
                </Reveal>
                <div className="text-left">
                    <Reveal delay={200}>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                            Web Developer{" "}
                            <span className="text-indigo-500">•</span> Problem
                            Solver
                        </h3>
                    </Reveal>
                    <Reveal delay={250}>
                        <div className="space-y-4 text-slate-500 leading-relaxed">
                            <p>
                                I&apos;m a web developer with a strong focus on{" "}
                                <span className="font-semibold text-slate-700">
                                    Laravel, React, and Inertia.js
                                </span>
                                . I build full-stack applications with clean UI
                                using Tailwind CSS and solid backend logic with
                                Laravel — applied in real systems like project
                                monitoring, inventory, and publication platforms.
                            </p>
                            <p>
                                I didn&apos;t just learn web development —{" "}
                                <span className="text-slate-700 font-medium">
                                    I built my way into it.
                                </span>{" "}
                                From late-night bug hunts to shipping full systems,
                                I&apos;ve gained practical experience through
                                self-learning and project-based work. I&apos;m
                                driven by challenges and focused on creating clean,
                                efficient solutions that make sense to the people
                                using them.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="flex flex-wrap gap-2 mt-7">
                            <Tag
                                label="Problem Solver"
                                bgColor="bg-blue-50 border border-blue-100"
                                textColor="text-blue-700"
                            />
                            <Tag
                                label="Logical"
                                bgColor="bg-violet-50 border border-violet-100"
                                textColor="text-violet-700"
                            />
                            <Tag
                                label="Growth-Minded"
                                bgColor="bg-emerald-50 border border-emerald-100"
                                textColor="text-emerald-700"
                            />
                            <Tag
                                label="Coachable"
                                bgColor="bg-amber-50 border border-amber-100"
                                textColor="text-amber-700"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={350}>
                        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                                <p className="text-2xl font-black text-slate-900">6+</p>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                                    Projects
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                                <p className="text-2xl font-black text-slate-900">3</p>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                                    Years Exp
                                </p>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
                                <p className="text-2xl font-black text-indigo-600">100%</p>
                                <p className="text-xs font-medium text-indigo-600/70 uppercase tracking-wide">
                                    Passion
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
