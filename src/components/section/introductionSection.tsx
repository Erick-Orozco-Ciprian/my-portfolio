import React from "react";

import About from "./aboutSection";
import Skills from "./skillsSection";
import Portfolio from "./portfolioSection";

interface AboutSectionProps {
    id?: string; // Allow id to be passed
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
    return (
        <section>
            <section>
                <About />
            </section>
            <section id={id} className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
                {/* Left Side: Profile Picture */}
                <Skills />

                {/* Right Side: Feature Section */}
                <Portfolio />
            </section>
        </section>
    );
};

export default AboutSection;
