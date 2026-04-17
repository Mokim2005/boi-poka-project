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
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-10 md:mb-12"
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7 max-w-7xl mx-auto"
      >
        {data.map((book) => (
          <motion.div key={book.bookId} variants={itemVariants} className="flex justify-center">
            <Book book={book}></Book>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Books;