import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Navber = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-16">
          
          {/* Left - Logo + Mobile menu */}
          <div className="flex items-center gap-3">
            
            {/* Mobile menu */}
            <div className="lg:hidden">
              <details className="dropdown">
                <summary className="cursor-pointer text-white text-2xl">
                  ☰
                </summary>

                <ul className="mt-3 p-3 w-48 rounded-xl bg-gray-800 text-white shadow-lg space-y-2">
                  <li>
                    <Link to="/" className="block hover:text-pink-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="block hover:text-pink-400">
                      About
                    </Link>
                  </li>
                </ul>
              </details>
            </div>

            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                Boi Poka 📚
              </span>
            </Link>
          </div>

          {/* Center - Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6 text-white">
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
            </ul>
          </div>

          {/* Right - Button */}
          <div>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition">
              Sign In
            </button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navber;