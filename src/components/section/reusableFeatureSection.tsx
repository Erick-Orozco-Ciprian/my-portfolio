import React from "react";

interface ReusableSectionProps {
    title: string;
    description: string;
    buttonText: string;
}

const ReusableSection: React.FC<ReusableSectionProps> = ({
    title,
    description,
    buttonText,
}) => {
    return (
        <section className="flex flex-col items-center text-center p-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
                {buttonText}
            </button>
        </section>
    );
};

export default ReusableSection;
