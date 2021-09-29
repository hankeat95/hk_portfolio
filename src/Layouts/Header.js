import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tooltip from '@mui/material/Tooltip';

export default function Header() {
    const [isDarkMode, setisDarkMode] = useState(true)

    useEffect(() => {
        if (localStorage.getItem("ewwwww_nondarkmodeuser")){
            toggleViewMode()
        }
    })

    const handleHeaderLogoClick = () => {
        window.location.href = "/";
    }

    const toggleViewMode = () => {
        if (!isDarkMode) {
            document.documentElement.style.setProperty(
                '--global-backgroundColor',
                '#121212'
            );
            document.documentElement.style.setProperty(
                '--global-fontColor',
                'rgb(255, 255, 255, 0.75)'
            );
            document.documentElement.style.setProperty(
                '--global-fontColorBright',
                'white'
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
                '--global-fontColorBright',
                'black'
            );
            localStorage.setItem("ewwwww_nondarkmodeuser", true)
        }
        setisDarkMode(!isDarkMode);
    }

    return (
        <div className="appHeader">
            <div className="headerLogo" onClick={handleHeaderLogoClick}>HAN KEAT</div>
            <div className="headerMenuContainer">
                <Tooltip placement="left" title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                    <div onClick={toggleViewMode} className="darkModeControl">
                        {isDarkMode ? <Brightness7Icon /> : <DarkModeIcon />}
                    </div>
                </Tooltip>
                <div className="headerMenu">
                    <MenuIcon />
                </div>

            </div>

        </div>
    )
}
