import React from "react";
import Image from "./Image";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <Link to="/flyers">
        <img src={logo} className="w-full max-w-[520px] rounded-lg animate-grow" />
      </Link>
    </div>
  );
};

export default Logo;
