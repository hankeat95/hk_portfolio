import React from 'react'
import ProfilePic from '../Resources/HK.jpg'
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';

export default function HomePage() {
    return (
        <div>
            <div className="homePageContainer">
                <div className="profilePicContainer">
                    <Fade left delay={0}>
                        <img src={ProfilePic} alt="Pic of HanKeat" />
                    </Fade>
                </div>
                <div className="profileContentsContainer">
                    <Fade bottom delay={0}>
                        <div className="profileName">Hi, I'm Lee Han Keat!</div>
                    </Fade>
                    <Fade bottom delay={500}>
                        <div className="profileJobTitle">Application Developer II, Plexus Corp</div>
                    </Fade>
                    <Fade bottom delay={1000}>
                        <div className="profileDescription">
                            A person that uses a computer to make a living.
                            <br />
                            Have passion in creating useful applications/web sites to increase productivity.
                        </div> </Fade>

                    <div className="profileActionButtons">
                        <Fade bottom delay={1500}>
                            <Button color="secondary" endIcon={<CallIcon />} variant="contained">Contact Me</Button>
                        </Fade>
                        <Fade bottom delay={1700}>
                            <div className="profileMoreInfoDiv">
                                <span>More info</span>
                                <span className="profileMoreInfoArrowIcon"><KeyboardArrowDownIcon fontSize="large" /></span>
                            </div>
                        </Fade>
                    </div>


                </div>
            </div>
        </div>
    )
}
