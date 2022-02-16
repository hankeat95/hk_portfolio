import React from 'react'
import moment from 'moment'
import Fade from 'react-reveal/Fade';

export default function WorkExperiencePage() {
    let workExperienceList = [
        {
            id: 1,
            companyName: "Intel Corporation",
            positionName: "IT Software Development Engineer",
            dateStarted: new Date("2021-02-14 00:00:00"),
            dateEnded: "Current",
            descriptionPoints: [ ]
        },
        {
            id: 2,
            companyName: "Plexus Corp",
            positionName: "Application Developer II (R&D)",
            dateStarted: new Date("2021-01-02 00:00:00"),
            dateEnded: new Date("2022-02-11 00:00:00"),
            descriptionPoints: [
                "Improved code review execution for my team of Developers",
                "Actively participating and contributing ideas/solutions during group brainstorming/discussions for various projects",
                "Assist other Developers for troubleshooting/bug fixes and complex tasks or development requirements",
                "Trained and guide new Developers for code ethics, best practices and code cleaniness",
                "Provide ad-hoc researches on development technology/tools/frameworks",
                "Achieved at least 95% accuracy on translating mock designs/prototypes to actual UI",
            ]
        },
        {
            id: 3,
            companyName: "Plexus Corp",
            positionName: "Application Developer I (R&D)",
            dateStarted: new Date("2019-08-02 00:00:00"),
            dateEnded: new Date("2021-01-01 00:00:00"),
            descriptionPoints: [
                "Improved Progressive Web App (myPlexus) with service worker framework 'Google WorkBox'. Improved loading speed and minimized storage usage by utilizing caching from service worker",
                "Successfully delivered COVID19 communication module in a short period of time for allowing Human Resource department to easily communicate with employees off-site",
                "Resolved physical printing cards on company's annual Quality Policy and Holiday Calendars by digitalizing it to web application. Eliminated all physical printing cost and increased availabily with minimum effort and cost",
                "Experience in full stack Web Applications Development with C#, ASP.Net, JavaScript, JQuery, CSS, Telerik Kendo UI Framework and other third party libraries/frameworks",
            ]
        },
        {
            id: 4,
            companyName: "Plexus Corp",
            positionName: "Application Developer I",
            dateStarted: new Date("2019-01-07 00:00:00"),
            dateEnded: new Date("2019-08-01 00:00:00"),
            descriptionPoints: [
                "Improved on-premise Windows and Web Applications (C#, ASP.NET) to synchronise with electrical component measurement device (FLUKE PM6304 RCL Meter and HIOKI IM3536 RCL Meter)",
                "Contibuted Knowledge Sharing Presentation on Implementing IoT with Azure",
                "Worked closely with teammates on production floor dashboard & monitoring project",
                "Researched and shared to team on Microsoft Cognitive Service (FACE) for facial recognition",
                "Utilizing Windows OCR for text extractions on PCB Labels and Printed Texts for automation projects",
                "Experienced on using SSIS for data sync and manipulations (SQL Stored procedures, functions, views, reusable pre/post scripts)",
                "Post-Deployment application supports to users",
            ]
        },
        {
            id: 5,
            companyName: "Motorola Solutions",
            positionName: "Software Engineer Intern",
            dateStarted: new Date("2018-07-01 00:00:00"),
            dateEnded: new Date("2019-01-05 00:00:00"),
            descriptionPoints: [
                "Achieved targetted timeline to upgrade more than 100 outdated test scripts to utilize new testing API and tools",
                "Resolved automated test scripts reliability issue when interrupted by various blockage and popups",
                "Improved test scripts execution time by roughly 50%",
                "Experienced in Motorola radios configurations (both mobile and portable radios)",
                "Experienced in using automation tools and related testing software (QTP, Clearcase, JIRA, Rational ClearCase Explorer)",
                "Automation scripting with VBScript, PERL and AutoIT",
                "Volunteered in Penang International Science Fair @ SPICE Arena (basic RF Testing Demo)",
            ]
        },
    ]

    let workExperienceHTMLList = workExperienceList.map((item, index) => {
        let years_Display = "";
        let months_Display = "";
        let formattedDateEnd = item.dateEnded;
        if (item.dateEnded === "Current") {
            formattedDateEnd = new Date();
        }
        let duration = moment(formattedDateEnd).diff(moment(item.dateStarted))
        let years_Elapsed = moment.duration(duration).years();
        let months_Elapsed = moment.duration(duration).months() + 1;

        if (years_Elapsed > 0) {
            years_Display = `${years_Elapsed} ${years_Elapsed > 1 ? "years" : "year"}`;
        }
        if (months_Elapsed > 0) {
            months_Display = `${months_Elapsed} ${months_Elapsed > 1 ? "months" : "month"}`;
        }
        return (
            <Fade key={item.id} delay={400}>
                <li className={index === 0 ? "currentWorkExp" : ""}>
                    <div className="workExp_TimelineHeader">
                        {item.companyName}, {item.positionName}
                    </div>
                    <div className="workExp_TimelineWorkDuration">
                        {moment(item.dateStarted).format('MMM YYYY')} - {item.dateEnded === "Current" ? "Present" : moment(item.dateEnded).format('MMM YYYY')} &nbsp; ({years_Display.length > 0 ? years_Display + " " : ""}{months_Display})
                    </div>
                    <div className="workExp_TimelineDescription">
                        <ul>
                            {item.descriptionPoints.map((description, descIndex) => { return (<li key={item.id + "_" + descIndex}>{description}</li>) })}
                        </ul>
                    </div>
                </li>
            </Fade>
        )
    })

    return (
        <div id="experienceSection" className="contentPage">
            <div className="pageHeaderContainer">
                <Fade delay={400}>
                    <div className="pageHeaderTitle">Work Experience</div>
                </Fade>
                <Fade delay={400}>
                    <div className="pageHeaderSubTitle">My career history</div>
                </Fade>
                <div className="workExp_TimelineDiv">
                    <div className="timelineBox">
                        <div className="timelineBoxContainer">
                            <ul>
                                {workExperienceHTMLList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
