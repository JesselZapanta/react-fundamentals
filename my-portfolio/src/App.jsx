import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { useState } from "react";
import Footer from "./Pages/Footer";

export default function App() {
    const [activeSection, setActiveSection] = useState("home");
    return (
        <div className="overflow-x-hidden">
            <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <Home
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
