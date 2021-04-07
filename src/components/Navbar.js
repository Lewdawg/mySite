import React from 'react'


function Navbar() {

    return (

        <div className="navbar">

            <div className="links">

                {/* <Link to="/">Home</Link> */}
                <a href="#home">Home</a>

                {/* <Link to="/#about">About</Link> */}
                <a href="#about">About</a>

                {/* <Link to="/projects">Projects</Link> */}
                <a href="#projects">Projects</a>

                {/* <Link to="/contact">Contact</Link> */}
                <a href="#contact">Contact</a>

            </div>
        </div>
    )
}

export default Navbar
