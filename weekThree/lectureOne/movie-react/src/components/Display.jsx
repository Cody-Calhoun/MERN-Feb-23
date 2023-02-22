import React, {useState} from 'react'

const Display = ({movieList}) => {
  return (
    <div className="col-4 offset-2">
    {
        movieList.map((movie, idx) => (
                <div className="card" key={idx}>
                    <div className="card-body">
                        <h3 className="card-title">{movie.movieTitle}</h3>
                        <p className="card-text">Genre: {movie.genre}</p>
                        <p className="card-text">Release Year: {movie.releaseYear}</p>
                        <p className="card-text">Tickets Sold: {movie.ticketsSold}</p>
                    </div>
                </div>
            )
        )
    }
</div>
  )
}

export default Display