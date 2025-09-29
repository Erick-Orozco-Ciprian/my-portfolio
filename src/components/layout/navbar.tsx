import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#FAF9F6] shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    {/* Site Logo / Name */}
                    <Link href="/" className="text-2xl font-bold text-[#E07A5F]">
                        Erick&apos;s Portfolio
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                href="/about"
                                className="text-[#3D405B] hover:text-[#E07A5F] transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="text-[#3D405B] hover:text-[#E07A5F] transition-colors"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-[#3D405B] hover:text-[#E07A5F] transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
