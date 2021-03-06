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
      <div className="full-vh">
        <div className="small-left-right-margin">
          <div className="banner project">
            <p>
              Evaluative & generative user research, week-long remote workshop
              facilitation, wireframe prototyping and hi-fidelity design of a
              support platform that merged various administrative tools into a
              single product experience.
            </p>
          </div>
          <div className="project-components">
            <div className="component-1">
              <h3>Skills</h3>
              <p>User research, prototyping, hi-fidelity design</p>
            </div>
            <div className="component-2">
              <h3>Team</h3>
              <p>
                Lilian Qian (Design Lead)
                <br />
                Conner Hunihan (UX Designer)
              </p>
            </div>
            <div className="component-3">
              <h3>Duration</h3>
              <p>2 months</p>
            </div>
            <div className="component-4">
              <h3>Essential Questions</h3>
              <p>
                How might the design enable business units to operate
                independently?
              </p>
              <p>
                How can the product support users in being more responsive to
                real-world retail fluctuations?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="small-left-right-margin">
        <div className="paragraph protected">
          {/* <h3>This is a title</h3> */}
          <h3>
            Due to NDA restrictions, the details of this project are only
            available for anonymized, in-person discussion.
          </h3>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Mighty
