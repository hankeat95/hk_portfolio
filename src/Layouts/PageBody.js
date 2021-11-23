import React, { useState, useRef } from 'react'
import HomePage from '../Contents/1_HomePage'
import AboutMePage from '../Contents/2_AboutMePage'
import WorkExperiencePage from '../Contents/3_WorkExperiencePage'
import Fade from 'react-reveal/Fade';
import Qualifications from '../Contents/4_Qualifications';


export default function PageBody() {
    const percentagePerTimelineItem = 100 / 6;
    const [currentItem, setcurrentItem] = useState(1)
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const homePageRef = useRef();
    const aboutMePageRef = useRef();
    const experiencePageRef = useRef();
    const qualificationPageRef = useRef();
    const skillsPageRef = useRef();
    const personalityPageRef = useRef();
    const contactPageRef = useRef();


    const handleCurrentItemChange = () => {
        // remove all active items
        let activeElement = document.getElementsByClassName('timelineItemActive')[0]
        if (activeElement) {
            activeElement.classList.remove('timelineItemActive')
        }

        // set one item as active
        let selectedActiveItem = document.getElementsByClassName("timelineItem" + currentItem)[0];
        if (selectedActiveItem) {
            selectedActiveItem.classList.add("timelineItemActive");
        }

        // set dot to active item
        let dotElement = document.getElementById("timelineCurrentDot");
        if (dotElement) {
            dotElement.style.setProperty(
                'top',
                (percentagePerTimelineItem * (currentItem - 1)) + "%"
            );
        }
    }

    const handleAppBodyScroll = (e) => {
        let scrolledAmount = e.target.scrollTop / e.target.scrollHeight;
        // console.log('scrolledAmount', scrolledAmount)
        if (scrolledAmount > 0.77) {
            setcurrentItem(4)
        }
        else if (scrolledAmount > 0.33) {
            setcurrentItem(3)
        }
        else if (scrolledAmount > 0.10) {
            setcurrentItem(2)
        }
        else if (scrolledAmount < 0.10) {
            setcurrentItem(1)
        }
        handleCurrentItemChange()
    }

    const handleMouseEnter = () => {
        setIsMouseEnter((prevState) => prevState = true)
    }

    const handleMouseLeave = () => {
        setIsMouseEnter((prevState) => prevState = false)
    }

    const handleScrollTo = (pageName) => {
        switch (pageName) {
            case 'home':
                homePageRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'aboutme':
                aboutMePageRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'experience':
                experiencePageRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'qualifications':
                qualificationPageRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'skills':
                skillsPageRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'personality':
                personalityPageRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactPageRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }

    }

    const moreInfoscrollHelper = () => {
        aboutMePageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div onScroll={(e) => handleAppBodyScroll(e)} className="appBody">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="floatingTimeLine">
                <Fade left delay={100}>
                    <div className={isMouseEnter ? "timelineTrack timelineHovering" : "timelineTrack"}>
                        <div id="timelineCurrentDot" className="timelineCurrentDot"></div>
                        <div onClick={() => { handleScrollTo('home') }} className="timelineContent timelineItem1 timelineItemActive"><span>Home</span></div>
                        <div onClick={() => { handleScrollTo('aboutme') }} className="timelineContent timelineItem2 "><span>About Me</span></div>
                        <div onClick={() => { handleScrollTo('experience') }} className="timelineContent timelineItem3 "><span>Experience</span></div>
                        <div onClick={() => { handleScrollTo('qualifications') }} className="timelineContent timelineItem4 "><span>Qualifications</span></div>
                        <div onClick={() => { handleScrollTo('skills') }} className="timelineContent timelineItem5 "><span>Skills</span></div>
                        <div onClick={() => { handleScrollTo('personality') }} className="timelineContent timelineItem6 "><span>Personality</span></div>
                        <div onClick={() => { handleScrollTo('contact') }} className="timelineContent timelineItem7 timelineItemLast "><span>Contact</span></div>

                    </div>
                </Fade>
            </div>
            <div className="appBodyContent">
                <div ref={homePageRef}><HomePage moreInfoScrollHelper={moreInfoscrollHelper}/></div>
                <div ref={aboutMePageRef}><AboutMePage /></div>
                <div ref={experiencePageRef}><WorkExperiencePage /></div>
                <div ref={qualificationPageRef}><Qualifications /></div>
            </div>
        </div >
    )
}
