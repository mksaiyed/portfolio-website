import Head from "next/head";
import React from "react";

const MetaTags = () => {
    return (
        <Head>
            <title>Portfolio Website ✨ | JavaScript Developer 👨‍💻</title>
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
            {/* <meta
                property="og:title"
                content="Portfolio Website ✨ | JavaScript Developer 👨‍💻"
            />
            <meta
                property="og:description"
                content="MohammadKaif here, a JavaScript Developer who loves coding and creating unique content❤️."
            />
            <meta
                property="og:keyword"
                content="portfolio, javascript, react js, next js,web developer, web design, developer, coder"
            />
            <meta property="og:image" content="https://example.com/image.jpg" />
            <meta property="og:url" content="https://example.com" />
            <meta property="og:type" content="website" /> */}
        </Head>
    );
};

export default MetaTags;
