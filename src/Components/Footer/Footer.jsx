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
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
              Boi Poka 📚
            </span>
          </Link>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Your gateway to endless stories. Discover, read, and explore thousands of books.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
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
            <li className="hover:text-pink-400 cursor-pointer transition">
              Books
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-400 cursor-pointer transition">Fiction</li>
            <li className="hover:text-pink-400 cursor-pointer transition">Non-Fiction</li>
            <li className="hover:text-pink-400 cursor-pointer transition">Sci-Fi</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <div className="flex gap-4">
            {[FaGithub, FaTwitter, FaInstagram, FaFacebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-pink-500/20 
                           hover:text-pink-400 transition duration-300 
                           transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row 
                      justify-between items-center text-sm text-gray-500 gap-2">

        <p>
          © 2026 <span className="text-white font-medium">Boi Poka</span>. All rights reserved.
        </p>

        <div className="flex gap-4">
          <span className="hover:text-pink-400 cursor-pointer">Privacy</span>
          <span className="hover:text-pink-400 cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;