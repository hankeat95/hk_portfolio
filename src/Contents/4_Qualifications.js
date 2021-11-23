import React from 'react';
import Fade from 'react-reveal/Fade';


export default function Qualifications() {
    return (
        <div className="contentPage">
            <div className="pageHeaderContainer">
                <Fade delay={300}>
                    <div className="pageHeaderTitle">Qualifications</div>
                </Fade>
                <Fade delay={400}>
                    <div className="pageHeaderSubTitle">Some proven items to evaluate my worthiness</div>
                </Fade>
            </div>
        </div>
    )
}