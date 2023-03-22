import React, { Component } from 'react';
import './App.css';
import MovieForm from './components/MovieForm';

class App extends Component {

  state = {
    movies: [{title: "Shrek", year: 2001}, {title: "Shrek 2", year: 2004}, {title: "Shrek 3", year: 2007}, {title: "Shrek 4", year: 2010}, {title: "Shrek 5", year: 2013}]
  }

  addNewMovie = (newMovie) => {
    this.setState({
      movies: [...this.state.movies, newMovie]
    })
  }

  render() {
  return (
    <div className="App">
      <h2>Hello World!</h2>
      <MovieForm addNewMovie={this.addNewMovie}/>

      {
        this.state.movies.map((movie, index) => {
          return (
            <div key={index}>
              <h3>Title: {movie.title}</h3>
              <h4>Year Released: {movie.year}</h4>
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
