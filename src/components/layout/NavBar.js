import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Job Application Tracker</Link>
            </div>
            <ul className="right">
                <li><NavLink to='/signin'>Sign In</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar