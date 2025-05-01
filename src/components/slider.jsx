import React, { useEffect, useRef, useState } from "react";
import { image1, image2, image3, image4, image5 } from "../assets";
import Image from "./Image";
import { LucideMouse } from "lucide-react";

const Slider = () => {
  const images = [image1, image2, image3, image4, image5];
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null); // To store the interval ID
  const [isScrolling, setIsScrolling] = useState(true); // State to track scrolling
  const scrollAmountRef = useRef(0); // Ref to track scroll amount persistently

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainer) {
          scrollAmountRef.current += 1;
          scrollContainer.scrollLeft = scrollAmountRef.current;

          // Smoothly transition back to the start when reaching the end
          if (
            scrollAmountRef.current >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0; // Reset scroll position
            scrollAmountRef.current = 0;
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
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Update scrollAmountRef to the current scrollLeft before toggling
      scrollAmountRef.current = scrollContainer.scrollLeft;
    }
    setIsScrolling((prev) => !prev); // Toggle the scrolling state
  };

  return (
    <div className="flex-1 flex flex-col justify-center">
      <div
        ref={scrollContainerRef}
        className="flex-1 flex gap-x-8 items-center justify-center overflow-x-auto scrollbar-hidden animate-fade-in mx-5"
        style={{ whiteSpace: "nowrap" }}
      >
        {/* Duplicate the images for smooth looping */}
        {[...images, ...images].map((image, index) => (
          <Image key={index} url={image} />
        ))}
      </div>
      {/* Button to toggle scrolling */}
      <button
        onClick={toggleScrolling}
        className="fixed size-10 top-2 right-2 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer"
      >
        <LucideMouse color="black" />
      </button>
    </div>
  );
};

export default Slider;
