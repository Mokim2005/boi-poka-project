import React, { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-16">
          
          {/* Left */}
          <div className="flex items-center gap-3">
            
            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white text-xl"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                Boi Poka 📚
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-8 text-white font-medium">
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

          {/* Right */}
          <div>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-gray-900 border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 text-white">
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  className="hover:text-pink-400 transition"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  className="hover:text-pink-400 transition"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <button className="mt-2 w-full py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                Sign In
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navber;