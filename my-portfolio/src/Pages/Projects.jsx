import { ExternalLink } from "lucide-react";
import Tag from "../Components/Tag";

export default function Projects() {
    const projects = [
        {
            name: "Torch Publication",
            stack: "Laravel + React",
            description:
                "A web-based publication platform for Tangub City Global College. Features include article submission, moderation, and e-newsletter distribution.",
            image: "./torch.png",
            tags: ["Laravel", "React", "Inertia", "Tailwind", "MySQL"],
            link: "https://linen-salamander-492028.hostingersite.com/",
        },
        {
            name: "Project Monitoring System",
            stack: "Laravel + React",
            description:
                "An engineering project monitoring system tracking road, waterworks, and building construction with updates, progress photos, and reports.",
            image: "./tcemps.png",
            tags: [
                "Laravel",
                "React",
                "Inertia",
                "Tailwind",
                "MySQL",
                "AntDesign",
                "Axios",
            ],
            link: "https://aquamarine-pony-526194.hostingersite.com/login",
        },
        {
            name: "Inventory Management System",
            stack: "Laravel + React",
            description:
                "Tracks product inventory, manages categories, suppliers, and users. Focused on efficient stock control and user-friendly CRUD operations.",
            image: "./inventory.png",
            tags: [
                "Laravel",
                "React",
                "Inertia",
                "Tailwind",
                "MySQL",
                "Shadcn",
            ],
            link: "https://your-inventory-link.com",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-gray-700 font-bold mb-4">
                    My Projects
                </h2>
                <div className="w-24 h-1 bg-indigo-400 mx-auto"></div>
                <p className="text-gray-500 my-4">
                    Here are a few full-stack projects I’ve created <br /> using
                    Laravel and React.
                </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col h-full text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col flex-1 overflow-hidden border border-slate-200 bg-white rounded-lg shadow-sm hover:bg-slate-50">
                            <div className="h-48 flex items-center justify-center">
                                <img
                                    alt={project.name}
                                    src={project.image}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex flex-col items-start mb-3">
                                    <h3 className="text-xl font-bold uppercase">
                                        {project.name}
                                    </h3>
                                    <Tag
                                        label={project.stack}
                                        bgColor="bg-indigo-100"
                                        textColor="text-indigo-800"
                                    />
                                </div>
                                <p className="text-gray-500 text-justify text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <Tag
                                            key={i}
                                            label={tag}
                                            bgColor="bg-gray-200"
                                            textColor="text-gray-800"
                                        />
                                    ))}
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm font-medium bg-slate-900 text-gray-200 h-11 rounded-md px-8 w-full">
                                        <ExternalLink className="w-4 h-4" />
                                        Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-16">
                <a
                    href="https://github.com/JesselZapanta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm font-medium border border-slate-900 text-slate-900 h-11 rounded-md px-8 bg-primary w-full sm:w-auto">
                    <ExternalLink className="w-4 h-4" />
                    View All Projects
                </a>
            </div>
        </div>
    );
}
