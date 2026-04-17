import React from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div className="text-center sm:text-left">
          <Link to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
              Boi Poka 📚
            </span>
          </Link>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Your gateway to endless stories. Discover, read, and explore thousands of books.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link className="hover:text-pink-400 transition" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-pink-400 transition" to="/about">
                About
              </Link>
            </li>
            <li>
              <span className="hover:text-pink-400 transition cursor-pointer">
                Books
              </span>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4">Categories</h3>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-pink-400 transition cursor-pointer">Fiction</li>
            <li className="hover:text-pink-400 transition cursor-pointer">Non-Fiction</li>
            <li className="hover:text-pink-400 transition cursor-pointer">Sci-Fi</li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <div className="flex justify-center sm:justify-start gap-4 text-xl">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-pink-500/20 hover:text-pink-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-pink-500/20 hover:text-pink-400 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-pink-500/20 hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-pink-500/20 hover:text-pink-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 <span className="text-white">Boi Poka</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;