import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ children, activeSection, setActiveSection }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [activeSection, setActiveSection] = useState("home");

    const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <>
            <nav className="bg-white shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-indigo-400">
                        {"<JZ/>"}
                    </h1>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex space-x-6 text-gray-700">
                        {navItems.map((item) => {
                            const id = item.toLowerCase();
                            const isActive = activeSection === id;

                            return (
                                <li key={item}>
                                    <a
                                        href={`#${id}`}
                                        onClick={() => setActiveSection(id)}
                                        className={`transition ${
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
                        {navItems.map((item) => {
                            const id = item.toLowerCase();
                            const isActive = activeSection === id;

                            return (
                                <li key={item}>
                                    <a
                                        href={`#${id}`}
                                        onClick={() => {
                                            setIsOpen(false);
                                            setActiveSection(id);
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
            <main>{children}</main>
        </>
    );
}
