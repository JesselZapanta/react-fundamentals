export default function Code() {
    return (
        <div className="relative">
            <div className="bg-gray-900 border rounded-lg overflow-hidden shadow-lg">
                <div className="bg-muted px-4 py-3 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-6 font-mono text-sm text-white">
                    <div className="space-y-2">
                        <div>
                            <span className="text-purple-500">const</span>{" "}
                            <span className="text-blue-500">developer</span> ={" "}
                            {"{"}
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">name</span>:{" "}
                            <span className="text-orange-500">
                                "Jessel Zapanta"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">title</span>:{" "}
                            <span className="text-orange-500">
                                "Full Stack Developer"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">education</span>:{" "}
                            <span className="text-orange-500">
                                "Computer Science"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">skills</span>: [
                            <span className="text-orange-500">"HTML"</span>,{" "}
                            <span className="text-orange-500">
                                "CSS/Tailwind CSS"
                            </span>
                            , <span className="text-orange-500">"React"</span>,{" "}
                            <span className="text-orange-500">"Laravel"</span>
                            ],
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">experience</span>:{" "}
                            <span className="text-blue-500">3</span>,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">passion</span>:{" "}
                            <span className="text-orange-500">
                                "Building web applications"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">learning</span>:{" "}
                            <span className="text-orange-500">"Always"</span>
                        </div>
                        <div>{"};"}</div>

                        <div className="pt-4">
                            <div>
                                <span className="text-purple-500">
                                    function
                                </span>{" "}
                                <span className="text-blue-500">
                                    getAboutMe
                                </span>
                                () {"{"}
                            </div>
                            <div className="ml-4">
                                <span className="text-purple-500">return</span>{" "}
                                <span className="text-orange-500">
                                    "Code-driven, coffee-fueled, and always
                                    building something."
                                </span>
                                ;
                            </div>
                            <div>{"}"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
