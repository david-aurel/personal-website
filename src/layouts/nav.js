import React, { useState } from "react"
import { Link } from "gatsby"

const Nav = ({ initSlider }) => {
  const [sliderState, setSliderState] = useState("slider-portfolio")
  return (
    <nav>
      <div className="navLinks">
        <div className={`slider ${sliderState}`}></div>

        <p className="navLink">
          <Link
            to="/portfolio"
            onClick={() => {
              setSliderState("slider-portfolio")
            }}
          >
            Portfolio
          </Link>
        </p>
        {/* <div className='space'></div> */}
        <p className="navLink">
          <Link
            to="/blog"
            onClick={() => {
              setSliderState("slider-blog")
            }}
          >
            Blog
          </Link>
        </p>
        {/* <div className='space'></div> */}
        <p className="navLink">
          <Link
            to="/about"
            onClick={() => {
              setSliderState("slider-about")
            }}
          >
            About me
          </Link>
        </p>
        {/* <div className='space'></div> */}
        <p className="navLink">
          <Link
            to="/contact"
            onClick={() => {
              setSliderState("slider-contact")
            }}
          >
            Contact
          </Link>
        </p>
      </div>
    </nav>
  )
}

export default Nav
