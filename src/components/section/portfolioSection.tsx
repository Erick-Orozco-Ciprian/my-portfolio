import React from "react";

import ReusableSection from "./reusableFeatureSection";

const PortfolioSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
            {/* Right Side: Feature Section */}
            <ReusableSection
                title="Portfolio"
                description="Portfolio Text"
                buttonText="Detailed View of Portfolio ->"
            />
        </section>
    );
};

export default PortfolioSection;
