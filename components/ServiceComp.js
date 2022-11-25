import React from "react";
import {
    StyledService,
    StyledServiceIcon,
    StyledServiceTitle,
} from "./CommonStyledComp";

const ServiceComp = ({ service }) => {
    return (
        <StyledService>
            <StyledServiceIcon src={service.src} />
            <StyledServiceTitle>{service.title}</StyledServiceTitle>
            <p>{service.description}</p>
        </StyledService>
    );
};

export default ServiceComp;
