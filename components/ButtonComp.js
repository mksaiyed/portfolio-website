import React from "react";
import { StyledButton } from "./CommonStyledComp";

const ButtonComp = ({ name, variant }) => {
    return (
        <>
            <StyledButton variant={variant}>{name}</StyledButton>
        </>
    );
};

export default ButtonComp;
