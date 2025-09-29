import Link from "next/link";

const AboutPreview = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 bg-[#FAF9F6] rounded-2xl shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-[#3D405B] mb-4">About Me</h2>
            <p className="text-[#3D405B] mb-4">
                I’m a cybersecurity student and web developer passionate about building secure, user-friendly applications. I enjoy exploring new technologies and sharing my projects.
            </p>
            <ul className="list-disc list-inside text-[#3D405B] mb-6">
                <li>Web development with React, Next.js, and TailwindCSS</li>
                <li>Cybersecurity research and hands-on projects</li>
                <li>Open source contributions and portfolio projects</li>
            </ul>
            <Link
                href="/about"
                className="px-6 py-2 rounded-lg bg-[#E07A5F] text-white hover:bg-[#D85B46] transition"
            >
                Learn More
            </Link>
        </section>
    );
};

export default AboutPreview;
