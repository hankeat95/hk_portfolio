import React, { useState } from 'react'
import HomePage from '../Contents/1_HomePage'
import AboutMePage from '../Contents/2_AboutMePage'
import Fade from 'react-reveal/Fade';


export default function PageBody() {
    const percentagePerTimelineItem = 100 / 6;
    const [currentItem, setcurrentItem] = useState(1)

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
        if (scrolledAmount < 0.35) {
            setcurrentItem(1)
        }
        else if (scrolledAmount >= 0.35) {
            setcurrentItem(2)
        }
        handleCurrentItemChange()
    }
    return (
        <div onScroll={(e) => handleAppBodyScroll(e)} className="appBody">
            <div className="floatingTimeLine">
                <Fade left delay={100}>
                    <div className="timelineTrack">
                        <div id="timelineCurrentDot" className="timelineCurrentDot"></div>
                        <div className="timelineContent timelineItem1 timelineItemActive">Home</div>
                        <div className="timelineContent timelineItem2 ">About Me</div>
                        <div className="timelineContent timelineItem3 ">Experience</div>
                        <div className="timelineContent timelineItem4 ">Qualifications</div>
                        <div className="timelineContent timelineItem5 ">Skills</div>
                        <div className="timelineContent timelineItem6 ">Personality</div>
                        <div className="timelineContent timelineItem7 timelineItemLast ">Contact</div>

                    </div>
                </Fade>
            </div>
            <div className="appBodyContent">
                <HomePage />
                <AboutMePage />
            </div>
        </div >
    )
}
