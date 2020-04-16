import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Animation from "../components/animation"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="flex-header">
      <div className="title">
        <h1>
          <Link to="/">{siteTitle},</Link>
        </h1>
        <h3>frontend enthusiast.</h3>
      </div>
      <a href="/animation">
        <Animation />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
