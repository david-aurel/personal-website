import React from "react"
import { Link } from "gatsby"
const Portfolio = ({ data }) => {
  return (
    <div className="portfolioWrapper">
      {data.map((el, id) => {
        el = el.node.frontmatter
        return (
          <Link to={`${el.path}`} key={id}>
            <p>{el.title}</p>
            <p>{el.description}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Portfolio
