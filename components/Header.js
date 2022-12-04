import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
    NavContainer,
    StyledMenuList,
    StyledMenuToggle,
    StyledNavBar,
} from "./CommonStyledComp";
import { MenuList } from "./Constants";

const Header = ({ isSticky }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <StyledNavBar isSticky={isSticky}>
                <NavContainer>
                    <Link href="/">
                        <Image
                            src={
                                "/assets/" +
                                (isSticky ? "logo-black.svg" : "logo-white.svg")
                            }
                            alt="Logo"
                            width="42"
                            height="32"
                        />
                    </Link>
                    <StyledMenuToggle
                        isSticky={isSticky}
                        isActive={isActive}
                        onClick={() => setIsActive((prev) => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </StyledMenuToggle>
                    <StyledMenuList isActive={isActive} isSticky={isSticky}>
                        {MenuList.map((data, index) => (
                            <a
                                href={`#${data.toLowerCase()}`}
                                key={index}
                                onClick={() => setIsActive((prev) => !prev)}
                            >
                                {data}
                            </a>
                        ))}
                    </StyledMenuList>
                </NavContainer>
            </StyledNavBar>
        </>
    );
};

export default Header;
