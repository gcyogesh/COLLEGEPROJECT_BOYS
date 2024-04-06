import React from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarked, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
    return (
        <header className="bg-red-800 text-white py-2 ">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
                {/* Left side with address and phone number */}
                <div className="flex items-center space-x-8">
                    <div className='flex items-center gap-8'>
                        <FontAwesomeIcon icon={faPhone} className="text-xl" />
                        <p className="text-sm">123-456-7890 / 9868333222</p>
                        <FontAwesomeIcon icon={faMapMarked} className="text-xl" />
                        <p className="text-sm">Gangabu kathmandu, Nepal</p>
                    </div>
                </div>
                {/* Apply Now button */}
                {/* Apply Now button */}
                <button className="hidden md:block relative  items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Apply Now</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-2 transition-opacity duration-300 group-hover:opacity-100 text-black" />
                </button>

                {/* Right side with social media icons */}
                <div className="flex items-center space-x">
                    <div className="flex items-center gap-5 mr-2">
                        <Link href='#'>
                            <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-green-600" />
                        </Link>
                        <Link href='#'>
                            <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-green-600" />
                        </Link>
                        <Link href='#'>
                            <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-green-600" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopNav;
