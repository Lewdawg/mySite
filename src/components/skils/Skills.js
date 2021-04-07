import React from 'react'
import './Skills.css'

//Images
import html from '../../img/html.png'
import js from '../../img/js.png'
import express from '../../img/express.png'
import node from '../../img/node.png'
import react from '../../img/react.png'
import css from '../../img/css.png'
import mongo from '../../img/mongo.png'
import git from '../../img/git.png'


function Skills() {

    return (

        <div className="skillSection">

            <h1>SKILLS</h1>

            <div className="logos">

                <div>
                    <img src={html} alt="" />
                    <p>HTML 5</p>
                </div>

                <div>
                    <img src={js} alt="" />
                    <p>JavaScript</p>
                </div>

                <div>
                    <img src={node} alt="" />
                    <p>Node.js</p>
                </div>

                <div>
                    <img src={react} alt="" />
                    <p>React</p>
                </div>

            </div>

            <div className="logos">
                <div>
                    <img src={css} alt="" />
                    <p>CSS 3</p>
                </div>
                <div>
                    <img src={mongo} alt="" />
                    <p>MongoDB</p>
                </div>
                <div>
                    <img src={git} alt="" />
                    <p>Git</p>
                </div>
                <div>
                    <img src={express} alt="" />
                    <p>Express</p>
                </div>
            </div>

        </div>
    )
}

export default Skills
