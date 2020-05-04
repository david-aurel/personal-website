import React from 'react'
import Image from './image'

const About = () => {
    return (
        <div className="page about">
            <Image
                className="david"
                alt="david smiling"
                filename="personal.jpg"
            />
            <div className="about-text-wrapper">
                <h1>Hi, I'm David!</h1>
                <h2 className="italic subtitle">
                    Frontend Engineer. UX Enthusiast.
                </h2>
                <p className="bold">
                    Creating responsive and intuitive web applications with a
                    dedication to aesthetics, functionality and accessibility.
                </p>
                <p>Based in Berlin, Germany.</p>
                <a href="https://drive.google.com/open?id=1ymfV901wk0riGHlriq9fKTj8xbcojZbc">
                    <button className="button">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default About
