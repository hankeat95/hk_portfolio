import React from 'react'
import HomePage from '../Contents/1_HomePage'
import AboutMePage from '../Contents/2_AboutMePage'

export default function PageBody() {
    return (
        <div className="appBody">
            <div className="floatingTimeLine">
                <div className="timelineTrack"></div>
            </div>
            <div className="appBodyContent">
                <HomePage/>
                <AboutMePage/>
            </div>
        </div>
    )
}
