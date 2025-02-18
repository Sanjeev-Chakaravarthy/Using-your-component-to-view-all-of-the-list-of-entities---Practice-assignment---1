// write the book component code here
import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <h2 className="book-title">{name}</h2>
      <p className="book-genre"><strong>Genre:</strong> {genre}</p>
      <p className="book-author"><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default BookCard;
