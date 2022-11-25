import React from "react";
import ButtonComp from "./ButtonComp";
import {
    HomeContainer,
    HomeContent,
    HomeContentTitle,
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
                            <ButtonComp name="Contact me" href="#contact" />
                            <ButtonComp
                                name="Download CV"
                                variant="secondary"
                            />
                        </div>
                    </HomeContent>
                </HomeContainer>
            </StyledHomeSection>
        </>
    );
};

export default HomeSection;
