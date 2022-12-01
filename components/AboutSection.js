import Image from "next/image";
import React from "react";
import AboutTextComp from "./AboutTextComp";
import {
    CommonSection,
    Container,
    SectionTitle,
    StyledAboutContent,
    StyledSkill,
    StyledSkillBar,
    StyledSkillInfo,
    StyledSkills,
} from "./CommonStyledComp";
import { AboutSectionData, Skills } from "./Constants";

const AboutSection = () => {
    return (
        <CommonSection id="about">
            <Container>
                <SectionTitle>About</SectionTitle>
                <StyledAboutContent>
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width="200"
                        height="200"
                        className="aboutLogo"
                    />
                    <AboutTextComp aboutSectionData={AboutSectionData} />
                </StyledAboutContent>
                <StyledSkills>
                    {Skills.map((skill, index) => (
                        <StyledSkill key={index}>
                            <StyledSkillInfo>
                                <span>{skill.name}</span>
                                <span>{skill.value}%</span>
                            </StyledSkillInfo>
                            <StyledSkillBar width={skill.value + `%`} />
                        </StyledSkill>
                    ))}
                </StyledSkills>
            </Container>
        </CommonSection>
    );
};

export default AboutSection;
