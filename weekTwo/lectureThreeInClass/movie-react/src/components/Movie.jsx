import React, {useState} from 'react'

const Movie = () => {

    const [movieTitle, setMovieTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [releaseYear, setReleaseYear] = useState("")
    const [ticketsSold, setTicketsSold] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(movieTitle, genre, releaseYear, ticketsSold)
    }
    
  return (
    <div> 
        <div className="container">
            <div className="row">
                <form action="" className="form col-4 offset-2" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Movie Title:</label>
                        <input type="text" name="movieTitle" className="form-control" onChange={(e)=> setMovieTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label"> Genre: </label>
                        <input type="text" name="genre" className="form-control" onChange={(e) => setGenre(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Release Year:</label>
                        <input type="number" name="releaseYear" className="form-control" onChange={(e)=> setReleaseYear(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Tickets Sold:</label>
                        <input type="number" name="ticketsSold" className="form-control" onChange={(e) => setTicketsSold(e.target.value)} />
                    </div>
                    <button className="btn btn-primary">
                        Add Movie
                    </button>
                </form>
            </div>
        </div>
    </div>
)

}

export default Movie