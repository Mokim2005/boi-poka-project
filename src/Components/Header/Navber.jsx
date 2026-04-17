import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Navber = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 navbar glass-nav"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-purple-900/90 backdrop-blur-md rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            <Link to='/' className="p-3 text-white hover:bg-purple-700 rounded-lg">Home</Link>
            <Link to='/about' className="p-3 text-white hover:bg-purple-700 rounded-lg">
              About
            </Link>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl text-white font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Boi Poka
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/about' className="nav-link">
            About
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn-ghost px-4 py-2 text-white rounded-full text-sm font-semibold">
          Sign In
        </button>
      </div>

      <style>{`
        .glass-nav {
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-link {
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          background: rgba(139, 92, 246, 0.3);
          color: #e9d5ff;
        }
        
        .btn-ghost {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.3));
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .btn-ghost:hover {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.5), rgba(139, 92, 246, 0.5));
        }
      `}</style>
    </motion.nav>
  );
};

export default Navber;