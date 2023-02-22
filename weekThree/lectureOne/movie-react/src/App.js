import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Movie from './components/Movie';
import Display from './components/Display';

function App() {
  const [movieList, setMovieList] = useState([])
  return (
    <div className="App">
     <Movie movieList={movieList} setMovieList={setMovieList}/>
     <Display movieList={movieList}/>
    </div>
  );
}

export default App;
