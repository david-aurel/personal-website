import React from "react"
import { Link } from "gatsby"
import Image from "./image"

const Portfolio = ({ data }) => {
  return (
    <div className="page portfolioNav">
      {data.map((el, id) => {
        el = el.node.frontmatter

        return (
          <Link to={`${el.path}`} key={id}>
            <Image alt={`${el.title}`} filename={el.thumbnail} />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Portfolio
