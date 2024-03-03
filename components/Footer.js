import Link from "next/link";
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
                    &copy; {new Date().getUTCFullYear()} | Created & Designed By{" "}
                    <Link href="/">MohammadKaif</Link>
                </StyledCopyrightBlock>
                <SocialMediaIcons />
            </Container>
        </StyledFooter>
    );
};

export default Footer;
