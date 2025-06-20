import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";


export default function Contact() {
    const [processing, setProcessing] = useState(false);
    const [errror, setError] = useState(false);
    const [formData, setFormData] = useState({
        subject: "",
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);

        const { subject, name, email, message } = formData;

        if (!subject || !name || !email || !message) {
            setError(true);
            setProcessing(false);
            return;
        }
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert("Email successfully sent!");
                    console.log("Email successfully sent!", result.text);
                    setFormData({
                        subject: "",
                        name: "",
                        email: "",
                        message: "",
                    });
                    setProcessing(false);
                    setError(false);
                },
                (error) => {
                    console.error("Email failed to send:", error.text);
                    setProcessing(false);
                }
            );
    };

    return (
        <div className="bg-gray-50">
            <div id="contact" className="max-w-7xl mx-auto py-16 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-gray-700 font-bold mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-indigo-400 mx-auto"></div>
                    <p className="text-gray-500 my-4">
                        Have a project or opportunity you'd like to discuss?{" "}
                        <br /> Don't hesitate to get in touch.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold mb-6">
                            Contact Information
                        </h3>
                        <div className="p-8 overflow-hidden border border-slate-200 bg-white rounded-lg shadow-md">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                                    <Mail className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <p className="text-gray-500">
                                        jeszapanta9@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                                    <Phone className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Phone Number
                                    </h4>
                                    <p className="text-gray-500">
                                        +63-945-221-2502
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-500 leading-relaxed">
                                I'm always up for new opportunities—whether it's
                                a freelance project, a full-time role, or just
                                chatting about cool web stuff.
                                <br />
                                <br />
                                Let's team up and build something awesome!
                            </p>

                            <div className="mt-8">
                                <a
                                    href="./cv_jessel_zapanta.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold bg-indigo-500 text-gray-100 h-11 rounded-md px-8 w-full cursor-pointer">
                                        Download CV
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-6">
                            Send an Email
                        </h3>
                        <form>
                            <div className="p-8 overflow-hidden border border-slate-200 bg-white rounded-lg shadow-md">
                                <div className="p-6 pt-0">
                                    <div className="mb-4">
                                        <label
                                            className="text-sm font-medium leading-none"
                                            htmlFor="subject">
                                            Subject
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 mt-2 md:text-sm"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    subject: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="text-sm font-medium leading-none"
                                            htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 mt-2 md:text-sm"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="text-sm font-medium leading-none"
                                            htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 mt-2 md:text-sm"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="text-sm font-medium leading-none"
                                            htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            className="flex min-h-[80px] w-full rounded-md border border-slate-200 px-3 py-2 mt-2 md:text-sm"
                                            id="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }></textarea>
                                    </div>
                                    <div>
                                        {errror && (
                                            <div className="text-red-500">
                                                Please fill in all fields.
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-slate-900 text-gray-200 h-11 rounded-md px-8 w-full sm:w-auto cursor-pointer"
                                            type="submit"
                                            onClick={handleSubmit}
                                            disabled={processing}>
                                            {processing
                                                ? "Sending..."
                                                : "Submit"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
