import React, {useState} from 'react'
import Display from './Display'

const Movie = () => {

    // const [movieTitle, setMovieTitle] = useState("")
    // const [genre, setGenre] = useState("")
    // const [releaseYear, setReleaseYear] = useState("")
    // const [ticketsSold, setTicketsSold] = useState("")

    const [movies, setMovies] = useState({
        movieTitle: "",
        genre: "",
        releaseYear: "",
        ticketsSold: ""
    })

    const [movieList, setMovieList] = useState([])

    const movieValidation = (e) => {
        let isValid = true
        if (movies.movieTitle.length < 3 || movies.genre.length < 3 || movies.releaseYear < 1900 || movies.ticketsSold < 3) {
            isValid = false
            console.log("There is an error")
            return isValid
        }else{
            console.log("No error")
            return isValid
        }
    }
    
    const changeHandler = (e) => {
        setMovies({...movies, [e.target.name]: e.target.value})
        console.log(e.target.name)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // Co=pilot version
        // if(movieValidation()){
        //     console.log("Movie is valid")
        // }else{
        //     console.log("Movie is invalid")
        // }
        let isValid = movieValidation()
        if(isValid){
            console.log(`Movie: ${JSON.stringify(movies)}`)
            setMovieList([...movieList, movies])
            setMovies({
                movieTitle: "",
                genre: "",
                releaseYear: "",
                ticketsSold: ""
            })

        }


    }
    
  return (
    <div> 
        <div className="container">
            <div className="row">
                <form action="" className="form col-4 offset-2" onSubmit={submitHandler}>
                    <div className="form-group">
                        { // Ternary operator                   // true                                             // false                    
                            movies.movieTitle && movies.movieTitle.length < 3 ? <p className="text-danger">Movie Title is required and must be 3 or more characters</p> : ""
                        }
                        <label htmlFor="" className="form-label">Movie Title:</label>
                        <input type="text" name="movieTitle" className="form-control" onChange={changeHandler} value={movies.movieTitle}/>
                    </div>
                    <div className="form-group">
                    { // Ternary operator                   // true                                             // false                    
                            movies.genre && movies.genre.length < 3 ? <p className="text-danger">Genre is required and must be 3 or more characters</p> : ""
                        }
                        <label htmlFor="" className="form-label"> Genre: </label>
                        <input type="text" name="genre" className="form-control" onChange={changeHandler} value={movies.genre}/>
                    </div>
                    <div className="form-group">
                    {
                        //ternary operator
                        movies.releaseYear && movies.releaseYear < 1900 ? <p className="text-danger">Release year must be after 1900</p> : null
                    }
                        <label htmlFor="" className="form-label">Release Year:</label>
                        <input type="number" name="releaseYear" className="form-control" onChange={changeHandler} value={movies.releaseYear}/>
                    </div>
                    <div className="form-group">
                    {
                        //ternary operator
                        movies.ticketsSold && movies.ticketsSold < 3 ? <p className="text-danger">No way at least 3 people didn't see it. Must be more than 3.</p> : null
                    }
                        <label htmlFor="" className="form-label">Tickets Sold:</label>
                        <input type="number" name="ticketsSold" className="form-control"  onChange={changeHandler} value={movies.ticketsSold}/>
                    </div>
                    <button className="btn btn-primary">
                        Add Movie
                    </button>
                </form>
                <div className="col-4 offset-2">
                    {
                        movieList.map((movie, idx) => (
                                <div className="card" key={idx}>
                                    <Display movieTitle = {movie.movieTitle} genre={movie.genre} releaseYear={movie.releaseYear} ticketsSold={movie.ticketsSold}/>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    </div>
)

}

export default Movie