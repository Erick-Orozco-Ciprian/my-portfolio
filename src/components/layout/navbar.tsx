import '../../styles/pages/AboutMe.module.css';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="text-2xl font-bold text-blue-600">My Portfolio</Link>
                    <ul className="flex space-x-4">
                        <li><Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
                        <li><Link href="/skills" className="text-gray-700 hover:text-blue-600">Skills</Link></li>
                        <li><Link href="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link></li>
                        <li><Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link></li>
                        <li><Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;