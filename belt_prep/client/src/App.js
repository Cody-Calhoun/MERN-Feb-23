import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerForm from './components/PlayerForm';
import PlayerDashboard from './components/PlayerDashboard';
import OnePlayer from './components/OnePlayer';
import EditPlayer from './components/EditPlayer';
import Navbar from './components/Navbar';

function App() {

  useEffect(() => {
  axios.get("http://localhost:8000/api/players")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        < Route element={<PlayerForm/>} path="api/players/create"/>
        < Route element={<PlayerDashboard/>} path="api/players"/>
        < Route element={<OnePlayer/>} path="api/players/:id"/>
        < Route element={<EditPlayer/>} path="api/players/:id/edit"/>
      </Routes>
  
    </div>
  );
}

export default App;
