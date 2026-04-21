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
      className="fixed inset-x-0 top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-white/10"
    >
      {/* 🔥 CENTERED CONTENT */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
              Boi Poka 📚
            </span>
          </Link>
        </div>

        {/* Center Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
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

        {/* Right */}
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition">
          Sign In
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden w-full bg-gray-900 border-t border-white/10"
          >
            {/* SAME CENTER WIDTH */}
            <div className="max-w-7xl mx-auto px-4 py-4">
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link onClick={() => setOpen(false)} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setOpen(false)} to="/about">
                    About
                  </Link>
                </li>

                <button className="mt-2 w-full py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                  Sign In
                </button>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navber;