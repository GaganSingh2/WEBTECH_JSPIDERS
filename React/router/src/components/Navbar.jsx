import React from 'react'
import { Link } from 'react-router'
function Navbar() {
    return (
        <div className='nav-bar'>
            {/* If we use anchor tag then each time when we render from one page to another page it will re-load the whole page or DOM so bcz of this reasone we use <Link> tag */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
            <a href="/footer">Footer</a> */}

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/footer">Footer</Link>
        </div>
    )
}

export default Navbar