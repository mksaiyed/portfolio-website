import React from "react";
import {
    CommonSection,
    Container,
    SectionTitle,
    StyledWorks,
} from "./CommonStyledComp";
import { Works } from "./Constants";
import WorkComp from "./WorkComp";

const WorkSection = ({ dark }) => {
    return (
        <CommonSection dark={dark} id="works">
            <Container>
                <SectionTitle dark={dark}>Works</SectionTitle>
                <StyledWorks>
                    {Works.map((data, index) => (
                        <WorkComp data={data} key={index} />
                    ))}
                </StyledWorks>
            </Container>
        </CommonSection>
    );
};

export default WorkSection;
