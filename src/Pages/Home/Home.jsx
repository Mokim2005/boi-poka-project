import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  const data = useLoaderData();
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 80, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1 }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(btnRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6 },
      '-=0.3'
    );
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={heroRef} className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="glass-container max-w-4xl text-center">
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Boi Poka
            </span>
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Discover your next favorite book. Explore thousands of stories waiting for you.
          </p>
          <motion.button
            ref={btnRef}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(236, 72, 153, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="glass-btn px-10 py-4 text-lg font-semibold text-white rounded-full"
          >
            Start Exploring
          </motion.button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10"
        >
          <FaArrowDown className="text-white/50 text-2xl animate-bounce" />
        </motion.div>
      </div>

      <div className="relative z-10 glass-section py-20">
        <Banner></Banner>
        <Books data={data}></Books>
      </div>

      <style>{`
        .glass-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          padding: 60px 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
        }

        .glass-btn {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(139, 92, 246, 0.6));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px -5px rgba(236, 72, 153, 0.4);
          transition: all 0.3s ease;
        }

        .glass-btn:hover {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.8));
        }

        .glass-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Home;