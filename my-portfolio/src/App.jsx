import { useEffect, useState } from "react";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

export default function App() {
    const [activeSection, setActiveSection] = useState("home");

    const sections = ["Home", "About", "Skills", "Projects", "Contact"];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "-64px 0px -30% 0px",
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="overflow-x-hidden">
            <Navbar
                sections={sections}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <div id="Home">
                <Home />
            </div>
            <div id="About">
                <About />
            </div>
            <div id="Skills">
                <Skills />
            </div>
            <div id="Projects">
                <Projects />
            </div>
            <div id="Contact">
                <Contact />
            </div>

            <Footer />
        </div>
    );
}
