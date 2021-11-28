import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import JournalPic from '../Resources/academicPaper.png'
import Form6Pic from '../Resources/smi.jpg'
import UTHM from '../Resources/uthm.jpg'
import Modal from '@mui/material/Modal';
import ModalFade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';



export default function QualificationsPage() {

    const qualificationsDataSource = [
        {
            id: 1,
            image: UTHM,
            mainHeader: "Degree",
            secondaryHeader: "University Tun Hussein Onn Malaysia, UTHM",
            details: [
                "Bachelor Degree in Computer Science",
                "Information Security",
                "CGPA : 3.92",
                "Dean List Scorer",
            ]
        },
        {
            id: 2,
            image: Form6Pic,
            mainHeader: "Pre-University",
            secondaryHeader: "SMK St Michael Ipoh",
            details: [
                "CGPA : 3.0, MUET : Band 4",
                "Michaelian Military Band Leader",
                "Prefectorial Board - Student Affairs Commission Head",
            ]
        },
        {
            id: 3,
            image: JournalPic,
            mainHeader: "Journal Publication",
            secondaryHeader: "",
            details: [
                "Smart Indoor Home Surveillance Monitoring System Using Raspberry Pi",
                "Collaborated with Degree Final Year Project Supervisor, Dr. Chuah Chai Wen",
                'Published to JOIV @ <a target="_blank" rel="noreferrer" href="http://joiv.org/index.php/joiv/article/view/172" >here',
            ]
        },
    ]


    return (
        <div className="contentPage">
            <div className="pageHeaderContainer">
                <Fade delay={300}>
                    <div className="pageHeaderTitle">Qualifications</div>
                </Fade>
                <Fade delay={400}>
                    <div className="pageHeaderSubTitle">My education and achievements</div>
                </Fade>
                <Fade delay={500}>
                    <p className="carouselInstructions" >Tap on images for more info</p>
                    <div className="carouselContainer">
                        <EducationCarousel dataSource={qualificationsDataSource} />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

function EducationCarousel(props) {
    var Carousel = require('react-responsive-carousel').Carousel;

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isModalOpen, setisModalOpen] = useState(false);
    const handleOpenModal = () => setisModalOpen(true);
    const handleCloseModal = () => setisModalOpen(false);
    // const AutoplaySlider = withAutoplay(AwesomeSlider);
    const handleCarouselItemSelected = (currentIndex) => {
        if (window.innerWidth > 800) return;
        setSelectedIndex(currentIndex);
        handleOpenModal();
    }

    let sliderDescriptionHTML = null;

    if (props) {
        sliderDescriptionHTML = props.dataSource.map((item) => {
            let formattedDetails = item.details.map((detail, index) => {
                return (<p key={index} dangerouslySetInnerHTML={{ __html: detail }}></p>)
            })
            return (
                <div key={item.id} className="carouselScreen">
                    <div className="carouselScreenImage"><img src={item.image} alt="blabla" /></div>
                    <div className="carouselScreenDescription">
                        <h2>{item.mainHeader}</h2>
                        {item.secondaryHeader ? <h3>{item.secondaryHeader}</h3> : null}
                        {formattedDetails}
                    </div>
                </div>

            )
        })
    }

    let selectedModalContentObj = props.dataSource[selectedIndex];

    let modalHeader = (<h2 style={{ textDecoration: "underline" }}>{selectedModalContentObj.mainHeader}</h2>)
    let modalSecondaryHeader = selectedModalContentObj.secondaryHeader ? <h3>{selectedModalContentObj.secondaryHeader}</h3> : null
    let modalDescriptionHTML = selectedModalContentObj.details.map((detail, index) => {
        return (<p key={index} dangerouslySetInnerHTML={{ __html: detail }}></p>)
    })

    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
            >
                <ModalFade in={isModalOpen}>
                    <div style={{ background: "black" }}>
                        <div className="sliderPopUpBox">
                            <CloseIcon className="sliderPopUpCloseButton" onClick={handleCloseModal} />
                            {modalHeader}
                            {modalSecondaryHeader}
                            {modalDescriptionHTML}
                        </div>
                    </div>
                </ModalFade>

            </Modal>
            <Carousel showArrows={true} onClickItem={handleCarouselItemSelected} infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} interval={5000}>
                {sliderDescriptionHTML}
            </Carousel>
        </>
    )
}