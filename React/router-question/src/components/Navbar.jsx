import React from 'react'
import { Link } from 'react-router'
function Navbar() {
    return (
        <div  className='nav-bar'>
            <Link to="/">Home</Link>
            <Link to="/allproduct">AllProduct</Link>
            <Link to="/fruit">Fruit</Link>
            <Link to="/icecreame">IceCreame</Link>
        </div>
    )
}

export default Navbar