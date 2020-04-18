import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [initSlider, setInitSlider] = useState("")
  useEffect(() => {
    setInitSlider(location.pathname.split("/")[1])
  }, [])

  return (
    <>
      <Nav initSlider={initSlider} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
