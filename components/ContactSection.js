import React, { useRef } from "react";
import {
    CommonSection,
    Container,
    SectionTitle,
    StyledContactForm,
    StyledContactImage,
    StyledContactInfo,
    StyledContactItem,
} from "./CommonStyledComp";
import { ContactItems } from "./Constants";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_h1lflqt",
                "template_m1zyeqq",
                form.current,
                "Zbe9dMpsYE_U8XfTA"
            )
            .then(
                (result) => {
                    window.alert(
                        "The message has been sent successfully and we will contact you as soon as possible."
                    );
                    window.location.replace("/");
                },
                (error) => {
                    window.alert("ERROR: ", error.text);
                }
            );
    };

    return (
        <CommonSection id="contact">
            <Container>
                <SectionTitle>Get in touch</SectionTitle>
                <StyledContactInfo>
                    {ContactItems.map((item, index) => (
                        <StyledContactItem key={index}>
                            <StyledContactImage src={item.src} />
                            <span>{item.value}</span>
                        </StyledContactItem>
                    ))}
                </StyledContactInfo>
                <StyledContactForm ref={form} onSubmit={sendEmail}>
                    <input
                        className="nameZone"
                        type="text"
                        placeholder="Your Full Name"
                        name="user_name"
                        required
                    />
                    <input
                        className="emailZone"
                        type="email"
                        placeholder="Your Email"
                        name="user_email"
                        required
                    />
                    <input
                        className="subjectZone"
                        type="text"
                        placeholder="Subject"
                        name="user_subject"
                        required
                    />
                    <textarea
                        type="textarea"
                        className="messageZone"
                        placeholder="Message"
                        name="user_message"
                        required
                    />
                    <button type="submit" className="sendMsgBtn">
                        <span>Send Message</span>
                    </button>
                </StyledContactForm>
            </Container>
        </CommonSection>
    );
};

export default ContactSection;
