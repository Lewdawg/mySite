// import logo from '../img/linkin.png'
import headShot from '../img/headShot.jpg'
import arrows from '../img/arrows.png'

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
import projects from '../data/projects.json'
import laptop from '../img/laptop.png'

//Contact




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

                <h1>Skills</h1>

                <div className="logos">

                    <img src={html} alt="" />
                    <img src={js} alt="" />
                    <img src={node} alt="" />
                    <img src={react} alt="" />

                </div>

                <div className="logos">
                    <img src={css} alt="" />
                    <img src={mongo} alt="" />
                    <img src={git} alt="" />
                    <img src={express} alt="" />
                </div>

            </div>



            {/*********************************  Projects ************************************/}

            <div className="projectsSection" id='project'>

                <h1>Projects</h1>

                <div className="projectDivs">

                    {projects.map(project => {
                        return (
                            <div className='card'>
                                <h3>{project.title}</h3>
                                {/* <h3>{project.laptop}</h3> */}
                                <p>{project.description}</p>
                                <p>{project.languages}</p>
                            </div>
                        )
                    })}

                </div>
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