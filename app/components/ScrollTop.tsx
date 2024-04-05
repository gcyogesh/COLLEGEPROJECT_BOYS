'use client'

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const arrow = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY >= 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      {isVisible && (
        <button
          aria-label="arrow"
          className={`fixed bottom-6 ss:bottom-10 z-30 -right-full transition-all duration-500 shadow-2xl shadow-black bg-green-800 hover:bg-[#cdcdcd] active:p-[.45rem] p-2 rounded`}
          onClick={scrollToTop}
          ref={arrow}
        >
            <h1 className=" bg-blue-700">Ay ayo ay ohai a</h1>
          <FontAwesomeIcon className="text-xl active:text-lg text-black" icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
