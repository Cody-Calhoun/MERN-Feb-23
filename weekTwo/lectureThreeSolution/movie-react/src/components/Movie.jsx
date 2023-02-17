import React, {useState} from 'react'

const Movie = () => {
    const [movies, setMovies] = useState({
        movieTitle: "",
        genre: "",
        releaseYear: "",
        ticketsSold: ""
    })

    const [movieList, setMovieList] = useState([])

    const onChangeHandler = (e) => {
        setMovies({...movies,[e.target.name]: e.target.value
        })
    }

    const movieValidation = (e) => {
        let isValid = true
        if(movies.movieTitle.length < 3 || movies.genre.length < 3 || movies.releaseYear < 1900 || movies.ticketsSold < 3) {
            isValid = false
            console.log("There were errors")
            return isValid
        }
        console.log(isValid)
        return isValid
    }


    const submitHandler = (e) => {
        e.preventDefault()
        let isValid = movieValidation();
        if(isValid) {
            console.log("In submit handler")
            console.log(`Movie: ${JSON.stringify(movies)}`)
            setMovieList([...movieList, movies])
            setMovies({
                movieTitle: "",
                genre: "",
                releaseYear: "",
                ticketsSold: ""
            })
        }else{
            return isValid
        }
    }
    
  return (
    <div> 
        <div className="container">
            <div className="row">
                <form action="" className="form col-4 offset-2" onSubmit={submitHandler}>
                    <div className="form-group">
                    {
                        //ternary operator
                        movieTitle && movieTitle.length < 3 ? <p className="text-danger">Title must be at least 3 characters</p> : null
                    }
                        <label htmlFor="" className="form-label">Movie Title:</label>
                        <input type="text" name="movieTitle" className="form-control" onChange={onChangeHandler} value={movies.movieTitle} />
                    </div>
                    <div className="form-group">
                    {
                        //ternary operator
                        genre && genre.length < 3 ? <p className="text-danger">Genre must be at least 3 characters</p> : null
                    }
                        <label htmlFor="" className="form-label"> Genre: </label>
                        <input type="text" name="genre" className="form-control" onChange={onChangeHandler} value={movies.genre}/>
                        
                    </div>
                    <div className="form-group">
                    {
                        //ternary operator
                        releaseYear && releaseYear < 1900 ? <p className="text-danger">Release year must be after 1900</p> : null
                    }
                        <label htmlFor="" className="form-label">Release Year:</label>
                        <input type="number" name="releaseYear" className="form-control" onChange={onChangeHandler} value={movies.releaseYear}/>
                    </div>
                    <div className="form-group">
                    {
                        //ternary operator
                        movieTitle && ticketsSold < 3 ? <p className="text-danger">No way at least 3 people didn't see it. Must be more than 3.</p> : null
                    }
                        <label htmlFor="" className="form-label">Tickets Sold:</label>
                        <input type="number" name="ticketsSold" className="form-control" onChange={onChangeHandler} value={movies.ticketsSold}/>
                    </div>
                    <button className="btn btn-primary">
                        Add Movie
                    </button>
                </form>
                <div className="col-4 offest-2">
                    {
                        movieList.map((movie, idx) => (
                            <div key={idx}>
                            <p>Movie Title: {movie.movieTitle}</p>
                            <p>Genre: {movie.genre}</p>
                            <p>Release Year: {movie.releaseYear}</p>
                            <p>Tickets Sold: {movie.ticketsSold}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
)

}

export default Movie