import React from "react";
import {
    CommonSection,
    Container,
    SectionTitle,
    StyledServices,
} from "./CommonStyledComp";
import { Services } from "./Constants";
import ServiceComp from "./ServiceComp";

const ServiceSection = ({ dark }) => {
    return (
        <CommonSection dark={dark} id="services">
            <Container>
                <SectionTitle dark={dark}>Services</SectionTitle>
                <StyledServices>
                    {Services.map((service, index) => (
                        <ServiceComp service={service} key={index} />
                    ))}
                </StyledServices>
            </Container>
        </CommonSection>
    );
};

export default ServiceSection;
