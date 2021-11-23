import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tooltip from '@mui/material/Tooltip';

export default function Header() {
    const [isDarkMode, setisDarkMode] = useState(localStorage.getItem("ewwwww_nondarkmodeuser") ? false : true)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.style.setProperty(
                '--global-backgroundColor',
                '#121212'
            );
            document.documentElement.style.setProperty(
                '--global-fontColor',
                'rgb(255, 255, 255, 0.75)'
            );
            document.documentElement.style.setProperty(
                '--global-fontColorPartial',
                'rgb(255, 255, 255, 0.75)'
            );
            document.documentElement.style.setProperty(
                '--global-fontColorBright',
                'white'
            );
            document.documentElement.style.setProperty(
                '--timelineTrackDefaultOpacity',
                '0.2'
            );
            localStorage.removeItem("ewwwww_nondarkmodeuser")
        }
        else {
            document.documentElement.style.setProperty(
                '--global-backgroundColor',
                'white'
            );
            document.documentElement.style.setProperty(
                '--global-fontColor',
                'black'
            );
            document.documentElement.style.setProperty(
                '--global-fontColorPartial',
                'darkgray'
            );
            document.documentElement.style.setProperty(
                '--global-fontColorBright',
                'black'
            );
            document.documentElement.style.setProperty(
                '--timelineTrackDefaultOpacity',
                '0.8'
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
                    <MenuIcon />
                </div>

            </div>

        </div>
    )
}
