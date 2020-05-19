import React from 'react'
import { Link } from 'gatsby'
import Image from './image'

const Projects = ({ data }) => {
    return (
        <div className="page projectsNav">
            {data.map((el, id) => {
                el = el.node.frontmatter

                return (
                    <Link to={`${el.path}`} key={id}>
                        <div className="thumbnail-text">
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

export default Projects
