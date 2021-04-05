// import logo from '../img/linkin.png'
import headShot from '../img/headShot.jpg'
import arrows from '../img/arrows.png'

// import js from '../img/js.svg'
import html from '../img/html.png'
import js from '../img/js.png'
import express from '../img/express.png'
import node from '../img/node.png'
import react from '../img/react.png'

import css from '../img/css.png'
import mongo from '../img/mongo.png'
import git from '../img/git.png'



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

            <div className="aboutSection" id='about'>

                <div className="aboutImage">
                    <img src={arrows} alt="" className="arrows" />
                </div>

                <div className="aboutText">

                    <h1>About</h1>

                    <h2>Hi am <b>Lewes</b>, an inspiring Web Developer.</h2>

                    <p>In 2020 I decided to take a huge leap and changed careers and start again as a Web Developer. The past year I have been studying with the Digital Career Institute (DCI) to achieve this goal. I am from the UK and have been living in Germany for the past few years.</p>

                    <p>I have a background in construction and have completed an apprenticeship and worked as a welder for many years in several different countries. Beyond my welding experiences I also founded and managed my own cleaning/personal assistant company.</p>

                    <p>With the DCI, we have covered how to become a <b>Full-Stack Web Developer</b> and have experimented with various different programming languages.</p>

                </div>
            </div>


            {/*********************************  Skills ************************************/}

            <div className="skillSection">

                <h1>My Skills</h1>

                <div className="logos">

                    <img src={html} alt="" height='130px' />
                    <img src={js} alt="" height='130px' />
                    <img src={node} alt="" height='130px' />
                    <img src={react} alt="" height='130px' />

                </div>

                <div className="logos">
                    <img src={css} alt="" height='130px' />
                    <img src={mongo} alt="" height='130px' />
                    <img src={git} alt="" height='130px' />
                    <img src={express} alt="" height='130px' />
                </div>

            </div>



            {/*********************************  Projects ************************************/}

            <div className="projectsSection" id='project'>


                <h1>Completed projects</h1>


            </div>


            {/*********************************  Contact ************************************/}

            <div className="contactSection" id='contact'>

                <div>
                    <h2>Mobile</h2>
                    <h2>Email</h2>
                    <h2>Fax</h2>
                </div>

            </div>
        </>
    );
}

export default Home;