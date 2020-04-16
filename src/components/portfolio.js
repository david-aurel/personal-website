import React from "react"
import { Link } from "gatsby"
import Image from "./image"

const Portfolio = ({ data }) => {
  return (
    <div className="portfolioWrapper portfolioThumb">
      {data.map((el, id) => {
        el = el.node.frontmatter

        return (
          <Link to={`${el.path}`} key={id}>
            <Image alt={`${el.title} thumbnail`} filename={el.thumbnail} />
            <p>{el.title}</p>
            <p>{el.description}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Portfolio
