import Image from "next/image";
import Link from "next/link";

import Layout from "../layouts/layout";

export default function About() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Profile Picture */}
        <div className="flex-shrink-0">
          <Image
            src="/images/profilePicture.jpg"
            alt="Erick Orozco"
            width={300}
            height={300}
            className="rounded-full border-4 border-[#E07A5F] shadow-lg object-cover"
          />
        </div>

        {/* Right: Intro */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D405B] mb-4">Hi, I’m Erick</h1>
          <p className="text-[#3D405B] mb-6 leading-relaxed text-lg md:text-xl">
            Born and raised on Oahu most recently graduating with a Bachelor’s Degree in Computer Science from UH Manoa.
            Experience in multiple programming languages including Java, Python, and C++.
            Have had the fortunate opportunity to work in projects ranging from object detection models for wildlife conservation,
            web development, software development and teaching STEM/CompSci curriculum to K-12 students.
            Proven leadership in coordinating events and mentorship programs with passion in technology, education,
            and community impact.
          </p>

          <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
            <span className="px-3 py-1 text-sm bg-[#E07A5F] text-white rounded-full shadow-sm">
              Web Development
            </span>
            <span className="px-3 py-1 text-sm bg-[#E07A5F] text-white rounded-full shadow-sm">
              Cybersecurity
            </span>
            <span className="px-3 py-1 text-sm bg-[#E07A5F] text-white rounded-full shadow-sm">
              Machine Learning
            </span>
            <span className="px-3 py-1 text-sm bg-[#E07A5F] text-white rounded-full shadow-sm">
              React / Next.js
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[#F2CC8F] text-[#3D405B] font-semibold rounded-lg shadow hover:bg-[#E7B47F] transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#E07A5F] text-white font-semibold rounded-lg shadow hover:bg-[#d66c4e] transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Optional: Short Bio / Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-[#FAF0E6] rounded-2xl shadow-md text-[#3D405B]">
        <h2 className="text-3xl font-bold mb-4">A Bit About Me</h2>
        <p className="leading-relaxed mb-4">
          I started my journey in technology with a curiosity for how things work under the hood.
          Over time, I discovered cybersecurity and web development, blending both to create secure
          and user-friendly applications. I enjoy learning new technologies, solving challenging
          problems, and sharing knowledge with the community.
        </p>
        <p className="leading-relaxed">
          Outside of coding, I enjoy reading, exploring nature, and experimenting with digital
          art. My goal is to craft applications that not only function well but also make users
          feel comfortable and engaged.
        </p>
      </section>
    </Layout>
  );
}
