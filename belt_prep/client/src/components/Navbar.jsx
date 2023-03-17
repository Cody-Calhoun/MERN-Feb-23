import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/api/players">Home</Link></li>
            <li><Link to="/api/players/create">Create Player</Link></li>
        </ul>
    </div>
  )
}

export default Navbar