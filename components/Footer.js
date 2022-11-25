import React from "react";
import {
    Container,
    StyledCopyrightBlock,
    StyledFooter,
} from "./CommonStyledComp";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledCopyrightBlock>
                    &copy; 2020 | Created & Designed By{" "}
                    <a href="#">DarkCoder</a>
                </StyledCopyrightBlock>
                <SocialMediaIcons />
            </Container>
        </StyledFooter>
    );
};

export default Footer;
