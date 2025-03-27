import React from "react";

import ReusableSection from "./reusableFeatureSection";

const SkillsSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
            {/* Right Side: Feature Section */}
            <ReusableSection
                title="Skills"
                description="Skills"
                buttonText="Detailed View of Skills ->"
            />
        </section>
    );
};

export default SkillsSection;
