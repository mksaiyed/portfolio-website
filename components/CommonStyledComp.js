import styled from "styled-components";
import css from "styled-jsx/css";

const WHITE_COLOR = "#FFF";
const DARK_BG_COLOR = "#353b48";
const PRIMARY_COLOR = "#48dbfb";
const BLACK_COLOR = "#111";
const TEXT_COLOR = "#444";

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;
    padding: 0 40px;
    @media screen and (max-width: 980px) {
        max-width: 800px;
    }
    @media screen and (max-width: 600px) {
        padding: 0 20px;
    }
`;

export const StyledBackgroundCanvas = styled.canvas`
    background-color: ${DARK_BG_COLOR};
    position: absolute;
    z-index: -999;
    width: 100%;
    height: 100%;
`;

export const CommonSection = styled.section`
    padding: 100px 0;
    background-color: ${(props) => (props.dark ? DARK_BG_COLOR : "#f1f1f1")};
`;

export const CommonDivFlexWrapSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    /* Circle Loader */
    .loader {
        width: 35px;
        height: 35px;
        border: 3px solid ${PRIMARY_COLOR};
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    /* Bubbles Loader */
    /* .loader,
    .loader:before,
    .loader:after {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        animation-fill-mode: both;
        animation: bubbleFadInOut 1.8s infinite ease-in-out;
    }
    .loader {
        color: ${PRIMARY_COLOR};
        font-size: 7px;
        position: relative;
        text-indent: -9999em;
        transform: translateZ(0);
        animation-delay: -0.16s;
    }
    .loader:before,
    .loader:after {
        content: "";
        position: absolute;
        top: 0;
    }
    .loader:before {
        left: -3.5em;
        animation-delay: -0.32s;
    }
    .loader:after {
        left: 3.5em;
    }

    @keyframes bubbleFadInOut {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    } */
`;

export const StyledHomeSection = styled(CommonSection)`
    height: 100vh;
    min-height: 500px;

    background-color: transparent;
    /* background-color: ${DARK_BG_COLOR}; */
    /* background: url("/assets/bg.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed; */

    /* background: linear-gradient(
        300deg,
        #070f2b,
        #1b1a55,
        #535c91,
        #9290c3,
        #535c91,
        #1b1a55,
        #070f2b
    );
    background-size: 420% 420%;
    animation: gradient-animation 10s ease-in-out infinite;

    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    } */
`;

export const HomeContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
`;

export const HomeContent = styled.div`
    width: 100%;
    color: ${WHITE_COLOR};
`;

export const HomeTitle = styled.div`
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 10px;
    @media screen and (max-width: 980px) {
        font-size: 50px;
    }
    @media screen and (max-width: 700px) {
        font-size: 40px;
    }
    @media screen and (max-width: 500px) {
        font-size: 35px;
    }
`;

export const AnimatedHomeTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 40px;
    color: ${PRIMARY_COLOR};
    @media screen and (max-width: 980px) {
        font-size: 32px;
    }
    @media screen and (max-width: 700px) {
        font-size: 24px;
    }
    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
    &:after {
        content: "A Software Engineer";
        animation: textAnim 10s linear infinite;
    }
    @keyframes textAnim {
        20% {
            content: "A React Js Developer";
        }
        40% {
            content: "A Web Developer";
        }
        60% {
            content: "A MERN Stack Developer";
        }
        80% {
            content: "A Javascript Developer";
        }
    }
`;

export const HomeButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const StyledButton = styled.a`
    display: inline-block;
    margin: 10px;
    color: ${PRIMARY_COLOR};
    font-size: 15px;
    font-weight: 500;
    width: 190px;
    height: 50px;
    border: 1px solid ${PRIMARY_COLOR};
    padding: 14px 0;
    font-weight: bold;
    border-radius: 50px;
    transition: 0.5s linear;
    @media screen and (max-width: 300px) {
        width: 230px;
    }
    &:hover {
        cursor: pointer;
        background-color: ${PRIMARY_COLOR};
        color: ${(props) => (props.dark ? BLACK_COLOR : WHITE_COLOR)};
    }
`;

export const StyledDownloadButton = styled.a`
    position: relative;
    display: inline-block;
    height: 50px;
    width: 190px;
    line-height: 50px;
    padding: 0;
    border-radius: 50px;
    background: ${(props) => (props.dark ? "transparent" : WHITE_COLOR)};
    border: 1px solid ${PRIMARY_COLOR};
    margin: 10px;
    transition: 0.5s;
    @media screen and (max-width: 300px) {
        width: 230px;
    }
    &:hover {
        background-color: ${PRIMARY_COLOR};
        .circle {
            left: 100%;
            margin-left: -45px;
            background-color: ${(props) =>
                props.dark ? BLACK_COLOR : WHITE_COLOR};
            div {
                background-color: ${PRIMARY_COLOR};
            }
        }
        .title {
            left: 40px;
            opacity: 0;
        }
        .title-hover {
            opacity: 1;
            left: 40px;
        }
    }

    .circle {
        display: block;
        background-color: ${PRIMARY_COLOR};
        position: absolute;
        float: left;
        margin: 5px;
        line-height: 40px;
        height: 38px;
        width: 38px;
        top: 0;
        left: 0;
        transition: 0.5s;
        border-radius: 50%;
        div {
            mask: url("/assets/download.svg") no-repeat center / contain;
            background-color: ${(props) =>
                props.dark ? BLACK_COLOR : WHITE_COLOR};
            height: 25px;
            width: 25px;
            margin: 6px;
        }
    }

    .title,
    .title-hover {
        position: absolute;
        left: 60px;
        text-align: center;
        margin: 0 auto;
        font-size: 16px;
        font-weight: bold;
        color: ${PRIMARY_COLOR};
        transition: 0.5s;
    }
    .title-hover {
        left: 80px;
        opacity: 0;
        color: ${(props) => (props.dark ? BLACK_COLOR : WHITE_COLOR)};
    }
`;

export const StyledLogo = styled.a`
    background-color: ${WHITE_COLOR};
    min-width: 24px;
    min-height: 24px;
    font-size: 22px;
    margin: 0 10px;
    transition: 0.2s linear;
    mask: url(${(props) => props.src}) no-repeat center / contain;
    &:hover {
        cursor: pointer;
        background-color: ${PRIMARY_COLOR};
    }
`;

export const StyledNavBar = styled.nav`
    position: fixed;
    background-color: ${(props) =>
        props.isSticky ? WHITE_COLOR : "transparent"};
    width: 100%;
    padding: ${(props) => (props.isSticky ? "18px 0" : "30px 0")};
    top: 0;
    z-index: 999;
    transition: 0.3s linear;
`;

export const NavContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledMenuToggle = styled.div`
    background: none;
    width: 30px;
    border: none;
    cursor: pointer;
    position: relative;
    outline: none;
    z-index: 999;
    display: none;
    span {
        display: block;
        height: 3px;
        background-color: ${(props) =>
            props.isSticky ? BLACK_COLOR : WHITE_COLOR};
        margin: 6px 0;
        position: relative;
        transition: 0.3s linear;
    }
    @media screen and (max-width: 980px) {
        display: block;
        span:nth-child(1) {
            ${(props) =>
                props.isActive &&
                css`
                    transform: rotate(-45deg);
                    top: 4px;
                `}
        }
        span:nth-child(2) {
            ${(props) =>
                props.isActive &&
                css`
                    opacity: 0;
                `}
        }
        span:nth-child(3) {
            ${(props) =>
                props.isActive &&
                css`
                    transform: rotate(45deg);
                    bottom: 14px;
                `}
        }
    }
`;

export const StyledMenuList = styled.div`
    a {
        color: ${(props) => (props.isSticky ? BLACK_COLOR : WHITE_COLOR)};
        font-size: 15px;
        font-weight: 500;
        margin-left: 30px;
        transition: 0.2s linear;
    }
    a:hover {
        color: ${PRIMARY_COLOR} !important;
    }
    @media screen and (max-width: 980px) {
        position: fixed;
        height: 100vh;
        width: 100%;
        background-color: ${(props) =>
            props.isSticky ? WHITE_COLOR : DARK_BG_COLOR};
        top: 0;
        right: ${(props) => (props.isActive ? "0" : "-100%")};
        max-width: 400px;
        padding: 80px 50px;
        transition: 0.3s linear;
        a {
            display: block;
            font-size: 30px;
            margin: 30px 0;
        }
    }
`;

export const SectionTitle = styled.h1`
    text-align: center;
    margin-bottom: 80px;
    position: relative;
    font-size: 26px;
    padding-bottom: 20px;
    color: ${(props) => (props.dark ? "#f1f1f1" : BLACK_COLOR)};

    &::before {
        content: "";
        position: absolute;
        width: 80px;
        height: 3px;
        background-color: ${(props) => (props.dark ? "#f1f1f1" : BLACK_COLOR)};
        bottom: 0;
        left: calc(50% - 40px);
    }

    &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 10px;
        background-color: ${PRIMARY_COLOR};
        border: 4px solid ${(props) => (props.dark ? DARK_BG_COLOR : "#f1f1f1")};
        left: calc(50% - 12px);
        bottom: -7px;
    }
`;

export const StyledAboutContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .aboutLogo {
        border-radius: 50%;
        margin-right: 100px;
    }

    @media screen and (max-width: 980px) {
        .aboutLogo {
            margin: 0 auto 60px;
        }
    }
`;

export const StyledAboutText = styled.div`
    flex: 1;
    h3 {
        margin: 10px 0;
        color: ${TEXT_COLOR};
        font-size: 16px;
    }
    h3 span::after {
        content: "";
        width: 6px;
        height: 6px;
        background-color: ${TEXT_COLOR};
        display: inline-block;
        border-radius: 50%;
        margin: 0 14px;
    }
    h3 span:last-child:after {
        content: "";
        background-color: unset;
    }
    p {
        font-size: 17px;
        text-align: justify;
        line-height: 26px;
        margin-top: 20px;
    }
    @media screen and (max-width: 980px) {
        flex: 100%;
        text-align: center;
    }
`;

export const StyledSkills = styled(CommonDivFlexWrapSpaceBetween)`
    margin-top: 40px;
`;

export const StyledSkill = styled.div`
    width: calc(50% - 20px);
    margin: 15px 0;
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const StyledSkillInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledSkillBar = styled.div`
    height: 3px;
    background-color: #ddd;
    margin-top: 14px;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        height: 6px;
        background-color: ${PRIMARY_COLOR};
        bottom: 0;
        width: ${(props) => props.width};
    }
`;

export const StyledServices = styled(CommonDivFlexWrapSpaceBetween)``;

export const StyledServiceIcon = styled.div`
    font-size: 40px;
    min-width: 40px;
    min-height: 40px;
    margin-bottom: 20px;
    background-color: ${PRIMARY_COLOR};
    mask: url(${(props) => props.src}) no-repeat center / contain;
    transition: 0.3s linear;
`;

export const StyledService = styled.div`
    width: calc(33% - 20px);
    text-align: center;
    border: 1px solid ${PRIMARY_COLOR};
    border-radius: 6px;
    margin: 20px 0;
    padding: 40px 20px;
    color: ${WHITE_COLOR};
    cursor: pointer;
    transition: 0.3s linear;
    &:hover {
        background-color: ${PRIMARY_COLOR};
        ${StyledServiceIcon} {
            background-color: ${WHITE_COLOR};
        }
    }
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const StyledServiceTitle = styled.h4`
    font-size: 16px;
    margin-bottom: 6px;
`;

export const StyledTimeline = styled(CommonDivFlexWrapSpaceBetween)`
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
`;

export const StyledWorks = styled(CommonDivFlexWrapSpaceBetween)``;

export const StyledEducationBlock = styled.div`
    width: calc(50% - 20px);
    background-color: ${WHITE_COLOR};
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 30px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 120%;
        background-color: #ddd;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
    }
    :first-child::before {
        top: 110%;
    }
    :last-child::before {
        top: -10%;
    }
    &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: ${PRIMARY_COLOR};
        left: -28px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        z-index: 2;
    }
    h3 {
        font-size: 16px;
        margin: 10px 0;
    }
    p {
        font-size: 15px;
        color: ${TEXT_COLOR};
    }
    @media screen and (max-width: 980px) {
        width: calc(100% - 20px);
        margin-left: auto;
    }
`;

export const StyledWorkImage = styled.img`
    background: url(${(props) => props.src}) no-repeat center / contain;
    width: 100%;
    height: 100%;
    transition: 0.4s linear;
`;

export const StyledWorkInfo = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 40px;
    left: 40px;
    color: ${WHITE_COLOR};
    font-weight: bold;
    transition: 0.4s linear;
    opacity: 0;
`;

export const StyledWorkBlock = styled.a`
    width: calc(33% - 10px);
    overflow: hidden;
    border-radius: 6px;
    margin: 10px 0;
    cursor: pointer;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: ${PRIMARY_COLOR}aa;
        transition: 0.2s linear;
        opacity: 0;
        transform: scale(0);
    }
    &:hover ${StyledWorkImage} {
        transform: scale(1.8);
    }
    &:hover ${StyledWorkInfo}, &:hover::before {
        opacity: 1;
        transform: scale(1);
    }
    @media screen and (max-width: 980px) {
        width: calc(50% - 10px);
    }
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const StyledContactInfo = styled(CommonDivFlexWrapSpaceBetween)`
    margin-bottom: 60px;
`;

export const StyledContactItem = styled.div`
    width: calc(33% - 20px);
    height: 160px;
    background-color: ${DARK_BG_COLOR};
    color: ${WHITE_COLOR};
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s linear;
    span {
        text-transform: none !important;
    }
    &:hover {
        background-color: ${PRIMARY_COLOR};
    }
    @media screen and (max-width: 980px) {
        width: 100%;
        margin: 10px 0;
    }
`;

export const StyledContactImage = styled.div`
    background-color: ${WHITE_COLOR};
    mask: url(${(props) => props.src}) no-repeat center / contain;
    display: block;
    font-size: 40px;
    line-height: 120px;
    height: 40px;
    width: 40px;
    margin: 35px auto 20px auto;
`;

export const StyledContactForm = styled.form`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    input,
    textarea {
        width: 100%;
        height: 50px;
        margin: 10px 0;
        background-color: ${DARK_BG_COLOR};
        border: none;
        outline: none;
        padding: 20px;
        border-radius: 4px;
        color: ${WHITE_COLOR};
    }
    .nameZone,
    .emailZone {
        max-width: calc(50% - 10px);
    }

    .messageZone {
        min-height: 200px;
        resize: vertical;
    }
    .sendMsgBtn {
        border: none;
        display: block;
        text-align: center;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        position: relative;
        color: #fff;
        font-weight: 700;
        font-size: 15px;
        background-color: ${DARK_BG_COLOR};
        padding: 17px 60px;
        margin: 0 auto;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        span {
            text-transform: uppercase !important;
        }
    }
    .sendMsgBtn span {
        position: relative;
        z-index: 1;
    }
    .sendMsgBtn:after {
        content: "";
        position: absolute;
        left: 25px;
        top: 0;
        height: 490%;
        width: 140%;
        background: ${PRIMARY_COLOR};
        transition: all 0.5s ease-in-out;
        transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    .sendMsgBtn:hover:after {
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
    @media screen and (max-width: 600px) {
        .nameZone,
        .emailZone {
            max-width: 100%;
        }
    }
`;

export const StyledFooter = styled.footer`
    /* background: url("/assets/bg.jpg") no-repeat center; */
    background-color: ${DARK_BG_COLOR};
    color: ${WHITE_COLOR};
    padding: 80px 0;
    text-align: center;
`;

export const StyledCopyrightBlock = styled.div`
    margin-bottom: 20px;
    font-size: 15px;
    a {
        font-size: 16px;
        color: ${PRIMARY_COLOR};
        font-weight: 500;
    }
`;

export const StyledGoTopBtn = styled.div`
    position: fixed;
    z-index: 999;
    bottom: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    background: url("/assets/arrow-up.svg") no-repeat center / contain;
    background-size: 25px 25px;
    background-color: ${PRIMARY_COLOR};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
`;
