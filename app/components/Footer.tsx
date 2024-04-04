import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLocation, faPhone, faEnvelope, faHome, faContactBook, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-red-800 p-14">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0"> {/* Added mb-8 for height gap */}
            <Link href="/" className="flex items-center">
              <img
                src="c"
                className="h-8 me-3 text-white"
                alt="College Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-8 text-lg font-semibold text-gray-900 uppercase dark:text-white"> {/* Increased font size */}
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-8">
                  <Link href="/" className="hover:opacity-75 flex items-center">
                    <FontAwesomeIcon icon={faHome} className="text-gray-300 mr-2 text-lg" />
                    Home
                  </Link>
                </li>
                <li className="mb-8">
                  <Link href="" className="hover:opacity-75 flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-300 mr-2 text-lg" />
                    All Events
                  </Link>
                </li>
                <li className="mb-8">
                  <Link href="" className="hover:opacity-75 flex items-center">
                    <FontAwesomeIcon icon={faContactBook} className="text-gray-300 mr-2 text-lg" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-8 text-lg font-semibold text-gray-900 uppercase dark:text-white"> {/* Increased font size */}
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-8">
                  <Link href="#" className="hover:opacity-75 flex items-center">
                    <FontAwesomeIcon icon={faFacebook} className="text-gray-300 mr-2 text-lg" />
                    FaceBook
                  </Link>
                </li>
                <li className="mb-8">
                  <Link href="#" className="hover:opacity-75 flex items-center">
                    <FontAwesomeIcon icon={faYoutube} className="text-gray-300 mr-2 text-lg" />
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-8 text-lg font-semibold text-gray-900 uppercase dark:text-white"> {/* Increased font size */}
                Contact Us
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-8">
                  <Link href="" className="hover:opacity-75 flex items-center">
                    <FontAwesomeIcon icon={faLocation} className="text-gray-300 mr-2 text-lg" />
                    Gangabu kathmandu, Nepal
                  </Link>
                </li>
                <li className="mb-8">
                  <Link href="" className="hover:opacity-75 flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-300 mr-2 text-lg" />
                    123-456-7890 / 9868333222
                  </Link>
                </li>
                <li  >
                  <Link href="" className="hover:opacity-75 flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-300 mr-2 text-lg" />
                    college@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white  -700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center"> {/* Centered the text */}
          <span className="text-sm text-white sm:text-center dark:text-white">
            © 2024{" "}
            <Link href="/" className="hover:opacity-75">
              
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
