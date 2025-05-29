import React from "react";
import { image1, image2, image3, image4, image5, image6 } from "../assets";
import Image from "./Image";

const Slider = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="flex-1 flex flex-col">
      <div className="h-screen px-5 flex flex-col gap-y-8 items-center overflow-y-auto scrollbar-hidden animate-fade-in">
        {images.map((image, index) => (
          <Image key={index} url={image} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
