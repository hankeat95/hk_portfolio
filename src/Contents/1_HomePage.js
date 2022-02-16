import React, { useState, useEffect } from 'react'
import ProfilePic from '../Resources/HK.jpg'
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';


export default function HomePage(props) {
    const [isPolygonSet, setIsPolygon] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsPolygon(true);
        }, 1500);
    })

    const handleOnClickContactMeButton = () => {
        document.getElementById('contactSection').scrollIntoView();
    }

    return (
        <div id="homeSection" className="contentPage">
            <div className="homePageContentsContainer">
                <div className={"profilePicContainer " + (isPolygonSet ? "polygon" : "")}>
                    <Fade left delay={0}>
                        <img src={ProfilePic} alt="Pic of HanKeat" />
                    </Fade>
                </div>
                <div className="profileContentsContainer">
                    {/* <Fade top delay={0}>
                        <div className="profileName">Hi, I'm Lee Han Keat!</div>
                    </Fade> */}
                    <Typist cursor={{
                        hideWhenDone: true
                    }} className="profileName">
                        <span>Hi, </span>
                        <Typist.Delay ms={1000} />
                        <span>I'm Lee Han Keat</span>
                    </Typist>

                    <Fade top delay={500}>
                        <div className="profileJobTitle">IT Software Development Engineer, Intel Corporation</div>
                    </Fade>
                    <Fade top delay={1000}>
                        <div className="profileDescription">
                            Making money through a computer.
                            <br />
                            Eat. Sleep. Write Codes. Repeat.
                        </div> </Fade>

                    <div className="profileActionButtons">
                        <Fade top delay={1500}>
                            <Button onClick={handleOnClickContactMeButton} color="secondary" endIcon={<CallIcon />} variant="contained">Contact Me</Button>
                        </Fade>
                        {/* <Fade top delay={1700}>
                            <div onClick={props.moreInfoScrollHelper} className="profileMoreInfoDiv">
                                <span>More info</span>
                                <span className="profileMoreInfoArrowIcon"><KeyboardArrowDownIcon fontSize="large" /></span>
                            </div>
                        </Fade> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
