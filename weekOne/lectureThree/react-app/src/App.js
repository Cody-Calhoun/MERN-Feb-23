import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';



function App() {
  return (
      <ul>
        <li>Hello World</li>
        <FirstComponent firstName="Will" lastName="Calhoun"/>
      </ul>
    
  );
}

export default App;
