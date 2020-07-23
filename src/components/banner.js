import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      cc: file(relativePath: { eq: "cc.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      autodesk: file(relativePath: { eq: "autodesk.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nueva: file(relativePath: { eq: "nueva.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ccwip: file(relativePath: { eq: "ccwip.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="small-left-right-margin">
      <div className="banner">
        <p>
          Hello, I’m Conner — a user experience designer with a focus on UI/UX,
          user research, and service design.
        </p>
      </div>
    </div>
  )
}

export default Banner
