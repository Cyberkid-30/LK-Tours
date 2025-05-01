import React from "react";

const Image = ({ url }) => {
  return (
    <img src={url} className="size-full md:w-[35%] md:h-auto object-contain" />
  );
};

export default Image;
