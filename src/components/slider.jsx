import React, { useEffect, useRef, useState } from "react";
import { image1, image2, image3, image4, image5 } from "../assets";
import Image from "./Image";

const Slider = () => {
  const images = [image1, image2, image3, image4, image5];
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null); // To store the interval ID
  const [isScrolling, setIsScrolling] = useState(true); // State to track scrolling

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainer) {
          scrollAmount += 1;
          scrollContainer.scrollLeft = scrollAmount;

          // Smoothly transition back to the start when reaching the end
          if (
            scrollAmount >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0; // Reset scroll position
            scrollAmount = 0;
          }
        }
      }, 30); // Adjust the interval for speed
    };

    const stopScrolling = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };

    // Start or stop scrolling based on the state
    if (isScrolling) {
      startScrolling();
    } else {
      stopScrolling();
    }

    // Cleanup on unmount
    return () => {
      stopScrolling();
    };
  }, [isScrolling]); // Re-run effect when `isScrolling` changes

  const toggleScrolling = () => {
    setIsScrolling((prev) => !prev); // Toggle the scrolling state
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 flex gap-x-8 items-center justify-center overflow-x-auto scrollbar-hidden animate-fade-in mx-5"
      style={{ whiteSpace: "nowrap" }}
      onMouseDown={toggleScrolling} // Toggle on click
      onTouchStart={toggleScrolling} // Toggle on touch
    >
      {/* Duplicate the images for smooth looping */}
      {[...images, ...images].map((image, index) => (
        <Image key={index} url={image} />
      ))}
    </div>
  );
};

export default Slider;