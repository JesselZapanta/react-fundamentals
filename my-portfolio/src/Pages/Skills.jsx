export default function Skills() {
    const skills = [
        {
            name: "React",
            description:
                "Building interactive user interfaces with a component-based architecture.",
            icon: "./react.png",
        },
        {
            name: "Laravel",
            description:
                "Robust back-end development with MVC and elegant syntax.",
            icon: "./laravel.png",
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS for rapid UI development.",
            icon: "./tailwind.png",
        },
        {
            name: "JavaScript",
            description:
                "Core web development language for dynamic functionality.",
            icon: "./javascript.png",
        },
        {
            name: "PHP",
            description:
                "Server-side scripting with integration into Laravel and beyond.",
            icon: "./php.png",
        },
        {
            name: "MySQL",
            description:
                "Reliable relational database management for storing and querying data.",
            icon: "./mysql.png",
        },
        {
            name: "Inertia.js",
            description:
                "Bridges the gap between modern SPAs and classic server-side routing.",
            icon: "./inertia.png",
        },
        {
            name: "Vite",
            description:
                "Lightning-fast dev server and build tool for modern web projects.",
            icon: "./vite.png",
        },
    ];

    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-gray-700 font-bold mb-4">
                        My Skills
                    </h2>
                    <div className="w-24 h-1 bg-indigo-400 mx-auto"></div>
                    <p className="text-gray-500 my-4">
                        I specialize in modern web development, with a strong
                        <br />
                        focus on the Laravel framework and React.
                    </p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="text-center hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                            <div className="h-full border border-slate-200 bg-white p-6 flex flex-col justify-start items-center rounded-lg shadow-md hover:bg-slate-50">
                                <img
                                    className="w-18 h-18"
                                    src={skill.icon}
                                    alt={skill.name}
                                />
                                <h3 className="font-bold text-lg mb-2 mt-4">
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-gray-500 text-center grow">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
