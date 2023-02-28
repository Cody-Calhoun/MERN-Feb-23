import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import ContactType from './components/ContactType';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> 
      <br />
      <Link to="/dashboard">Dashboard</Link>
      <br />
      <Link to="/contact">Contact</Link>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/contact/:type" element={<ContactType/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        
     </Routes>
    </div>
  );
}

export default App;
