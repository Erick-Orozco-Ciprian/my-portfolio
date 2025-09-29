"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const IntroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
            {/* Profile Picture */}
            <div className="flex-shrink-0 mb-8 md:mb-0">
                <Image
                    src="/images/profilePicture.jpg"
                    alt="Profile Picture"
                    width={250}
                    height={250}
                    className="rounded-full border-4 border-[#E07A5F] shadow-lg"
                />
            </div>

            {/* Greeting & Buttons */}
            <motion.div
                className="text-left max-w-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-[#3D405B] mb-4">
                    Hi, I’m <span className="text-[#E07A5F]">Erick</span> 👋
                </h1>
                <p className="text-lg text-[#3D405B] mb-6">
                    I’m a cybersecurity student and web developer passionate about building secure, user-friendly applications.
                </p>

                <div className="flex space-x-4">
                    <Link
                        href="/about"
                        className="px-5 py-2 rounded-lg bg-[#E07A5F] text-white hover:bg-[#D85B46] transition"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/projects"
                        className="px-5 py-2 rounded-lg bg-[#81B29A] text-white hover:bg-[#6A9C84] transition"
                    >
                        View Projects
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default IntroSection;
