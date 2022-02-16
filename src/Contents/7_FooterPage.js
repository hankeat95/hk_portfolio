import React from "react";
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Fade from 'react-reveal/Fade';


export default function FooterPage() {
    return (
        <div className="footerContainer">
            <Fade delay={400}>
                <div>
                    <span>© Han Keat Lee</span><br />
                    <span>All rights reserved.</span><br />
                    <span>Made with ReactJS</span>
                </div>
            </Fade>
            <div className="socialMediaDiv">
                <Fade delay={500}>
                    <Tooltip placement="top" title={"Email"}>
                        <a href="mailto:hankeat95@gmail.com"><EmailIcon sx={{ fontSize: 40 }} /></a>
                    </Tooltip>
                </Fade>
                <Fade delay={600}>
                    <Tooltip placement="top" title={"LinkedIn"}>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hankeat95/"><LinkedInIcon sx={{ fontSize: 40 }} /></a>
                    </Tooltip>
                </Fade>
                <Fade delay={700}>
                    <Tooltip placement="top" title={"Instagram"}>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/hankeat95/"><InstagramIcon sx={{ fontSize: 40 }} /></a>
                    </Tooltip>
                </Fade>
                <Fade delay={800}>
                    <Tooltip placement="top" title={"Facebook"}>
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/hankeat95"><FacebookIcon sx={{ fontSize: 40 }} /></a>
                    </Tooltip>
                </Fade>
            </div>
        </div>
    )
};
