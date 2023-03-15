import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import PlayerForm from './components/PlayerForm';

function App() {

  useEffect(() => {
  axios.get("http://localhost:8000/api/players")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <h1>In the main App</h1>
      <PlayerForm/>
  
    </div>
  );
}

export default App;
