import React from 'react'
import './Contact.css'

//Images
import linkedIn from '../../img/linkedin.png'
import envelope from '../../img/envelope.png'
import location from '../../img/location.png'


function Contact() {

    return (

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

    )
}

export default Contact
