import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


export default function Header(props) {


    const [isDarkMode, setisDarkMode] = useState(localStorage.getItem("ewwwww_nondarkmodeuser") ? false : true)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.style.setProperty(
                '--backgroundColor',
                '#121212'
            );
            document.documentElement.style.setProperty(
                '--fontColor',
                'rgb(255, 255, 255, 0.75)'
            );
            document.documentElement.style.setProperty(
                '--fontColorPartial',
                'rgb(255, 255, 255, 0.75)'
            );
            document.documentElement.style.setProperty(
                '--fontColorBright',
                'white'
            );
            document.documentElement.style.setProperty(
                '--timelineTrackDefaultOpacity',
                '0.2'
            );
            document.documentElement.style.setProperty(
                '--carouselDescriptionBackgroundColor',
                'rgba(0,0,0,0.5)'
            );
            document.documentElement.style.setProperty(
                '--carouselShadowColor',
                'black'
            );
            document.documentElement.style.setProperty(
                '--languageRatingDefaultColor',
                'rgba(245, 245, 245, 0.1)'
            );
            localStorage.removeItem("ewwwww_nondarkmodeuser")
        }
        else {
            document.documentElement.style.setProperty(
                '--backgroundColor',
                'snow'
            );
            document.documentElement.style.setProperty(
                '--fontColor',
                'black'
            );
            document.documentElement.style.setProperty(
                '--fontColorPartial',
                'darkgray'
            );
            document.documentElement.style.setProperty(
                '--fontColorBright',
                'black'
            );
            document.documentElement.style.setProperty(
                '--timelineTrackDefaultOpacity',
                '0.8'
            );
            document.documentElement.style.setProperty(
                '--carouselDescriptionBackgroundColor',
                'rgba(255, 250, 250, 0.95)'
            );
            document.documentElement.style.setProperty(
                '--carouselShadowColor',
                'darkgray'
            );
            document.documentElement.style.setProperty(
                '--languageRatingDefaultColor',
                'rgba(169, 169, 169,0.4)'
            );
            localStorage.setItem("ewwwww_nondarkmodeuser", true)
        }
        setTimeout(() => {
            document.querySelector("body").style.transition = "background-color 0.3s linear";
        }, 1000);
    }, [isDarkMode])

    const handleHeaderLogoClick = () => {
        window.location.reload()
    }

    const toggleViewMode = () => {
        setisDarkMode(!isDarkMode);
    }

    const [menuAnchor, setMenuAnchor] = useState(null);
    const open = Boolean(menuAnchor);
    const handleMenuClick = (event) => {
        setMenuAnchor(event.currentTarget);
    };
    const handleMenuClose = () => {
        setMenuAnchor(null);
      };
    const handleMenuItemSelected = (selectedItem) => {
        setMenuAnchor(null);
        switch (selectedItem) {
            case 'home':
                document.getElementById('homeSection').scrollIntoView();
                break;
            case 'aboutme':
                document.getElementById('aboutMeSection').scrollIntoView();
                break;
            case 'experience':
                document.getElementById('experienceSection').scrollIntoView();
                break;
            case 'qualifications':
                document.getElementById('qualificationsSection').scrollIntoView();
                break;
            case 'skills':
                document.getElementById('skillsSection').scrollIntoView();
                break;
            case 'contact':
                document.getElementById('contactSection').scrollIntoView();
                break;
            default:
                break;
        }

    };

    return (
        <div className="appHeader">
            <div className="headerLogo" onClick={handleHeaderLogoClick}>HAN KEAT</div>
            <div className="headerMenuContainer">
                <Tooltip placement="left" title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                    <div className="darkModeControl">
                        {isDarkMode ? <Brightness7Icon onClick={toggleViewMode} /> : <DarkModeIcon onClick={toggleViewMode} />}
                    </div>
                </Tooltip>
                <div className="headerMenu">
                    <MenuIcon onClick={handleMenuClick} />
                    <Menu
                        anchorEl={menuAnchor}
                        open={open}
                        onClose={handleMenuClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={() => { handleMenuItemSelected("home") }}>Home</MenuItem>
                        <MenuItem onClick={() => { handleMenuItemSelected("aboutme") }}>About Me</MenuItem>
                        <MenuItem onClick={() => { handleMenuItemSelected("experience") }}>Experience</MenuItem>
                        <MenuItem onClick={() => { handleMenuItemSelected("qualifications") }}>Qualifications</MenuItem>
                        <MenuItem onClick={() => { handleMenuItemSelected("skills") }}>Skills</MenuItem>
                        <MenuItem onClick={() => { handleMenuItemSelected("contact") }}>Contact</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
