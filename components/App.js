import React, { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import { StyledGoTopBtn, StyledLoader } from "./CommonStyledComp";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import Footer from "./Footer";
import Header from "./Header";
import HomeSection from "./HomeSection";
import MetaTags from "./MetaTags";
import ServiceSection from "./ServiceSection";
import WorkSection from "./WorkSection";
import BackgroundCanvas from "./BackgroundCanvas";
import BackgroundBubbles from "./BackgroundBubbles";

const App = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
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
            {!isLoading ? (
                <>
                    {/* <BackgroundCanvas /> */}
                    <BackgroundBubbles />
                    <MetaTags />
                    <Header isSticky={isSticky} />
                    <HomeSection />
                    <AboutSection />
                    <ServiceSection dark />
                    <EducationSection />
                    <WorkSection dark />
                    <ContactSection />
                    <Footer />
                    {isSticky && (
                        <StyledGoTopBtn onClick={() => window.scroll(0, 0)} />
                    )}
                </>
            ) : (
                <StyledLoader>
                    <span className="loader"></span>
                </StyledLoader>
            )}
        </>
    );
};

export default App;
