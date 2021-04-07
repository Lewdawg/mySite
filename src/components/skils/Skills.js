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
    )
}

export default Skills
