import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])

  // runs side effects
  //Option 1 - Use Effect with .then and .catch

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(res => {
        console.log(res.data.data)
        setUsers(res.data.data)})
      .catch(err => console.log(err))
  }, [])

  // Option 2 - Async/await function NOT inside useEffect

  // const apiCall = async () => {
  //   try {
  //     const result = await axios.get('https://reqres.in/api/users?page=2')
  //     console.log(result.data.data)
  //     setUsers(result.data.data)
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  // Option 3 - useEffect with async/await arrow function
  // useEffect(() => {
  //   const apiCall = async () => {
  //     try {
  //       const result = await axios.get('https://reqres.in/api/users?page=2')
  //       console.log(result.data.data)
  //       setUsers(result.data.data)
  //     }catch(error){
  //       console.log(error)
  //     }
  //   }
  //   apiCall()
  // }, [])

  // Option 4 - useEffect with async/await ES5 function inside useEffect

  // useEffect(() => {
  //   async function apiCall(){
  //     try {
  //       const result = await axios.get('https://reqres.in/api/users?page=2')
  //       console.log(result.data.data)
  //       setUsers(result.data.data)
  //     }catch(error){
  //       console.log(error)
  //     }
  //   }
  //   apiCall()
  // }, [])

  return (
    <div className="App">
      {/* Button for Option 2 */}
      {/* <button onClick={apiCall}>Api Call</button> */}
      {
        users.map(user => {
          return <div key={user.id}>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <img src={user.avatar} alt="user avatar" />
          </div>
        })
      }
    </div>
  );
}

export default App;
