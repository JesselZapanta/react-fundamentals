import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ sections, activeSection, setActiveSection }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="#Home"
                    onClick={() => setActiveSection("Home")}
                    className="group flex items-center gap-2">
                    <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-500 transition-colors">
                        <span className="text-indigo-500">{"<"}</span>JZ
                        <span className="text-indigo-500">{"/>"}</span>
                    </span>
                    <span className="hidden sm:block h-6 w-px bg-slate-200"></span>
                    <span className="hidden sm:block text-sm font-medium text-slate-500 tracking-wide">
                        Portfolio
                    </span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
                    {sections.map((item) => {
                        const isActive = activeSection === item;
                        return (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    onClick={() => setActiveSection(item)}
                                    className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                                        isActive
                                            ? "bg-slate-900 text-white shadow-md"
                                            : "hover:bg-slate-100 hover:text-slate-900"
                                    }`}>
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors"
                    aria-label="Toggle menu">
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl">
                    <ul className="px-6 py-4 space-y-1 text-sm font-medium text-slate-600">
                        {sections.map((item) => {
                            const isActive = activeSection === item;
                            return (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        onClick={() => {
                                            setIsOpen(false);
                                            setActiveSection(item);
                                        }}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition ${
                                            isActive
                                                ? "bg-slate-900 text-white shadow"
                                                : "hover:bg-slate-50 hover:text-slate-900"
                                        }`}>
                                        {item}
                                        {isActive && (
                                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
}
