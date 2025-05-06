// src/components/Header.tsx
'use client'; // Needed for useState and useEffect

import React, {useEffect, useState} from 'react';
import Image from 'next/image'; // Use next/image for optimization

const navItems = [
    {name: 'Services', href: '#services'},
    {name: 'Works', href: '#works'},
    {name: 'Resume', href: '#resume'},
    {name: 'Skills', href: '#skills'},
    // { name: 'Testimonials', href: '#testimonials' }, // Was in original, uncomment if needed
    {name: 'Contact', href: '#contact'},
];

const Header: React.FC = () => {
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        // Function to update hash state
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        // Set initial hash
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        // Clean up listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []); // Empty dependency array ensures this runs only once on mount and cleanup on unmount

    return (
        <header
            className="flex items-center justify-between px-4 sm:px-8 pt-5 sticky top-0 z-50 bg-[#050f02] bg-opacity-90 backdrop-blur-sm"> {/* Added sticky/blur */}
            <div>
                {/* Use Link for the home page if it's a separate route, otherwise simple <a> */}
                <a href="/public">
                    <Image src="/images/m64.bmp" alt="M Logo" width={40} height={40} className="w-10 h-10"/>
                </a>
            </div>

            {/* Hide nav items on small screens, or implement a mobile menu */}
            <nav className="hidden md:flex items-center justify-between space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`font-bold hover:underline hover:text-green-500 hover:cursor-pointer transition-colors duration-200 ${
                            activeHash === item.href ? 'text-green-500' : 'text-gray-200'
                        }`}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>

            <div>
                <a
                    href="https://www.fiverr.com/mahmudula2000" // Keep as external link
                    target="_blank"
                    rel="noopener noreferrer" // Good practice for target="_blank"
                    className="gradient-button gradient-button-hover text-white px-6 py-2 rounded-full text-sm sm:px-8 sm:py-2 font-semibold transition-all duration-300"
                >
                    Hire Me
                </a>
            </div>
            {/* Add a Mobile Menu button here if needed */}
        </header>
    );
};

export default Header;