import Head from "next/head";
import React from "react";

const MetaTags = () => {
    return (
        <Head>
            <title>
                {`Mohammadkaif's Portfolio Website ✨ | Web Developer 👨‍💻`}
            </title>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta
                name="title"
                content={`Mohammadkaif's Portfolio Website ✨ | Web Developer 👨‍💻`}
            />
            <meta
                name="description"
                content="Hi, I'm MohammadKaif, a software engineer who loves coding and creating unique content. I have 2.5 years of experience in web development, specialized in React Js and JavaScript ❤️."
            />
            <meta
                name="keyword"
                content="portfolio, javascript, react js, next js, web developer, frontend developer, freelancer, web design, developer, coder, next js, node js, express js"
            />
            <meta name="robots" content="index, follow" />
            <meta
                property="og:title"
                content={`Mohammadkaif's Portfolio Website ✨ | Web Developer 👨‍💻`}
            />
            <meta
                property="og:description"
                content="Hi, I'm MohammadKaif, a software engineer who loves coding and creating unique content. I have 2.5 years of experience in web development, specialized in React Js and JavaScript ❤️."
            />
            <meta
                property="og:keyword"
                content="portfolio, javascript, react js, next js, web developer, frontend developer, freelancer, web design, developer, coder, next js, node js, express js"
            />
            {/* Linkedin image address */}
            <meta
                property="og:image"
                content="https://example.com/image.jpghttps://media.licdn.com/dms/image/D4D03AQGvjRhFrfe5zA/profile-displayphoto-shrink_200_200/0/1702195011616?e=1714003200&v=beta&t=eX9MiMhV0rTuH78Z9dHiWq7FIoCAKZlLa-MELi5fmbM"
            />
            {/* Netlify wensite URL */}
            <meta
                property="og:url"
                content="https://test-portfolio-kaif.netlify.app/"
            />
            <meta property="og:type" content="website" />
        </Head>
    );
};

export default MetaTags;
