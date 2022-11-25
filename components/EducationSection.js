import React from "react";
import {
    CommonSection,
    Container,
    SectionTitle,
    StyledEducationBlock,
    StyledTimeline,
} from "./CommonStyledComp";
import { EducationAndExp } from "./Constants";

const EducationSection = () => {
    return (
        <>
            <CommonSection id="education">
                <Container>
                    <SectionTitle>Education & Experiences</SectionTitle>
                    <StyledTimeline>
                        {EducationAndExp.map((data, index) => (
                            <StyledEducationBlock key={index}>
                                <h4>{data.time}</h4>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </StyledEducationBlock>
                        ))}
                    </StyledTimeline>
                </Container>
            </CommonSection>
        </>
    );
};

export default EducationSection;
