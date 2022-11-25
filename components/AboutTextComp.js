import React from "react";
import { StyledAboutText } from "./CommonStyledComp";

const AboutTextComp = ({aboutSectionData}) => {
    return (
        <StyledAboutText>
            <h2>{aboutSectionData.heading}</h2>
            <h3>
                {aboutSectionData.aboutTags.map((aboutTag) => (
                    <span key={aboutTag}>{aboutTag}</span>
                ))}
            </h3>
            <p>{aboutSectionData.description}</p>
        </StyledAboutText>
    );
};

export default AboutTextComp;
