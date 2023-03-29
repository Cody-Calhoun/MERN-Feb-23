import React from 'react'
import axios from 'axios'

const Dashboard = () => {

    const logout = () => {
        axios.post('http://localhost:8000/api/users/logout', {}, {withCredentials: true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Welcome to the Dashboard</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard