import React from "react";
import Image from "next/image";

interface circularImageProps {
    imageSrc: string;
    altText: string;
    width: number;
    height: number;
}

const circularImage: React.FC<circularImageProps> = ({ imageSrc, altText, width, height }) => {
    return (
        <div className="rounded-full overflow-hidden border-4 border-gray-300" style={{ width, height }}>
            <Image
                src={imageSrc}
                alt={altText}
                width={width} //Default 192
                height={height} //Default 192
                objectFit="cover"
            />
        </div>
    )
};

export default circularImage;
