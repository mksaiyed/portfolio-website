import React from "react";
import {
    StyledWorkBlock,
    StyledWorkImage,
    StyledWorkInfo,
} from "./CommonStyledComp";

const WorkComp = ({ data }) => {
    return (
        <StyledWorkBlock href={data.link} target="_blank">
            <StyledWorkImage src={data.src} alt={data.src} />
            <StyledWorkInfo>
                <h3>{data.title}</h3>
                <div>{data.description}</div>
            </StyledWorkInfo>
        </StyledWorkBlock>
    );
};

export default WorkComp;
