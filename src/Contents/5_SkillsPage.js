import React from 'react'
import Fade from 'react-reveal/Fade';

export default function SkillsPage() {
    return (
        <div className="contentPage">
            <div className="pageHeaderContainer">
                <Fade delay={300}>
                    <div className="pageHeaderTitle">Skills</div>
                </Fade>
                <Fade delay={400}>
                    <div className="pageHeaderSubTitle">My Skillsets and Toolbox</div>
                </Fade>
            </div>
        </div>
    )
}