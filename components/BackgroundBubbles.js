import React from "react";
import { BgCircle } from "./CommonStyledComp";

const BUBBLES_SIZE = {
    web: 15,
    mobile: 7,
};

const BackgroundBubbles = () => {
    return (
        <>
            {new Array(
                window.innerWidth > 600 ? BUBBLES_SIZE.web : BUBBLES_SIZE.mobile
            )
                .fill("")
                .map((item, index) => (
                    <BgCircle key={index} varient={index % 15}>
                        <span></span>
                    </BgCircle>
                ))}
        </>
    );
};

export default BackgroundBubbles;
