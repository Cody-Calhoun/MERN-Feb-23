import React from "react";

const Display = ({movieTitle, genre, releaseYear, ticketsSold}) => {
  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">{movieTitle}</h3>
        <p className="card-text">Genre: {genre}</p>
        <p className="card-text">Release Year: {releaseYear}</p>
        <p className="card-text">Tickets Sold: {ticketsSold}</p>
      </div>
    </div>
  );
};

export default Display;
