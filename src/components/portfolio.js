import React from 'react'
import { Link } from 'gatsby'
import Image from './image'

const Portfolio = ({ data }) => {
    return (
        <div className="page portfolioNav">
            {data.map((el, id) => {
                el = el.node.frontmatter

                return (
                    <Link to={`${el.path}`} key={id}>
                        <div className="thumnail-text">
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>
                        </div>
                        <Image
                            alt={`${el.title}`}
                            filename={el.thumbnail}
                            className="thumbnail"
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default Portfolio
