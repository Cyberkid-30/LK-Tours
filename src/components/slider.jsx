import React, { useEffect, useRef } from "react";
import { image1, image2, image3, image4, image5 } from "../assets";
import Image from "./Image";

const Slider = () => {
  const images = [image1, image2, image3, image4, image5];
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null); // To store the interval ID

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

    // Start scrolling initially
    startScrolling();

    // Add event listeners for stopping and resuming scrolling
    const handleMouseDown = () => stopScrolling();
    const handleMouseUp = () => startScrolling();
    const handleTouchStart = () => stopScrolling();
    const handleTouchEnd = () => startScrolling();

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchend", handleTouchEnd);

    // Cleanup on unmount
    return () => {
      clearInterval(scrollIntervalRef.current);
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="flex flex-col gap-y-8 items-center overflow-x-auto scrollbar-hidden animate-fade-in md:flex-row md:gap-x-8 md:gap-y-0 mx-10"
      style={{ whiteSpace: "nowrap" }}
    >
      {/* Duplicate the images for smooth looping */}
      {[...images, ...images].map((image, index) => (
        <Image key={index} url={image} />
      ))}
    </div>
  );
};

export default Slider;
