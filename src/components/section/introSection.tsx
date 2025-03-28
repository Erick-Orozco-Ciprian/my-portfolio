"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

const IntroSection = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen w-full text-center bg-gray-900 text-white">
            <motion.h1
                className="text-4xl md:text-6xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Hi There!
            </motion.h1>

            <motion.h1
                className="text-4xl md:text-6xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
            >
                I’m{" "}
                <span className="text-blue-400 font-bold">Erick</span>, nice to meet you.
            </motion.h1>

            <motion.p
                className="mt-10 text-lg md:text-2xl text-gray-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4 }}
            >
                View my work 🙂
            </motion.p>

            <motion.button
                onClick={scrollToAbout}
                className="mt-4 p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.1 }}
            >
                <ChevronDownIcon className="w-10 h-10" />
            </motion.button>
        </section>
    );
};

export default IntroSection;
