import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      
      {/* 404 Text */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-gray-800">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default ErrorPage;