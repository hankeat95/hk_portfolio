import React from 'react'
import ProfilePic from '../Resources/smiley.jpg'

export default function HomePage() {
    return (
        <div className="homePageContainer">
            <div className="profilePicContainer">
                <img src={ProfilePic} alt="" />
            </div>
            <div className="profileContentsContainer">
                <div className="profileName">Hi, I'm Lee Han Keat!</div>
                <div className="profileJobTitle">Application Developer II</div>
                <div className="profileDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magnam incidunt consequatur ad, unde dolorem accusantium expedita eos nostrum possimus. Corporis explicabo delectus laborum, nam cupiditate quis. Exercitationem, animi eligendi.</div>

                <div>Scroll Down</div>

                <div>Contact Me</div>
            </div>

        </div>
    )
}
