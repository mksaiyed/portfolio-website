import React from "react";
import {
    AnimatedHomeTitle,
    HomeButtonContainer,
    HomeContainer,
    HomeContent,
    HomeTitle,
    StyledButton,
    StyledDownloadButton,
    StyledHomeSection,
} from "./CommonStyledComp";
import SocialMediaIcons from "./SocialMediaIcons";

const HomeSection = () => {
    return (
        <>
            <StyledHomeSection id="home">
                <HomeContainer>
                    <HomeContent>
                        <HomeTitle>{`Hi, I'm Mohammad Kaif`}</HomeTitle>
                        <AnimatedHomeTitle />
                        <SocialMediaIcons />
                        <HomeButtonContainer>
                            <StyledButton href="#contact" dark>
                                Contact Me
                            </StyledButton>
                            <StyledDownloadButton
                                href="/assets/resume.pdf"
                                download="MohammadKaif Resume"
                                dark
                            >
                                <span className="circle">
                                    <div></div>
                                </span>
                                <span className="title">Download CV</span>
                                <span className="title-hover">Click Here</span>
                            </StyledDownloadButton>
                        </HomeButtonContainer>
                    </HomeContent>
                </HomeContainer>
            </StyledHomeSection>
        </>
    );
};

export default HomeSection;
