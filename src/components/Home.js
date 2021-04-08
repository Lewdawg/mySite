import About from './about/About.js'
import Projects from './projects/Projects.js'
import Contact from './contact/Contact.js'
import Skills from './skills/Skills.js'

//Home
import headShot from '../img/headShot.jpg'


const Home = () => {

    return (

        <>
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

            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;
