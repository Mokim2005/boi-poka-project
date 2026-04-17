import React from "react";
import { motion } from "framer-motion";
import Book from "../Book/Book";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Books = ({ data }) => {
  return (
    <div className="py-16 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Popular Books
        </span>
      </motion.h1>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {data.map((book) => (
          <motion.div key={book.bookId} variants={itemVariants}>
            <Book book={book}></Book>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .glass-section {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default Books;