import React, { useRef, useState } from 'react'
import HomePage from '../Contents/1_HomePage'

export default function PageBody() {
    return (
        <div className="appBody">
            <div className="floatingTimeLine">
                <div className="timelineTrack"></div>
            </div>
            <div className="appBodyContent">
                <HomePage/>
            </div>
        </div>
    )
}
