import { ExternalLink, Github, Sparkles } from "lucide-react";
import Reveal from "../Components/Reveal";

export default function Projects() {
    const projects = [
        {
            name: "TCGC SmartLog",
            stack: "React + Vite",
            description:
                "Photo-captured OJT monitoring for Tangub City Global College — DTR, journals, requirements, evaluations, and reports in one platform.",
            image: "./smartlog.png",
            tags: ["React", "Vite", "Tailwind", "PWA", "MySQL"],
            demo: "https://tcgc-smartlog.vercel.app/",
            github: "https://github.com/JesselZapanta/smartlog",
            featured: true,
        },
        {
            name: "TCGC DisciScan",
            stack: "React + Vite",
            description:
                "Disciplinary Records & Monitoring System — violations, sanctions, case workflows, and analytics with role-based dashboards.",
            image: "./disciscan.png",
            tags: ["React", "Vite", "Tailwind", "JavaScript", "MySQL"],
            demo: "https://tcgc-disciscan.vercel.app/",
            github: "https://github.com/JesselZapanta/disciscan",
            featured: true,
        },
        {
            name: "Suki Cart",
            stack: "React + Vite",
            description:
                "Modern e-commerce platform with catalog, cart, and checkout. PWA-ready and Cordova-compatible with Sora/DM Sans UI.",
            image: "./sukicart.png",
            tags: ["React", "Vite", "Tailwind", "PWA", "JavaScript"],
            demo: "https://suki-cart.vercel.app/",
            github: "https://github.com/jesselzapanta09/suki-cart-frontend",
            featured: true,
        },
        {
            name: "Torch Publication",
            stack: "Laravel + React",
            description:
                "Web-based publication platform for Tangub City Global College — article submission, moderation, and e-newsletter distribution.",
            image: "./torch.png",
            tags: ["Laravel", "React", "Inertia", "Tailwind", "MySQL"],
            demo: null,
            github: "https://github.com/JesselZapanta/thetorchpublication",
        },
        {
            name: "Project Monitoring System",
            stack: "Laravel + React",
            description:
                "Engineering project tracking for road, waterworks, and building construction — updates, progress photos, and reports.",
            image: "./tcemps.png",
            tags: [
                "Laravel",
                "React",
                "Inertia",
                "Tailwind",
                "MySQL",
                "AntDesign",
            ],
            demo: null,
            github: "https://github.com/JesselZapanta/tcepms",
        },
        {
            name: "Inventory Management System",
            stack: "Laravel + React",
            description:
                "Inventory control — categories, suppliers, users, and stock management with clean CRUD workflows.",
            image: "./inventory.png",
            tags: [
                "Laravel",
                "React",
                "Inertia",
                "Tailwind",
                "MySQL",
                "Shadcn",
            ],
            demo: null,
            github: "https://github.com/JesselZapanta/ims",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <Reveal>
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-semibold tracking-widest uppercase">
                        <Sparkles className="w-3 h-3 text-indigo-300" />
                        Selected Work
                    </span>
                    <h2 className="text-4xl md:text-5xl text-slate-800 font-black tracking-tight mt-4 mb-3">
                        My Projects
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto rounded-full"></div>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                        From OJT & disciplinary systems to e-commerce — here are{" "}
                        <span className="font-semibold text-slate-700">
                            6 full-stack products
                        </span>{" "}
                        built with Laravel, React, and modern tooling.
                    </p>
                </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Reveal key={index} delay={index * 80} y={24}>
                        <div className="group flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
                            <div className="flex flex-col flex-1 overflow-hidden border border-slate-200 bg-white rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-slate-200 group-hover:bg-white">
                                <div className="relative h-48 overflow-hidden bg-slate-100">
                                    <img
                                        alt={project.name}
                                        src={project.image}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {project.featured && (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold tracking-wide shadow">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                                LIVE
                                            </span>
                                        )}
                                        {!project.demo && (
                                            <span className="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold tracking-wide shadow">
                                                GITHUB
                                            </span>
                                        )}
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-slate-700 text-[11px] font-semibold border border-slate-200 shadow-sm">
                                            {project.stack}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-[15px] font-black uppercase tracking-tight text-slate-900 mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex gap-1.5 items-center justify-center whitespace-nowrap text-sm font-semibold h-10 rounded-full px-4 flex-1 transition-colors ${
                                                project.demo
                                                    ? "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-300"
                                                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-md"
                                            }`}>
                                            <Github className="w-4 h-4" />
                                            GitHub
                                        </a>
                                        {project.demo ? (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex gap-1.5 items-center justify-center whitespace-nowrap text-sm font-semibold bg-slate-900 text-white h-10 rounded-full px-4 flex-1 hover:bg-slate-800 shadow-md hover:shadow-lg transition-all">
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium text-slate-400 border border-dashed border-slate-200 h-10 rounded-full px-4 flex-1 bg-slate-50">
                                                Not deployed
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={200}>
                <div className="text-center mt-10">
                    <a
                        href="https://github.com/JesselZapanta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm font-semibold border border-slate-200 bg-white text-slate-900 h-11 rounded-full px-8 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all">
                        <Github className="w-4 h-4" />
                        View All on GitHub
                    </a>
                </div>
            </Reveal>
        </div>
    );
}
