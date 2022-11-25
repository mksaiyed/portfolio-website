import React from "react";
import { StyledLogo } from "./CommonStyledComp";
import { LogoList } from "./Constants";

const SocialMediaIcons = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            {LogoList.map((logo) => (
                <StyledLogo src={`/assets/logo/${logo}.svg`} key={logo} />
            ))}
        </div>
    );
};

export default SocialMediaIcons;
