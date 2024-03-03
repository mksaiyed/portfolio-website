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
            {LogoList.map((data) => (
                <StyledLogo src={`/assets/logo/${data.name}.svg`} key={data.name} href={data.link} target="_blank" />
            ))}
        </div>
    );
};

export default SocialMediaIcons;
