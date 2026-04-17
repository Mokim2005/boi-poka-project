import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((book) => book.bookId === bookId);

  console.log(singleData);
  return (
    <div className="">
      <img src={singleData.image} alt="" />
      <h1>{singleData.bookName}</h1>
      <div className="flex gap-2">
        <button className="btn btn-secondary">Mark as Read</button>
        <button className="btn btn-accent">Add to Wish List</button>
      </div>
    </div>
  );
};

export default BookDetails;
