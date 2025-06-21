import Code from "../Components/Code";
import Tag from "../Components/Tag";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto p-16 px-6 ">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-gray-700 font-bold mb-4">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-indigo-400 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <Code />
                <div className="text-justify">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">
                        Web Developer
                    </h3>
                    <p className="text-gray-500 mb-4">
                        I'm a web developer with a strong focus on Laravel,
                        React, and Inertia.js. My experience includes building
                        full-stack applications with clean UI using Tailwind CSS
                        and managing backend logic with Laravel. I'm currently
                        applying these skills in real-world systems like project
                        monitoring, inventory management, and academic
                        publication platforms.
                    </p>
                    <p className="text-gray-500 mb-6">
                        I didn’t just learn web development — I built my way
                        into it. From late-night bug hunts to shipping full
                        systems, I’ve gained practical experience through
                        self-learning and project-based work. I’m driven by
                        challenges and focused on creating clean, efficient
                        solutions that don’t just work — they make sense to the
                        people using them.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Tag
                            label="Problem Solver"
                            bgColor="bg-blue-100"
                            textColor="text-blue-800"
                        />
                        <Tag
                            label="Fast Learner"
                            bgColor="bg-purple-100"
                            textColor="text-purple-800"
                        />
                        <Tag
                            label="Detail-Oriented"
                            bgColor="bg-green-100"
                            textColor="text-green-800"
                        />
                        <Tag
                            label="System Builder"
                            bgColor="bg-red-100"
                            textColor="text-red-800"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
