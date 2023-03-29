import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
     </Routes>
    </div>
  );
}

export default App;
