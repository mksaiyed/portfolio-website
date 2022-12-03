import styled from "styled-components";
import css from "styled-jsx/css";

const WHITE_COLOR = "#FFF";
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

export const CommonSection = styled.section`
    padding: 100px 0;
    background-color: ${(props) => (props.dark ? "#353b48" : "#f1f1f1")};
`;

export const CommonDivFlexWrapSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const StyledHomeSection = styled(CommonSection)`
    height: 100vh;
    min-height: 500px;
    background: url("/assets/bg.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
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

export const HomeContentTitle = styled.h1`
    font-size: 60px;
    margin-bottom: 60px;
    &:after {
        content: "Mohammad Kaif";
        animation: textAnim 10s linear infinite;
    }
    @keyframes textAnim {
        25% {
            content: "A Developer";
        }
        50% {
            content: "A Designer";
        }
        75% {
            content: "A Creator";
        }
    }
`;

export const StyledButton = styled.a`
    display: inline-block;
    margin: 15px 30px;
    color: ${(props) =>
        props.variant === "secondary" ? WHITE_COLOR : PRIMARY_COLOR};
    background-color: ${(props) =>
        props.variant === "secondary" && PRIMARY_COLOR};
    font-size: 15px;
    font-weight: 500;
    width: 180px;
    border: 1px solid ${PRIMARY_COLOR};
    padding: 14px 0;
    border-radius: 6px;
    transition: 0.2s linear;
    &:hover {
        cursor: pointer;
        background-color: ${PRIMARY_COLOR};
        color: ${WHITE_COLOR};
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

export const StyledMenuToggle = styled.button`
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
            props.isSticky ? WHITE_COLOR : "#353b48"};
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
        border: 4px solid ${(props) => (props.dark ? "#353b48" : "#f1f1f1")};
        left: calc(50% - 12px);
        bottom: -7px;
    }
`;

export const StyledAboutContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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

export const StyledTimeline = styled(CommonDivFlexWrapSpaceBetween)``;

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
    &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: ${PRIMARY_COLOR};
        left: -28px;
        top: 30px;
        border-radius: 50%;
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
    color: #fff;
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
        background-color: #48dbfbcc;
        transition: 0.2s linear;
        opacity: 0;
        transform: scale(0);
    }
    &:hover ${StyledWorkImage} {
        transform: scale(1.6) rotate(25deg);
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
    background-color: #353b48;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s linear;
    &:hover {
        background-color: #48dbfb;
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
        background-color: #353b48;
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
    .btnZone {
        width: 180px;
        background-color: transparent;
        color: #48dbfb;
        font-size: 16px;
        border: 2px solid #48dbfb;
        padding: 0;
        margin-left: auto;
        cursor: pointer;
        transition: 0.3s linear;
    }
    .btnZone:hover {
        background-color: #48dbfb;
        color: #fff;
    }
    @media screen and (max-width: 600px) {
        .nameZone,
        .emailZone {
            max-width: 100%;
        }
    }
`;

export const StyledFooter = styled.footer`
    background: url("/assets/bg.jpg") no-repeat center;
    color: #fff;
    padding: 80px 0;
    text-align: center;
`;

export const StyledCopyrightBlock = styled.div`
    margin-bottom: 20px;
    font-size: 15px;
    a {
        font-size: 16px;
        color: #48dbfb;
        font-weight: 500;
    }
`;

export const StyledGoTopBtn = styled.button`
    position: fixed;
    z-index: 999;
    bottom: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    background: url("/assets/arrow-up.svg") no-repeat center / contain;
    background-size: 25px 25px;
    background-color: #48dbfb;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
`;
