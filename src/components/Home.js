import logo from '../img/linkin.png'
import headShot from '../img/headShot.jpg'


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
                    <img src={logo} alt="" className="imgMe" />
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

            </div>



            {/*********************************  Projects ************************************/}

            <div className="projectsSection" id='project'>


                <h1>Completed projects</h1>


            </div>


            {/*********************************  Contact ************************************/}

            <div className="contactSection" id='contact'>

                <div>
                    <h3>Mobile</h3>
                    <h3>Email</h3>
                    <h3>Fax</h3>
                </div>

            </div>
        </>
    );
}

export default Home;