import React from "react";
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function FooterPage() {
    return (
        <div id="haha" className="footerContainer">
            <div>
                <span>© Han Keat Lee</span><br/>
                <span>All rights reserved.</span>
            </div>
            <div className="socialMediaDiv">
                <Tooltip placement="top" title={"Email"}>
                    <a href="mailto:hankeat95@gmail.com"><EmailIcon sx={{ fontSize: 40 }} /></a>
                </Tooltip>
                <Tooltip placement="top" title={"LinkedIn"}>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hankeat95/"><LinkedInIcon sx={{ fontSize: 40 }} /></a>
                </Tooltip>
                <Tooltip placement="top" title={"Instagram"}>
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/hankeat95/"><InstagramIcon sx={{ fontSize: 40 }} /></a>
                </Tooltip>
                <Tooltip placement="top" title={"Facebook"}>
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/hankeat95"><FacebookIcon sx={{ fontSize: 40 }} /></a>
                </Tooltip>
            </div>
        </div>
    )
};
