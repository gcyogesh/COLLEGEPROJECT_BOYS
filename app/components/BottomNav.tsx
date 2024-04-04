'use client'
import React, { useState } from 'react';
import Link from 'next/link';


const BottomNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };
    

    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-100 dark:border-gray-700 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="I" className="h-8" alt="College Ko Logo" />

                </Link>
                
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-red-600 transition-colors duration-300"
                    aria-controls="navbar-solid-bg"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    style={{ borderColor: 'red', borderWidth: '3px' }}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5 transition-colors duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4  bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-red-200 md:dark:bg-transparent dark:border-gray-700">

                    <li>
                            <Link href="/" className=" w-full  block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                        </li>

                        <li>
                            <Link href="academics" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Academics</Link>
                        </li>

                        <li>
                            <Link href="gallery" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Gallery</Link>
                        </li>

                        <li>
                            <Link href="about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>

                        <li>
                            <Link href="notices" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Notices</Link>
                        </li>
        
                        <li>
                            <Link href="blogs" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blogs</Link>
                        </li>

                        <li>
                            <Link href="contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default BottomNav;
