import { Link } from "gatsby"
import React from "react"
import "../styles/styles.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// Import Components
import Header from "../components/header"
import Footer from "../components/footer"

const Mighty = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     apple: file(relativePath: { eq: "apple.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <Header />
      <div className="small-left-right-margin full-vh">
        <div className="banner project">
          <div className="paragraph protected">
            {/* <h3>This is a title</h3> */}
            <h3>Coming soon.</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Mighty
