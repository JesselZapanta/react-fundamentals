import Reveal from "../Components/Reveal";

export default function Skills() {
    const skills = [
        {
            name: "React",
            description:
                "Building interactive UIs with component-based architecture.",
            icon: "./react.png",
        },
        {
            name: "Laravel",
            description:
                "Robust back-end with MVC, Eloquent, and elegant syntax.",
            icon: "./laravel.png",
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS for rapid, consistent UI development.",
            icon: "./tailwind.png",
        },
        {
            name: "JavaScript",
            description:
                "Core language for dynamic, modern web functionality.",
            icon: "./javascript.png",
        },
        {
            name: "PHP",
            description:
                "Server-side scripting — foundation of Laravel apps.",
            icon: "./php.png",
        },
        {
            name: "MySQL",
            description:
                "Reliable relational DB for storing and querying data.",
            icon: "./mysql.png",
        },
        {
            name: "Inertia.js",
            description:
                "Bridges modern SPAs with classic server-side routing.",
            icon: "./inertia.png",
        },
        {
            name: "Vite",
            description:
                "Lightning-fast dev server & build tool for modern projects.",
            icon: "./vite.png",
        },
    ];

    return (
        <div className="relative bg-gray-50 overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-50/60 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto py-16 px-6">
                <Reveal>
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold tracking-widest text-slate-600 uppercase shadow-sm">
                            Tech Stack
                        </span>
                        <h2 className="text-4xl md:text-5xl text-slate-800 font-black tracking-tight mt-4 mb-3">
                            My Skills
                        </h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto rounded-full"></div>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            I specialize in modern web development with a strong
                            focus on the{" "}
                            <span className="font-semibold text-slate-700">
                                Laravel + React
                            </span>{" "}
                            ecosystem.
                        </p>
                    </div>
                </Reveal>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {skills.map((skill, index) => (
                        <Reveal key={index} delay={index * 70} y={20}>
                            <div className="group text-center hover:-translate-y-1 transition-all duration-300">
                                <div className="h-full flex flex-col items-center bg-white border border-slate-200 p-6 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-indigo-100 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-indigo-50/30">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5 group-hover:bg-white group-hover:border-indigo-100 group-hover:shadow-md transition-all">
                                        <img
                                            className="w-full h-full object-contain"
                                            src={skill.icon}
                                            alt={skill.name}
                                        />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base mb-1.5 mt-4 tracking-tight">
                                        {skill.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 text-center leading-relaxed grow">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
