import Head from "next/head";
import React, { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import { StyledGoTopBtn } from "./CommonStyledComp";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import Footer from "./Footer";
import Header from "./Header";
import HomeSection from "./HomeSection";
import ServiceSection from "./ServiceSection";
import WorkSection from "./WorkSection";

const App = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > 20) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };
        if (typeof window !== "undefined") {
            if (window.scrollY > 20) {
                setIsSticky(true);
            }
            const loader = document.getElementById("globalLoader");
            if (loader) console.log("Loader", loader);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Portfolio Website ✨| JavaScript Developer 👨‍💻</title>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="description"
                    content="MohammadKaif here, a JavaScript Developer who loves coding and creating unique content❤️."
                />
                <meta
                    name="keyword"
                    content="portfolio, javascript, react js, next js,web developer, web design, developer, coder"
                />
                <meta name="robots" content="index, follow" />
                {/* <meta property="og:title" content="Portfolio Website ✨"/>
                <meta property="og:description" content="MohammadKaif here, a JavaScript Developer who loves coding and creating unique content❤️." />
                <meta property="og:keyword" content="portfolio, javascript, react js, next js,web developer, web design, developer, coder" />
                <meta property="og:image" content="https://example.com/image.jpg"/>
                <meta property="og:url" content="https://example.com" />
                <meta property="og:type" content="website" /> */}
            </Head>
            <Header isSticky={isSticky} />
            <HomeSection />
            <AboutSection />
            <ServiceSection dark />
            <EducationSection />
            <WorkSection dark />
            <ContactSection />
            <Footer />
            {isSticky && <StyledGoTopBtn onClick={() => window.scroll(0, 0)} />}
        </>
    );
};

export default App;
