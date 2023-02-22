import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const base_url = "https://reqres.in/api/"
  useEffect(() => {
    fetch(base_url + "users?page=2")
      .then(response => response.json())
      .then(json => {
        // console.log(json.data)
        setData(json.data)
      })
      .catch((error) => {
        console.log(error);
      }
    )
    // dependency array
  }, [])
  
  return (
    <div className="App">
      {
        data.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.avatar} alt={item.first_name} />
              <p>{item.first_name} {item.last_name}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
