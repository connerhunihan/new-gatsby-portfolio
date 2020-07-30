import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectList = () => {
  return (
    <div className="small-left-right-margin">
      <div className="project-list">
        <div>
          <Link to="/autodesk">
            <h3>Autodesk</h3>
            <p>Simplifying big data products.</p>
          </Link>
        </div>
        <div>
          <Link to="/mighty">
            <h3>Mighty</h3>
            <p>Managing venture capital.</p>
          </Link>
        </div>
        <div>
          <Link to="/largetechcompany">
            <h3>Large Technology Company</h3>
            <p>Forging a single administrative experience.</p>
          </Link>
        </div>
        <div>
          <Link to="/cc">
            <h3>Creative Commons</h3>
            <p>Licensing content.</p>
          </Link>
        </div>
        {/* <div>
          <Link to="/nueva">
            <h3>Nueva</h3>
            <p>Building culture, with story.</p>
          </Link>
        </div> */}
        <div>
          <Link to="/ccwip">
            <h3>CCWIP</h3>
            <p>Making child welfare data more accessible.</p>
          </Link>
        </div>
        {/* <div>
          <Link to="/ucberkeley">
            <h3>UC Berkeley</h3>
            <p>Improving enrollment.</p>
          </Link>
        </div> */}
        <div>
          <Link to="/scisip">
            <h3>National Science Foundation</h3>
            <p>Advancing innovation policy.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
