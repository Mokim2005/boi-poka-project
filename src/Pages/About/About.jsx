import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            About BoiPoka 📚
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A platform built for book lovers where you can explore, share, and
            enjoy your reading journey.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Why BoiPoka?
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              BoiPoka is designed to connect readers with their favorite books.
              Whether you love novels, stories, or educational books, this
              platform helps you discover and track your reading journey in a
              simple and enjoyable way.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Our goal is to build a community where readers can explore new
              ideas, share opinions, and grow together through books.
            </p>
          </div>

          {/* Image / Illustration */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
              alt="Books"
              className="w-40 md:w-56 opacity-80"
            />
          </div>

        </div>

        {/* Features Section */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              📖 Explore Books
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Discover a wide range of books from different categories.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              ❤️ Save Favorites
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Keep track of your favorite books easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              🌍 Reading Community
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Connect with other readers and share your thoughts.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;