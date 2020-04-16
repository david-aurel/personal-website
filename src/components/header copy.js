import React from "react"
import Animation from "./animation"

const Header = () => {
  return (
    <header className="header">
      <div className="flex-header">
        <div className="title">
          <h1>David Durlan,</h1>
          <h3>frontend engineer.</h3>
        </div>
        <a href="/animation">
          <Animation />
        </a>
      </div>
    </header>
  )
}

export default Header
