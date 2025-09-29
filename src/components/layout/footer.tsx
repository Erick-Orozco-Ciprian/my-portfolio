import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMedium } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#3D405B] text-[#FAF9F6] py-10 mt-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Logo / Site Name */}
                <div className="text-lg font-bold text-[#E07A5F]">
                    Erick&apos;s Portfolio
                </div>

                {/* Middle: Copyright */}
                <div className="text-center text-[#F2CC8F] text-sm md:text-base mt-4 md:mt-0">
                    © {new Date().getFullYear()} Erick&apos;s Portfolio. All rights reserved.
                </div>

                {/* Right: Social / Contact Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a
                        href="https://github.com/Erick-Orozco-Ciprian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F2CC8F] transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/erick-orozco-ciprian-9a7aa5227/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F2CC8F] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
