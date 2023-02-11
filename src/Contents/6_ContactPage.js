import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import { useForm } from '@formspree/react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function ContactPage() {
    return (
        <div id="contactSection">
            <div className="pageHeaderContainer">
                <Fade delay={300}>
                    <div className="pageHeaderTitle">Contact</div>
                </Fade>
                <Fade delay={400}>
                    <div className="pageHeaderSubTitle">Request for my resume or just drop me a message !</div>
                </Fade>
                <Fade delay={400}>
                    <div className="contactContainer">
                        <div className="emailFormDiv">
                            <EmailForm />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
};


const CustomInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fcfcfb',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));


function EmailForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [state, handleSubmit] = useForm("mvolpdkl");
    // const [state, handleSubmitTest] = useState(false)
    // if (state) {
    //     return <h1 className="emailSuccessMessage">Thank you for the message! Will get back to you ASAP :D</h1>;
    // }
    if (localStorage.getItem("noSpam") === 'true' || state.succeeded) {
        localStorage.setItem("noSpam", true)
        return <p>Got your message! Will get back to you ASAP :D</p>;
    }

    return (
        // <form className="emailForm" onSubmit={() => handleSubmitTest(true)}>
        <form className="emailForm" onSubmit={handleSubmit}>
            <div>
                <p htmlFor="name">
                    Name
                </p>
                <CustomInput
                    id="name"
                    type="name"
                    fullWidth
                    name="name"
                    label="Name"
                    value={name}
                    variant="outlined"
                    required
                    inputProps={{ maxLength: 50 }}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </div>
            <div>
                <p htmlFor="email">
                    Email Address
                </p>
                <CustomInput
                    id="email"
                    type="email"
                    fullWidth
                    name="email"
                    label="email"
                    value={email}
                    required
                    variant="outlined"
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>

            <div>
                <p htmlFor="message">
                    Message
                </p>
                <CustomInput
                    id="message"
                    name="message"
                    type="message"
                    fullWidth
                    label="message"
                    value={message}
                    variant="outlined"
                    required
                    multiline
                    rows={6}
                    inputProps={{ maxLength: 3000 }}
                    onChange={(e) => { setMessage(e.target.value) }}
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <Button type="submit" disabled={state.submitting} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </div>

        </form>
    );
}