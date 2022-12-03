import React from "react";
import {
    HomeContainer,
    HomeContent,
    HomeContentTitle,
    StyledButton,
    StyledHomeSection,
} from "./CommonStyledComp";
import SocialMediaIcons from "./SocialMediaIcons";

const HomeSection = () => {
    return (
        <>
            <StyledHomeSection id="home">
                <HomeContainer>
                    <HomeContent>
                        <HomeContentTitle>{`Hi I'm `}</HomeContentTitle>
                        <SocialMediaIcons />
                        <div style={{ marginTop: 60 }}>
                            <StyledButton href="#contact">Contact me</StyledButton>
                            <StyledButton variant={"secondary"}>Download CV</StyledButton>
                        </div>
                    </HomeContent>
                </HomeContainer>
            </StyledHomeSection>
        </>
    );
};

export default HomeSection;
