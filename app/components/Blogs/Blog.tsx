import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


type BlogProps = {
    image: string;
    title: string;
    excerpt: string;
    link: string;
};

const Blog: React.FC<BlogProps> = ({ image, title, excerpt, link }) => {
    return (
        <div className="wrapper">
            <div className="container flex flex-col gap-4 mt-10">
                <div className="row">
                    <img src={image} alt="featured-image" className="featured-image rounded-3xl" />
                </div>
                <div className="row">
                    <h2 className="blog-title text-xl font-bold">{title}</h2>
                </div>
                <div className="row">
                    <p className="blog-excerpt text-gray-500">{excerpt}...</p>
                </div>
                <div className="row mt-4">
                    <Link href={link} className="px-4 py-4 text-center bg-blue-900 text-white hover:bg-blue-950 font-semibold text-lg rounded-sm">
                    
                            Read More
                            <FontAwesomeIcon className=' ml-2' icon={faArrowRight}/>
                    
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
