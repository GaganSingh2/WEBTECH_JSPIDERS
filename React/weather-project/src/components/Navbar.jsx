import React from 'react'
import {Link} from  'react-router'
function Navbar() {
  return (
    <div className='nav-bar'>
        <Link to="/" className='logo'>
            <h1>Open <span>Weather</span></h1>
        </Link>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/weather">Weather</Link>
        </div>
    </div>
  )
}

export default Navbar