import logo from './logo.svg';
import './App.css';
import Fairy from './components/Fairy';

function App() {
  return (
    <div className="App">
      <h1>ππ§πΌ Cupids Matching Stats π§πΌπ </h1>
      <Fairy fairyName={"Jeff"} fairyColor={"Blue"} fairyBowType={"Crossbow"} fairyMatches={19}/>
      <hr />
      <Fairy fairyName={"Judith"} fairyColor={"Yellow"} fairyBowType={"Longbow"} fairyMatches={6}/>
    </div>
  );
}

export default App;
