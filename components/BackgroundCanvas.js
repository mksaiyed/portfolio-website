import React, { useEffect, useRef } from "react";
import { StyledBackgroundCanvas } from "./CommonStyledComp";

const BUBBLES_SIZE = {
    web_4k: 50,
    web_2k: 35,
    mobile: 20,
};

const BackgroundCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const c = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const mouse = {
            x: undefined,
            y: undefined,
        };

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        function Circle() {
            this.radius = getRandomInt(30);
            this.originalSize = this.radius;
            this.x =
                Math.random() * (innerWidth - this.radius * 2) + this.radius;
            this.y =
                Math.random() * (innerHeight - this.radius * 2) + this.radius;
            this.gradient = Math.random();
            this.color =
                "rgba(" +
                getRandomInt(255) +
                "," +
                getRandomInt(255) +
                "," +
                getRandomInt(255) +
                "," +
                this.gradient +
                ")";
            this.xVelocity = 2 * (Math.random() - Math.random());
            this.yVelocity = 2 * (Math.random() - Math.random());
            this.draw = function () {
                // c.font = 'lighter 80px sans-serif';
                // c.fillStyle = '#dedede';
                // c.textAlign = 'center';
                // c.fillText('Bouncing Bubbles', canvas.width/2, canvas.height/2);
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.strokeStyle = this.color;
                c.stroke();
                c.fillStyle = this.color;
                c.fill();
                this.update();
            };
            this.update = function () {
                if (
                    this.x + this.radius > innerWidth ||
                    this.x - this.radius < 0
                ) {
                    this.xVelocity = -this.xVelocity;
                }
                if (
                    this.y + this.radius > innerHeight ||
                    this.y - this.radius < 0
                ) {
                    this.yVelocity = -this.yVelocity;
                }
                this.x += this.xVelocity;
                this.y += this.yVelocity;

                if (
                    mouse.x - this.x < 50 &&
                    mouse.x - this.x > -50 &&
                    mouse.y - this.y < 50 &&
                    mouse.y - this.y > -50
                ) {
                    if (this.radius < 75) {
                        this.radius += 2;
                    }
                } else if (this.radius !== this.originalSize) {
                    this.radius -= 2;
                }
            };
        }

        const circleArray = [];
        const bubbles =
            window.innerWidth < 600
                ? BUBBLES_SIZE.mobile
                : window.innerWidth < 1400
                ? BUBBLES_SIZE.web_2k
                : BUBBLES_SIZE.web_4k;
        for (var i = 0; i < bubbles; i++) {
            circleArray.push(new Circle());
        }

        function animate() {
            c.clearRect(0, 0, innerWidth, innerHeight);
            for (var i = 0; i < circleArray.length; i++) {
                circleArray[i].draw();
            }
            requestAnimationFrame(animate);
        }
        animate();
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <StyledBackgroundCanvas id="canvas" ref={canvasRef} />;
};

export default BackgroundCanvas;
