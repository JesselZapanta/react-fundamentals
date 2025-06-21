import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ sections, activeSection, setActiveSection }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-indigo-400">
                        <a href="#Home">{"<JZ/>"}</a>
                    </h1>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex space-x-6 text-gray-700">
                        {sections.map((item) => {
                            const isActive = activeSection === item;

                            return (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        onClick={() => setActiveSection(item)}
                                        className={`transition-all duration-300 ease-in-out${
                                            isActive
                                                ? "text-slate-600 font-semibold"
                                                : "hover:text-slate-600"
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
                        className="md:hidden text-gray-700">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <ul className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-700">
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
                                        className={`block transition ${
                                            isActive
                                                ? "text-slate-600 font-semibold"
                                                : "hover:text-slate-600"
                                        }`}>
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </nav>
        </>
    );
}
