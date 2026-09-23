import { Github, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-black tracking-tight text-slate-900">
                            <span className="text-indigo-500">{"<"}</span>JZ
                            <span className="text-indigo-500">{"/>"}</span>
                        </span>
                        <span className="h-5 w-px bg-slate-200"></span>
                        <p className="text-sm text-slate-500">
                            © {new Date().getFullYear()} Jessel Zapanta. Crafted
                            with{" "}
                            <Heart className="inline w-3 h-3 text-red-400 fill-red-400" />{" "}
                            in the Philippines.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase hidden sm:block">
                            Connect
                        </span>
                        <a
                            href="https://github.com/JesselZapanta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 hover:scale-105 transition-all"
                            aria-label="GitHub">
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:jeszapanta9@gmail.com"
                            className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition"
                            aria-label="Email">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                    <p>Built with React • Vite • Tailwind CSS</p>
                    <div className="flex items-center gap-4">
                        <a href="#Home" className="hover:text-slate-600 transition">
                            Home
                        </a>
                        <a href="#Projects" className="hover:text-slate-600 transition">
                            Projects
                        </a>
                        <a href="#Contact" className="hover:text-slate-600 transition">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
