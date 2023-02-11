import React from 'react'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ExploreIcon from '@mui/icons-material/Explore';
import Button from '@mui/material/Button';
import LaptopIcon from '@mui/icons-material/Laptop';
import Tooltip from '@mui/material/Tooltip';
import DescriptionIcon from '@mui/icons-material/Description';
import Moment from 'react-moment';
import Fade from 'react-reveal/Fade';
import EventIcon from '@mui/icons-material/Event';
// import CV_PDF from '../Resources/CV_LeeHanKeat.pdf';


export default function AboutMePage() {
    return (
        <div id="aboutMeSection" className="contentPage">
            <div className="pageHeaderContainer">
                <div className="pageHeaderTitle">About Me</div>
                <div className="pageHeaderSubTitle">Something more about me?</div>
            </div>
            <div className="aboutMeDescriptions">
                <Fade delay={400}>
                    {/* <p>Currently working as an Application Developer II for Plexus Corp, Penang. I develop applications for company's internal use.
                        Working closely with C#/ASP.NET, JavaScript, SQL and Frontend developments.</p> */}
                    <p>Currently working as an IT Software Development Engineer for Intel Corporation, Penang. </p>
                </Fade>
                <Fade delay={400}>
                    <p>Bachelor Degree in Computer Science, majoring in Information Security.</p>
                </Fade>
                <Fade delay={400}>
                    <p>I have great interest in Software Programming, Internet of Things, Software Testing and Network/Computer Security field.
                        Always up for the challenge on discovering and using new tech in developments.
                    </p>
                </Fade>
            </div>
            <div className="aboutMeExtraDetails">
                <Fade delay={400}>
                    <div className="aboutMePersonalDetails">
                        <Fade delay={400}>
                            <div>
                                <Tooltip enterTouchDelay={0} placement="top" title="Ethnicity">
                                    <div><EmojiPeopleIcon fontSize="large" /></div>
                                </Tooltip>
                                <div className="aboutMePersonalDetailsValue">Chinese</div>
                            </div>
                        </Fade>
                        <Fade delay={400}>
                            <div>
                                <Tooltip enterTouchDelay={0} placement="top" title="Current Location">
                                    <div><ExploreIcon fontSize="large" /></div>
                                </Tooltip>
                                <div className="aboutMePersonalDetailsValue">Penang, Malaysia</div>
                            </div>
                        </Fade>
                        <Fade delay={400}>
                            <div>
                                <Tooltip enterTouchDelay={0} placement="top" title="Age">
                                    <div><EventIcon fontSize="large" /></div>
                                </Tooltip>
                                <div className="aboutMePersonalDetailsValue">
                                    <Moment diff="1995-04-02" unit="years"></Moment> years old
                                </div>
                            </div>
                        </Fade>
                    </div>
                </Fade>
                <Fade delay={400}>
                    <div className="aboutMeWorkExperienceCounter">
                        <div>
                            <div className="workExperienceLabel">Work Experience</div>
                            <div><LaptopIcon fontSize="large" /></div>
                            <div className="workExperienceCounterText" ><Moment date={new Date("2018-07-01 00:00:00")}
                                durationFromNow
                            /></div>
                            <span>and counting...</span>
                        </div>
                    </div>
                </Fade>
                {/* <Fade delay={400}>
                    <div>
                        <a className="downloadCVButton" download="CV_LeeHanKeat.pdf" href={CV_PDF}>
                            <Button variant="contained" startIcon={<DescriptionIcon />}>Get my resume</Button>
                        </a>
                    </div>
                </Fade> */}
            </div>

        </div>

    )
}
