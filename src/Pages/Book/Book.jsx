import React from "react";
import { motion } from "framer-motion";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="w-full max-w-sm">
      <motion.div
        whileHover={{ 
          y: -10,
          boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.4)'
        }}
        className="glass-card card p-3 w-full shadow-lg"
      >
        <figure className="p-3 bg-white/10 w-full mx-auto rounded-xl">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="h-[150px] md:h-[170px] w-auto object-contain mx-auto" 
            src={book.image} 
            alt={book.bookName}
          />
        </figure>
        <div className="card-body text-white px-2 py-3">
          <div className="flex gap-2 flex-wrap justify-center mb-2">
            {book.tags.map((tag, idx) => (
              <span key={idx} className="badge-glass text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title text-base md:text-lg justify-center text-center">
            <span className="text-white">{book.bookName}</span>
          </h2>
          <div className="badge badge-secondary bg-purple-600 border-none text-xs">
            {book.yearOfPublishing}
          </div>
          <p className="text-white/70 text-sm text-center">By: {book.publisher}</p>
          <div className="border-t border-white/20 my-2"></div>
          <div className="card-actions justify-center flex-wrap gap-2">
            <div className="badge badge-outline text-white border-white/30 bg-white/10 text-xs">
              {book.category}
            </div>
            <div className="badge badge-outline text-white border-white/30 bg-white/10 flex items-center gap-1 text-xs">
              {book.rating}
              <FaStarHalfAlt className="text-yellow-400 text-xs" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Book;