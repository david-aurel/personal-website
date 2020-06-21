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
                <h2>
                    Let's build intuitive, functional, responsive and aesthetic
                    web apps. Let's create something worthwhile that makes our
                    lives more enjoyable. Let's make it accessible. Let's have
                    fun!
                    <span>Let's do it together ❤️</span>
                </h2>

                <a
                    className="button"
                    href="https://drive.google.com/file/d/1BH7uf5ls8I7pcpljlv782PjjbO4jH335/view?usp=sharing"
                >
                    Resume
                </a>
            </div>
        </div>
    )
}

export default About
