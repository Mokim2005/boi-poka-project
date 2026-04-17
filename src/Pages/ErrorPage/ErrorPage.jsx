import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      
      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-lg w-full text-white">
        
        {/* 404 */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-wider">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-white/80">
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          
          <Link
            to="/"
            className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-white/40 rounded-lg hover:bg-white/20 transition"
          >
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
};

export default ErrorPage;