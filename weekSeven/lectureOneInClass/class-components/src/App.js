import React, {Component} from 'react';
import './App.css';
import MovieForm from './components/MovieForm';

class App extends Component {

  state = {
    movies: [{title : 'The Matrix', year : 1999}, {title : 'The Matrix Reloaded', year : 2003}, {title : 'The Matrix Revolutions', year : 2003}]
  }

  addNewMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  render() {
  return (
    <div className="App">
      <h1>Class Based Movie example</h1>
      <MovieForm addNewMovie={this.addNewMovie}/>

      {
        this.state.movies.map((movie, index) => {
          return (
            <div key={index}>
              <h2>Movie Title: {movie.title}</h2>
              <p>Release year: {movie.year}</p>
            </div>
          )
        }
        )
      }
    </div>
  );
}
}

export default App;
