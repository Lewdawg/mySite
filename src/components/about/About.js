import React from 'react'

//Css
import './About.css'

//Image
import arrows from '../../img/arrows.png'


function About() {

    return (

        <div className="aboutSection" id='about'>

            <div className="aboutImage">
                <img src={arrows} alt="" className="arrows" />
            </div>

            <div className="aboutText">

                <h1>ABOUT</h1>

                <h2>Hi am <b>Lewes</b>, an inspiring Web Developer.</h2>

                <p>In 2020 I decided to take a huge leap and changed careers and start again as a Web Developer. The past year I have been studying with the Digital Career Institute (DCI) to achieve this goal. I am from the UK and have been living in Germany for the past few years.</p>

                <p>I have a background in construction and have completed an apprenticeship and worked as a welder for many years in several different countries. Beyond my welding experiences I also founded and managed my own cleaning/personal assistant company.</p>

                <p>With the DCI, we have covered how to become a <b>Full-Stack Web Developer</b> and have experimented with various different programming languages.</p>

            </div>
        </div>
    )
}

export default About
