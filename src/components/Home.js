import { Link } from 'react-router-dom'

import About from './about/About.js'


import headShot from '../img/headShot.jpg'
// import arrows from '../img/arrows.png'

//Skills 
import html from '../img/html.png'
import js from '../img/js.png'
import express from '../img/express.png'
import node from '../img/node.png'
import react from '../img/react.png'
import css from '../img/css.png'
import mongo from '../img/mongo.png'
import git from '../img/git.png'

//Project
// import projects from '../data/projects.json'
import laptop from '../img/laptop.png'
import github from '../img/githubLogo.png'

//Contact

import linkedIn from '../img/linkedin.png'
import envelope from '../img/envelope.png'
import location from '../img/location.png'



const Home = () => {

    return (

        <>

            {/********************************* Home, Image, BigName ************************************/}


            <div className="homeSection" id='home'>

                <div className='imgDiv'>
                    <img src={headShot} alt="" className="imgMe" />
                </div>

                <div className='bigName'>
                    <h1>LEWES
                        <br />
                    WALTON</h1>

                    <h6>Junior Developer</h6>
                </div>


            </div>

            {/*********************************  About ************************************/}

            <About />

            {/* <div className="aboutSection" id='about'>

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
            </div> */}


            {/*********************************  Skills ************************************/}

            <div className="skillSection">

                <h1>SKILLS</h1>

                <div className="logos">
                    <div>
                        <img src={html} alt="" />
                    </div>
                    <div>
                        <img src={js} alt="" />
                    </div>
                    <img src={node} alt="" />
                    <img src={react} alt="" />
                </div>

                <div className="logos">
                    <div>
                        <img src={css} alt="" />
                    </div>
                    <img src={mongo} alt="" />
                    <img src={git} alt="" />
                    <img src={express} alt="" />
                </div>

            </div>



            {/*********************************  Projects ************************************/}

            <div className="projectsSection" id='projects'>

                <h1>PROJECTS</h1>

                <div className="projectDivs">


                    <div>
                        <img src={laptop} alt="" className='projImg' />

                        <h2>Todo App</h2>

                        <p>Stylish todo App to keep track of tasks. Options to add,edit and remove tasks. Made with ReactJS.</p>
                        <p>HTML5, CSS3, React</p>
                        <a href="https://github.com/Lewdawg/todoApp" target="_blank"><img src={github} alt="" /></a>
                    </div>

                    <div>
                        <img src={laptop} alt="" className='projImg' />
                        <h2>Smoothies</h2>

                        <p>User's must log in to see smoothies recipes. Data is saved on external database. Authentication and Authorization used when login & signing up.</p>
                        <section className="pees">
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Nodejs</p>
                            <p>Express</p>
                            <p>Mongodb</p>
                            <p>Mongoose</p>
                        </section>
                        <a href="https://github.com/Lewdawg/SmoothieSite" target="_blank"><img src={github} alt="" /></a>
                    </div>

                    <div>
                        <img src={laptop} alt="" className='projImg' />
                        <h2>Laptop Shop</h2>

                        <p>App where user, must have an account to see products. If no account can not access product information. Items can be added and viewed.</p>
                        <p>HTML5, CSS3, React, Node.js, Express, Mongodb, Mongoose, Heroku</p>
                        <a href="https://github.com/Lewdawg/react-gh-pages" target="_blank"><img src={github} alt="" /></a>
                    </div>

                    <div>
                        <img src={laptop} alt="" className='projImg' />
                        <h2>Personal Website</h2>

                        <p>Personal website built from scratch.</p>
                        <p>HTML5, CSS3, React</p>
                        <a href="https://github.com/Lewdawg/mySite" target="_blank"><img src={github} alt="" /></a>
                    </div>

                </div>
            </div>


            {/*********************************  Contact ************************************/}

            <div className="contactSection" id='contact'>

                <div className="contactBox">

                    <h1>CONTACT</h1>

                    <div className='row'>

                        <div>
                            <p>MOBILE</p>
                            <h3>+49(0) 174-178-7629</h3>
                        </div>

                        <div>
                            <a href="https://www.google.com/" target="_blank"><img src={envelope} alt="" /></a>
                        </div>

                        <div>
                            <a href="https://de.linkedin.com/in/lewes-walton-b34400198?trk=people_directory" target="_blank"><img src={linkedIn} alt="" /></a>
                        </div>

                        <div>
                            <a href="https://www.google.com/maps/place/Leipzig/@47.5922303,7.7620116,5.28z/data=!4m5!3m4!1s0x47a6f818200f2c73:0x93df80d2b9b4f552!8m2!3d51.3396955!4d12.3730747" target="_blank"><img src={location} alt="" /></a>
                            <p>Leipzig, Germany</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
