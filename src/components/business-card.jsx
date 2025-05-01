import React from "react";
import { Link } from "react-router-dom";

const BusinessCard = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-lg animate-grow">
        <div className="w-24 h-24 bg-gray-700 rounded-full mb-4"></div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">LK Tours</h2>
        <p className="text-gray-600 text-center mb-4">
          Explore the world with us! Discover amazing destinations and
          unforgettable experiences.
        </p>
        <Link to={"/flyers"}>
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300">
            Our Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
