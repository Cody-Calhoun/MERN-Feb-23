import logo from './logo.svg';
import './App.css';
import Fairy from './components/Fairy';

function App() {
  return (
    <div className="App">
      <h1>💘🧚🏼 Cupids Matching Stats 🧚🏼💘 </h1>
      <Fairy fairyName={"Jeff"} fairyColor={"Blue"} fairyBowType={"Crossbow"} fairyMatches={19}/>
      <hr />
      <Fairy fairyName={"Judith"} fairyColor={"Yellow"} fairyBowType={"Longbow"} fairyMatches={6}/>
    </div>
  );
}

export default App;
