import React from "react"
import { Link } from "gatsby"

const Blog = ({ data }) => {
  return (
    <div className="page blogNav">
      {data.map((el, id) => {
        el = el.node.frontmatter
        return (
          <Link to={`${el.path}`} key={id}>
            <h3>{el.title}</h3>
            <p>{el.date}</p>
            <p>{el.description}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Blog
