import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Display from './components/Display';

function App() {
  const [movieList, setMovieList] = useState([])

  return (
    <div className="App">
      <div className="row">

      <Movie movieList={movieList} setMovieList={setMovieList}/>
      {/* <Display movieList={movieList}/> */}
      {/* Some Component Here */}
      <p>This is the second one</p>
      <Display movieList={movieList}/>
      </div>
    </div>
  );
}

export default App;
