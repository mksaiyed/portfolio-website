import React from "react";
import ButtonComp from "./ButtonComp";
import {
    CommonSection,
    Container,
    SectionTitle,
    StyledContactForm,
    StyledContactImage,
    StyledContactInfo,
    StyledContactItem,
    StyledInput,
    StyledTextArea,
} from "./CommonStyledComp";
import { ContactItems } from "./Constants";

const ContactSection = () => {
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
                <StyledContactForm action="#">
                    <input
                        className="nameZone"
                        type="text"
                        placeholder="Your Full Name"
                    />
                    <input
                        className="emailZone"
                        type="email"
                        placeholder="Your Email"
                    />
                    <input
                        className="subjectZone"
                        type="text"
                        placeholder="Subject"
                    />
                    <textarea
                        type="textarea"
                        className="messageZone"
                        placeholder="Message"
                    />
                    <input
                        type="submit"
                        className="btnZone"
                        value="Send Message"
                    />
                </StyledContactForm>
            </Container>
        </CommonSection>
    );
};

export default ContactSection;
