import React from "react";

import ProfilePicture from "../ui/circularImage";

import ReusableSection from "./reusableFeatureSection";

const AboutSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
            {/* Left Side: Profile Picture */}
            <ProfilePicture imageSrc="/images/profilePicture.jpg" altText="My Profile Picture" width={384} height={384} />

            {/* Right Side: Feature Section */}
            <ReusableSection
                title="About Me"
                description="I'm a passionate developer building innovative projects."
                buttonText="View My Work"
            />
        </section>
    );
};

export default AboutSection;
