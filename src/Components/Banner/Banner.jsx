import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import BookImg from '../../assets/books.jpg';

const Banner = () => {
  const bannerRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    
    tl.fromTo(imgRef.current,
      { opacity: 0, x: 100, scale: 0.8 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2 }
    )
    .fromTo(contentRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.8'
    );
  }, []);

  return (
    <div ref={bannerRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card hero-content flex-col lg:flex-row-reverse">
          <motion.div
            ref={imgRef}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-50"></div>
            <img
              src={BookImg}
              className="relative max-w-sm rounded-2xl shadow-2xl border border-white/20"
            />
          </motion.div>
          
          <div ref={contentRef} className="text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm uppercase tracking-widest text-pink-400 mb-2"
            >
              Welcome to Boi Poka
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold mb-6"
            >
              Your Gateway to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Endless Stories
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="py-6 text-white/70 text-lg"
            >
              Dive into a world of books. Find your next adventure, learn something new, 
              or simply lose yourself in a great story.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost px-8 py-3 text-white font-semibold rounded-full"
            >
              Browse Collection
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }

        .btn-ghost {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(139, 92, 246, 0.4));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .btn-ghost:hover {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(139, 92, 246, 0.6));
          box-shadow: 0 0 30px rgba(236, 72, 153, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Banner;