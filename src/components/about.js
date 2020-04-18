import React from "react"
import Image from "./image"

const About = () => {
  return (
    <div className="page about">
      <Image alt="david durlan" filename="personal.jpg" />
      <h1>Hi, I'm David!</h1>
      <h4>Frontend Engineer. UX Enthusiast.</h4>
      <p>
        I create responsive and intuitive web applications with a dedication to
        aesthetics, functionality and accessibility
      </p>
    </div>
  )
}

export default About
