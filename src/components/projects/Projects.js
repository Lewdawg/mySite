import React from 'react'
import './Projects.css'

// import ProjectCard from './card/ProjectCard'

//Images
import laptop from '../../img/laptop.png'
import github from '../../img/githubLogo.png'

//import webArrow from '../img/webpageArrow.png'

function Projects() {

    return (


        <div className="projectsSection" id='projects'>

            <h1>PROJECTS</h1>

            {/* <ProjectCard /> */}

            <div className="projectDivs">

                <div>
                    <img src={laptop} alt="" className='projImg' />

                    <h2>Todo App</h2>

                    <p>Stylish todo App to keep track of tasks. Options to add,edit and remove tasks. New tasks get assigned predefined colors. Made with ReactJS.</p>
                    <section className="tags">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>React</p>
                    </section>
                    <a href="https://github.com/Lewdawg/todoApp" target="_blank"><img src={github} alt="" /></a>
                </div>

                <div>
                    <img src={laptop} alt="" className='projImg' />
                    <h2>Smoothies</h2>

                    <p>User's must login to see recipes. Data is saved on database. Authentication and Authorization used when login & signing up.</p>
                    <section className="tags">
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
                    <section className="tags">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>React</p>
                        <p>Nodejs</p>
                        <p>Express</p>
                        <p>Mongodb</p>
                        <p>Mongoose</p>
                        <p>Heroku</p>
                    </section>
                    <a href="https://github.com/Lewdawg/react-gh-pages" target="_blank"><img src={github} alt="" /></a>

                </div>

                <div>
                    <img src={laptop} alt="" className='projImg' />
                    <h2>Personal Website</h2>

                    <p>Personal website designed, styled and built from scratch.  Displays my current work and has information and contact details about myself.</p>
                    <section className="tags">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>React</p>
                    </section>
                    <a href="https://github.com/Lewdawg/mySite" target="_blank"><img src={github} alt="" /></a>
                </div>

            </div>
        </div>

    )
}

export default Projects
