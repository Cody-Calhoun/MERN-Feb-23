import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState({})
  const [movies, setMovies] = useState([])
  // const [accountTotal, setAccountTotal] = useState(0)

  // function handleAdd() {
  //   setAccountTotal(accountTotal + 1)
  // }

  //   useEffect(() => {
  //     console.log(`Account total is ${accountTotal}`)}, [accountTotal]
  // )
  // runs side-effects
  // useEffect(() => {}, [])
  // Using Fecth
  // useEffect(() => {
  //   fetch('https://reqres.in/api/users?page=2')
  //     .then(response => response.json())
  //     .then(unicorn => {
  //       console.log(unicorn)
  //       setUsers(unicorn.data)
  //     })
  //     .catch(err => console.log(err))
  //     // dependency array
  // }, [])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/4')
    .then(response => {
      console.log(response.data)
      setUsers(response.data)
      const movieArray = []
      for (let movie in users.films){
        movieArray.push(movie)
      }
      // console.log(movieArray)
      // for (const [key, movie] in Object.entries(users.films)){
      //   axios.get(`${movie}`)
      //   .then(response => {
      //     setMovies(response.data)
      //   } ) 
      //   .catch(err => console.log(err))
      // }
    }) 
    .catch(err => console.log(err))
    // setMovies(movieArray)
  }, [])

  // Using async await
  // for of loop

  


  const apiCall = async () => {

    for (let movie in users.films){
      console.log(movie)
    }
    try {
      const response = await axios.get('')
      console.log(response.data.data)
      setUsers(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  // Using async await in UseEffect
  // useEffect(() => {
  //   const apiCall = async () => {
  //     try {
  //       const response = await axios.get('https://reqres.in/api/users?page=2')
  //       console.log(response.data.data)
  //       setUsers(response.data.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   apiCall()
  // }, [])


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
      {/* <button onClick={apiCall}> Click here
      </button> */}
      {/* {
        users.map(user => {
          return <div key={user.id}>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <img src={user.avatar} alt="user avatar" />
          </div>
        })
      } */}
      <h1>{users.name}</h1>
      <h3>Height:{users.height}</h3>
      <h3>Eye Color:{users.eye_color}</h3>
      <button onClick={apiCall}>See movies associated</button>
      <h4>{users.films}</h4>
    </div>
  );
}

export default App;
