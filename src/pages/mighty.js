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
              Evaluative & generative user research, wireframing and prototyping
              to redesign an existing venture capital product for{" "}
              <Link to="https://www.mightyportfolio.com/">Mighty</Link>.
            </p>
          </div>
          <div className="project-components">
            <div className="component-1">
              <h3>Skills</h3>
              <p>
                User research, concept modeling, wireframing, prototyping,
                validation testing, hi-fidelity design
              </p>
            </div>
            <div className="component-2">
              <h3>Team</h3>
              <p>
                Conner Hunihan (Design Lead)
                <br />
                Yi-ying Lin (UX Designer)
                <br />
                Rally Pugalayan (Account Manager)
              </p>
            </div>
            <div className="component-3">
              <h3>Duration</h3>
              <p>6 months</p>
            </div>
            <div className="component-4">
              <h3>Essential Questions</h3>
              <p>
                How might we support complex, technical workflows, while also
                simplifying users’ everyday lives?
              </p>
              <p>
                How might we put information to work for users in a way that
                creates additional value?
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
            available for in-person presentation.
          </h3>
        </div>
      </div>
      {/* <div className="large-left-right-margin">
        <div className="half-width">
          <div className="paragraph">
            <h3>This is a title</h3>
            <p>
              Equal parts CRM, finance manager, and collaboration tool, they
              reached out to EchoUser to research and design the platform.
              Working in tandem with an outside branding agency, EchoUser
              developed and tested a prototype to validate the direction,
              ultimately delivering production-level designs for the near,
              medium, and long-term product roadmap.
            </p>
          </div>
        </div>
        <div className="half-width image-right">
          <Img fluid={data.apple.childImageSharp.fluid} />
        </div>
      </div>
      <div className="large-left-right-margin">
        <div className="half-width image-left">
          <Img fluid={data.apple.childImageSharp.fluid} />
        </div>

        <div className="half-width">
          <div className="paragraph">
            <h3>This is a title</h3>
            <p>
              Equal parts CRM, finance manager, and collaboration tool, they
              reached out to EchoUser to research and design the platform.
              Working in tandem with an outside branding agency, EchoUser
              developed and tested a prototype to validate the direction,
              ultimately delivering production-level designs for the near,
              medium, and long-term product roadmap.
            </p>
          </div>
        </div>
      </div>
      <div className="large-left-right-margin">
        <div className="paragraph">
          <Img fluid={data.apple.childImageSharp.fluid} />
          <h3>This is a title</h3>
          <p>
            Equal parts CRM, finance manager, and collaboration tool, they
            reached out to EchoUser to research and design the platform. Working
            in tandem with an outside branding agency, EchoUser developed and
            tested a prototype to validate the direction, ultimately delivering
            production-level designs for the near, medium, and long-term product
            roadmap.
          </p>
        </div>
      </div> */}

      <Footer />
    </div>
  )
}

export default Mighty
