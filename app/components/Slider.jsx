'use client'


import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState();

  useEffect(() => {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      // Retrieve the current slide from localStorage
      const storedSlide = localStorage.getItem('currentSlide');
      setCurrentSlide(storedSlide ? parseInt(storedSlide) : 0);
    }
  }, []);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  useEffect(() => {
    // Auto slide change every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const carouselWrapperStyle = {
    // height: '700px', // Default height for all screens
    // overflow: 'hidden',
    // position: 'relative',
    // '@media (max-width: 768px)': {  // Adjust breakpoint as needed for mobile
    //   height: '300px', // Set a different height for mobile (adjust as needed)
    // },
  };

  const imageStyle = {
    objectFit: 'cover', // Ensures images fill the container while maintaining aspect ratio
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden md:h-96" style={carouselWrapperStyle}>
        {/* Item 1 */}
        <div className={`duration-700 ease-in-out ${currentSlide === 0 ? 'visible' : 'invisible'}`} >
          <img
            src="https://images.pexels.com/photos/18867922/pexels-photo-18867922/free-photo-of-kyoto-imperial-palace-garden-bridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy-load"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 1"
            style={imageStyle}
           
          />
        </div>
        {/* Item 2 */}
        <div className={`duration-700 ease-in-out ${currentSlide === 1 ? 'visible' : 'invisible'}`} >
          <img
            src="https://images.pexels.com/photos/19791355/pexels-photo-19791355/free-photo-of-a-close-up-of-green-succulents-with-the-words-succulents.jpeg?auto=compress&cs=tinysrgb&w=600&lazy-load"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 2"
            style={imageStyle}
           
          />
        </div>
        {/* Item 3 */}
        <div className={`duration-700 ease-in-out ${currentSlide === 2 ? 'visible' : 'invisible'}`} >
          <img
            src="https://images.pexels.com/photos/16774962/pexels-photo-16774962/free-photo-of-couple-making-heart-shape-on-coast-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy-load"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
            style={imageStyle}
           
          />
        </div>
        {/* Item 4 */}
        <div className={`duration-700 ease-in-out ${currentSlide === 3 ? 'visible' : 'invisible'}`} >
          <img
            src="https://images.pexels.com/photos/15625357/pexels-photo-15625357/free-photo-of-white-flower-against-purple-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 4"
            style={imageStyle}
           
          />
        </div>
        {/* Item 5 */}
        <div className={`duration-700 ease-in-out ${currentSlide === 4 ? 'visible' : 'invisible'}`} >
          <img
            src="https://images.pexels.com/photos/16774962/pexels-photo-16774962/free-photo-of-couple-making-heart-shape-on-coast-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 5"
            style={imageStyle}
           
          />
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-red-500 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-red-500 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${currentSlide === 0 ? 'bg-black' : 'bg-gray-400'}`}
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to={0}
        />
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${currentSlide === 1 ? 'bg-black' : 'bg-gray-400'}`}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to={1}
        />
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${currentSlide === 2 ? 'bg-black' : 'bg-gray-400'}`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to={2}
        />
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${currentSlide === 3 ? 'bg-black' : 'bg-gray-400'}`}
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to={3}
        />
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${currentSlide === 4 ? 'bg-black' : 'bg-gray-400'}`}
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to={4}
        />
      </div>
    </div>
  );
};

export default Slider;


