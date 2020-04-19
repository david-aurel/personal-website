import React from 'react'
import { Link } from 'gatsby'

const Blog = ({ data }) => {
    return (
        <div className="page blogNav">
            {data.map((el, id) => {
                el = el.node.frontmatter
                return (
                    <Link to={`${el.path}`} key={id}>
                        <h2>{el.title}</h2>
                        <p className="italic mainColor">{el.date}</p>
                        <p>{el.description}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Blog
