import { Mail, Phone, MapPin, Github, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Reveal from "../Components/Reveal";

export default function Contact() {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        subject: "",
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        const subject = formData.subject.trim();
        const name = formData.name.trim();
        const email = formData.email.trim();
        const message = formData.message.trim();

        if (!subject || !name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "c53913ba-d19e-46d6-b679-f27c766bf027";
        if (!accessKey) {
            setError("Form not configured. Please email directly at jeszapanta9@gmail.com");
            return;
        }

        setProcessing(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject,
                    name,
                    email,
                    message,
                    from_name: name,
                    reply_to: email,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSuccess(true);
                setFormData({ subject: "", name: "", email: "", message: "" });
                setTimeout(() => setSuccess(false), 5000);
            } else {
                throw new Error(result.message || "Failed to send");
            }
        } catch (err) {
            console.error("Web3Forms failed:", err);
            setError(`Failed to send (${err.message}). Please try again or email directly at jeszapanta9@gmail.com`);
        } finally {
            setProcessing(false);
        }
    };

    const inputBase =
        "flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition";
    const labelBase = "text-sm font-semibold text-slate-700";

    return (
        <div className="relative bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto py-16 px-6">
                <Reveal>
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold tracking-widest text-slate-600 uppercase shadow-sm">
                            Let&apos;s talk
                        </span>
                        <h2 className="text-4xl md:text-5xl text-slate-800 font-black tracking-tight mt-4 mb-3">
                            Get In Touch
                        </h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto rounded-full"></div>
                        <p className="text-slate-500 mt-4">
                            Have a project or opportunity? I&apos;d love to hear
                            from you.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    <Reveal delay={100} className="lg:col-span-2">
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
                                <h3 className="text-xl font-bold tracking-tight">
                                    Contact Information
                                </h3>
                                <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                                    I&apos;m always up for new opportunities —
                                    freelance, full-time, or just chatting about
                                    cool web stuff.
                                </p>
                            </div>

                            <div className="p-6 space-y-4">
                                <a
                                    href="mailto:jeszapanta9@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition">
                                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                                            Email
                                        </p>
                                        <p className="text-sm font-medium text-slate-900 truncate">
                                            jeszapanta9@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="tel:+639452212502"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition">
                                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                                            Phone
                                        </p>
                                        <p className="text-sm font-medium text-slate-900">
                                            +63 945 221 2502
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-3 p-3 rounded-xl">
                                    <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                                            Location
                                        </p>
                                        <p className="text-sm font-medium text-slate-900">
                                            Tangub City, Philippines
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-2 flex gap-2">
                                    <a
                                        href="https://github.com/JesselZapanta"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition">
                                        <Github className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="mailto:jeszapanta9@gmail.com"
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </div>

                                <a
                                    href="./cv_jessel_zapanta.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center justify-center gap-2 w-full h-11 rounded-full bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                    Download CV
                                    <ExternalLinkIcon />
                                </a>

                                <p className="text-xs text-center text-slate-400 pt-2">
                                    Let&apos;s team up and build something
                                    awesome!
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200} className="lg:col-span-3">
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8">
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-6">
                                Send an Email
                            </h3>

                            {error && (
                                <div className="mb-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="mb-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-700">
                                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                                    Message sent! I&apos;ll reply at jeszapanta9@gmail.com soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className={labelBase}>
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Your name"
                                            className={inputBase}
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className={labelBase}>
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className={inputBase}
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className={labelBase}>
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="Project inquiry, opportunity, etc."
                                        className={inputBase}
                                        value={formData.subject}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                subject: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className={labelBase}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        placeholder="Tell me about your project..."
                                        className="flex min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                message: e.target.value,
                                            })
                                        }></textarea>
                                </div>

                                <button
                                    className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold bg-slate-900 text-white h-11 rounded-full px-8 shadow-md hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                                    type="submit"
                                    disabled={processing}>
                                    {processing ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-center text-slate-400">
                                    Powered by Web3Forms — no Gmail reconnect needed
                                </p>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

function ExternalLinkIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}
