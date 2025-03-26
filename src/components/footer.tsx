import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Left Section - Logo or Site Name */}
                <div className="text-lg font-semibold">YourSite</div>

                {/* Middle Section - Links */}
                <nav className="flex space-x-6 my-4 md:my-0">
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </nav>

                {/* Right Section - Social Icons */}
                <div className="flex space-x-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-xl hover:text-gray-400" />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-xl hover:text-gray-400" />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-xl hover:text-gray-400" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-4">
                © {new Date().getFullYear()} YourSite. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
