export default function Code() {
    return (
        <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-slate-800/80 backdrop-blur px-4 py-3 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 tracking-wide">
                        developer.js — Jessel
                    </span>
                    <span className="w-12"></span>
                </div>
                <div className="p-6 font-mono text-sm text-slate-100 leading-relaxed">
                    <div className="space-y-2">
                        <div>
                            <span className="text-violet-400">const</span>{" "}
                            <span className="text-sky-400">developer</span> ={" "}
                            {"{"}
                        </div>
                        <div className="ml-4">
                            <span className="text-emerald-400">name</span>:{" "}
                            <span className="text-amber-300">
                                &quot;Jessel Zapanta&quot;
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-emerald-400">title</span>:{" "}
                            <span className="text-amber-300">
                                &quot;Full Stack Developer&quot;
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-emerald-400">education</span>:{" "}
                            <span className="text-amber-300">
                                &quot;Computer Science&quot;
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-emerald-400">skills</span>: [
                            <span className="text-amber-300">&quot;HTML&quot;</span>,{" "}
                            <span className="text-amber-300">
                                &quot;CSS/Tailwind&quot;
                            </span>
                            , <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                            <span className="text-amber-300">&quot;Laravel&quot;</span>
                            ],
                        </div>
                        <div className="ml-4">
                            <span className="text-emerald-400">experience</span>:{" "}
                            <span className="text-sky-400">3</span>,
                        </div>
                        <div className="ml-4">
                            <span className="text-emerald-400">passion</span>:{" "}
                            <span className="text-amber-300">
                                &quot;Building web applications&quot;
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-emerald-400">learning</span>:{" "}
                            <span className="text-amber-300">&quot;Always&quot;</span>
                        </div>
                        <div>{"};"}</div>

                        <div className="pt-4">
                            <div>
                                <span className="text-violet-400">
                                    function
                                </span>{" "}
                                <span className="text-sky-400">
                                    getAboutMe
                                </span>
                                () {"{"}
                            </div>
                            <div className="ml-4">
                                <span className="text-violet-400">return</span>{" "}
                                <span className="text-amber-300">
                                    &quot;Code-driven, coffee-fueled, and always
                                    building something.&quot;
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
