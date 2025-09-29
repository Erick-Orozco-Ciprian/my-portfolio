import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import type { projectsData } from "../../data/projects";

interface CarouselProps {
    projects: typeof projectsData;
}

const ProjectCarousel: React.FC<CarouselProps> = ({ projects }) => {
    const [current, setCurrent] = useState(0);

    if (projects.length === 0) return null;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <div className="max-w-6xl mx-auto my-10 relative">
            {/* Carousel content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={projects[current].slug}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#F2CC8F] rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
                >
                    {projects[current].images?.[0] && (
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={projects[current].images[0]}
                                alt={projects[current].title}
                                width={400}
                                height={300}
                                className="object-cover w-full h-64 md:h-72"
                            />
                        </div>
                    )}

                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#3D405B] mb-2">
                            {projects[current].title}
                        </h3>
                        <p className="text-[#3D405B] opacity-90 mb-4">
                            {projects[current].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {projects[current].tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs bg-[#E07A5F] text-white rounded-full shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link
                            href={`/projects/${projects[current].slug}`}
                            className="text-[#3D405B]/80 hover:text-[#3D405F] underline underline-offset-4"
                        >
                            View Project →
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {projects.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#E07A5F] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#d66c4e] transition"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#E07A5F] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#d66c4e] transition"
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
};

export default ProjectCarousel;
