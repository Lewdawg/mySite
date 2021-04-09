import React from 'react'

import './Navbar.css'

function Navbar() {

    return (

        <div className="navbar">

            <div class="dropdown" style={{ 'right': '0' }}>

                <button class="dropbtn">Menu</button>

                <div class="dropdown-content">

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                </div>
            </div>

            {/**********************/}

            <div className="links">

                <a href="#home">Home</a>

                <a href="#about">About</a>

                <a href="#projects">Projects</a>

                <a href="#contact">Contact</a>

            </div>
        </div>
    )
}

export default Navbar
