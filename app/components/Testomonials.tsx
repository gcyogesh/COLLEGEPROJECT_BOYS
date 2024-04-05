'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Testomonials = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-bold   text-gray-900 mb-12 text-center">
            What Students Say
          </h1>
          <div className="flex flex-wrap justify-center -m-4">
            <div className="p-5 md:w-5/12 w-full">
              <div className="h-full bg-red-800 p-8 rounded min-h-96">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-white mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6 text-white">
                  We've been trying to put together a functional website since I began
                  my practice in April of 2012. I am happy to say we finally hired the
                  Creative Solutions team and they've worked closely with us
                  throughout the process, staying on task, on target, and on budget. I
                  also appreciate their quick and courteous responses. I highly
                  recommend their service! La hero hai 
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://source.unsplash.com/featured?person"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Ram Parsad</span>
                    <span className="text-white text-sm">
                      BBS
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-5 md:w-5/12 w-full">
              <div className="h-full bg-red-800 p-8 rounded min-h-96">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-white mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6 text-white">
                  I am really impressed by the quality of services I received from
                  Creative Solutions Solutions. You were right on schedule, charged
                  reasonable prices, were professional and courteous in dealings, and
                  delivered items well before time. I have got a good e-commerce site
                  for my products. My revenue has increased because of Creative
                  Solutions and I will definitely use your services again.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://source.unsplash.com/featured?user"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Mahesh Dhakal
                    </span>
                    <span className="text-white text-sm">
                      BBS
                    </span>
                  </span>
                </a>
              </div>
            </div>
            
          </div>
                <div className="text-center mt-9">
                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out">View All
                  <FontAwesomeIcon className=' ml-4' icon={faArrowRight}/>
                  </button>
                </div>
        </div>
      </section>
    </>
  );
};

export default Testomonials;
