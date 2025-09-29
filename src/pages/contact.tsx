import { useState } from "react";

import Layout from "../layouts/layout";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can call an API to send emails
    console.log("Form submitted", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-[#3D405B] mb-6 text-center">Get In Touch</h1>
        <p className="text-[#3D405B] mb-10 text-center">
          Feel free to drop me a message! Whether it’s a project collaboration, a question, or just to say hi, I’d love to hear from you.
        </p>

        {submitted ? (
          <div className="text-center bg-[#FAF0E6] p-8 rounded-2xl shadow-md text-[#3D405B]">
            <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
            <p>Your message has been sent. I’ll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#FAF0E6] p-8 rounded-2xl shadow-md flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-4 rounded-lg border border-[#E07A5F] text-[#3D405B]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 rounded-lg border border-[#E07A5F] text-[#3D405B]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-4 rounded-lg border border-[#E07A5F] text-[#3D405B] h-40 resize-none"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-[#E07A5F] text-white font-semibold rounded-lg shadow hover:bg-[#d66c4e] transition"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
}
