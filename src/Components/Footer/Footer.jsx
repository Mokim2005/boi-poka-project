import React from "react";
import { Link } from "react-router";
import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="glass-footer py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <Link to='/' className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Boi Poka
              </span>
            </Link>
            <p className="text-white/60 mt-3 text-sm">
              Your gateway to endless stories. Discover, read, and explore thousands of books.
            </p>
          </div>
          
          <div className="text-center">
            <h6 className="text-white font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li><Link to='/' className="text-white/60 hover:text-pink-400 transition-colors">Home</Link></li>
              <li><Link to='/about' className="text-white/60 hover:text-pink-400 transition-colors">About</Link></li>
              <li><a className="text-white/60 hover:text-pink-400 transition-colors">Books</a></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h6 className="text-white font-semibold mb-4">Categories</h6>
            <ul className="space-y-2">
              <li><a className="text-white/60 hover:text-pink-400 transition-colors">Fiction</a></li>
              <li><a className="text-white/60 hover:text-pink-400 transition-colors">Non-Fiction</a></li>
              <li><a className="text-white/60 hover:text-pink-400 transition-colors">Sci-Fi</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h6 className="text-white font-semibold mb-4">Connect</h6>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="social-icon"><FaGithub /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaFacebook /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Boi Poka. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .glass-footer {
          background: rgba(26, 26, 46, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-icon {
          color: white/60;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          padding: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .social-icon:hover {
          color: #ec4899;
          background: rgba(236, 72, 153, 0.2);
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;