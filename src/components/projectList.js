import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectList = () => {
  return (
    <div className="outer-container">
      <div className="project-list">
        <div>
          <Link to="/autodesk">
            <h3>Autodesk</h3>
            <p>Simplifying access to big data.</p>
          </Link>
        </div>
        <div>
          <Link to="/mighty">
            <h3>Mighty</h3>
            <p>Modernizing venture capital workflows.</p>
          </Link>
        </div>
        <div>
          <Link to="/apple">
            <h3>Apple</h3>
            <p>Unifying the administrative experience.</p>
          </Link>
        </div>
        <div>
          <Link to="/cc">
            <h3>Creative Commons</h3>
            <p>Redefining how we all license content.</p>
          </Link>
        </div>
        <div>
          <Link to="/nueva">
            <h3>Nueva</h3>
            <p>Building culture, with story.</p>
          </Link>
        </div>
        <div>
          <Link to="/ccwip">
            <h3>CCWIP</h3>
            <p>Simplifying state-wide data reporting.</p>
          </Link>
        </div>
        <div>
          <Link to="/ucberkeley">
            <h3>UC Berkeley</h3>
            <p>Improving enrollment.</p>
          </Link>
        </div>
        <div>
          <Link to="/scisip">
            <h3>NSF</h3>
            <p>Advancing innovation policy.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
