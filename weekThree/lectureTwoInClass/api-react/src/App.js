import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const base_url = "https://reqres.in/api/";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // "https://reqres.in/api/users?page=2"
    fetch(base_url + "users?page=1")
      .then(response => response.json())
      .then(json => setUsers(json.data))
      .catch(error => console.log(error))
}, []);

  return (
    <div className="App">
      {users.map(user => (
        <div key={user.id}>
          <h1>{user.first_name} {user.last_name}</h1>
          <img src={user.avatar} alt={user.first_name} />
        </div>
      )
      )}
    </div>
  );
}

export default App;
