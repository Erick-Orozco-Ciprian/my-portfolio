"use client";

import { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("Error sending message:", err);
        }
    };

    return (
        <section className="max-w-4xl mx-auto px-6 py-16 bg-[#E07A5F] rounded-2xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-6">
                Have a project or question? Send me a message and I&apos;ll get back to you!
            </p>

            {submitted && (
                <p className="bg-[#81B29A] text-white px-4 py-2 rounded mb-6">
                    Thanks! Your message has been sent.
                </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="p-3 rounded text-black"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="p-3 rounded text-black"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="p-3 rounded text-black"
                    rows={6}
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-[#3D405B] hover:bg-[#2E2A45] transition text-white"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
