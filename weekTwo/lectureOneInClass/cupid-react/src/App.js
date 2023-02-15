import './App.css';
import Fairy from './components/Fairy';

function App() {
  return (
    <div className="App">
      <h1>💘 Cupid's Matching Stats 💘</h1>
      <Fairy fairyName={"Greg"} fairyColor={"Green"} fairyBowType={"Crossbow"} fairyMatches={20}/>
      <Fairy fairyName={"Gray"} fairyColor={"Purple"} fairyBowType={"Compound"} fairyMatches={7}/>
      <Fairy fairyName={"Kat"} fairyColor={"Blue"} fairyBowType={"Recurve"} fairyMatches={100}/>
    </div>
  );
}

export default App;
