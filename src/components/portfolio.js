import React from "react"
import { Link } from "gatsby"
const Portfolio = ({ data }) => {
  return (
    <div className="portfolioWrapper">
      {data.map((el, id) => {
        return (
          <Link to={`/portfolio/${el.node.path}`} key={id}>
            <p>{el.node.title}</p>
            <p>{el.node.description}</p>
            {/* <img src={el.thumbnail} alt="" /> */}
          </Link>
        )
      })}
    </div>
  )
}

export default Portfolio
