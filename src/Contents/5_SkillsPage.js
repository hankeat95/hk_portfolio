import React from 'react'
import Fade from 'react-reveal/Fade';
import Marquee from "react-fast-marquee";
import TextLoop from "react-text-loop";
import CSharpPic from '../Resources/skills/csharp.png'
import CSSPic from '../Resources/skills/css.png'
import DotNetPic from '../Resources/skills/dotnet.png'
import JavaScriptPic from '../Resources/skills/javascript.png'
import JqueryPic from '../Resources/skills/jquery.png'
import MSSMPic from '../Resources/skills/mssm.png'
import MySQLPic from '../Resources/skills/mysql.png'
import PythonPic from '../Resources/skills/python.png'
import ReactPic from '../Resources/skills/react.png'
import DockerPic from '../Resources/skills/docker.png'
import seleniumPic from '../Resources/skills/selenium.png'
import VisualStudioPic from '../Resources/skills/visualstudio.png'
import LanguageRatingDots from '../CustomComponents/LanguageRatingDots';




export default function SkillsPage() {
    return (
        <div id="skillsSection" className="contentPage">
            <div className="pageHeaderContainer">
                <div className="skillsLoopingHeader">I am experienced in </div>
                <TextLoop className="skillsLoopingList" interval={1300} mask={true}>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>C#</span>
                    <span>ASP.NET</span>
                    <span>MySQL</span>
                    <span>jQuery</span>
                    <span>ReactJS</span>
                    <span>Visual Studio</span>
                    <span>Python</span>
                    <span>Docker</span>
                    <span>Selenium</span>
                </TextLoop>

                <Marquee className="skillsMarquee" speed={80} gradient={false}>
                    <img src={CSharpPic} alt="csharp" />
                    <img src={CSSPic} alt="CSSPic" />
                    <img src={DotNetPic} alt="DotNetPic" />
                    <img src={JavaScriptPic} alt="JavaScriptPic" />
                    <img src={JqueryPic} alt="JqueryPic" />
                    <img src={MSSMPic} alt="MSSMPic" />
                    <img src={MySQLPic} alt="MySQLPic" />
                    <img src={PythonPic} alt="PythonPic" />
                    <img src={ReactPic} alt="ReactPic" />
                    <img src={VisualStudioPic} alt="VisualStudioPic" />
                    <img src={DockerPic} alt="DockerPic" />
                    <img src={seleniumPic} alt="SeleniumPic" />
                </Marquee>

                <Fade delay={400}>
                    <h1>Languages</h1>
                </Fade>
                <div className="languages">
                    <Fade delay={600}>
                        <div className="languageItemContainer">
                            <div className="languageDescription">
                                <div>English</div>
                                <div>Native</div>
                            </div>
                            <div className="languageRatings" >
                                <LanguageRatingDots highlightedDots={5} />
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={700}>
                        <div className="languageItemContainer">
                            <div className="languageDescription">
                                <div>Malay</div>
                                <div>Business Fluent</div>
                            </div>
                            <div className="languageRatings" >
                                <LanguageRatingDots highlightedDots={5} />
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={800}>
                        <div className="languageItemContainer">
                            <div className="languageDescription">
                                <div>Mandarin</div>
                                <div>Proficient</div>
                            </div>
                            <div className="languageRatings" >
                                <LanguageRatingDots highlightedDots={4} />
                            </div>
                        </div> </Fade>
                    <Fade delay={900}>
                        <div className="languageItemContainer">
                            <div className="languageDescription">
                                <div>Cantonese</div>
                                <div>Proficient</div>
                            </div>
                            <div className="languageRatings" >
                                <LanguageRatingDots highlightedDots={4} />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}