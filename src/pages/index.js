import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate("/portfolio")
  })
  return null
}

export default IndexPage
