import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (

        <div className="navbar">

            <Link to='/'><h1>Lewes Walton</h1></Link>

            <div className="links">

                <Link to="/">Home</Link>

                <Link to="/projects">Projects</Link>

                <Link to="/contact">Contact</Link>

            </div>
        </div>
    )
}

export default Navbar
