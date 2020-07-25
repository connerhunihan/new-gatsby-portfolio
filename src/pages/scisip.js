import { Link } from "gatsby"
import React from "react"
import "../styles/styles.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// Import Components
import Header from "../components/header"
import Footer from "../components/footer"

const Autodesk = () => {
  const data = useStaticQuery(graphql`
    query {
      contentSubmission: file(
        relativePath: { eq: "scisip-contentSubmission.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      final: file(relativePath: { eq: "scisip-final.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      minnow: file(relativePath: { eq: "scisip-minnow-work.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wireframes: file(relativePath: { eq: "scisip-wireframes.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      architecture1: file(
        relativePath: { eq: "scisip-website-framework-v0.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      architecture2: file(
        relativePath: { eq: "scisip-website-framework-v2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Header />
      <div className="full-vh">
        <div className="small-left-right-margin">
          <div className="banner project">
            <p>
              The{" "}
              <Link to="https://www.nsf.gov/">National Science Foundation</Link>{" "}
              created the Science of Science and Innovation Policy (SciSIP) in
              2006 to fund policy making research in science and innovation.
              <br />
              <br />
              In 2018, a grant was acquired to research, design, and develop a
              central publishing platform to help guide that research into the
              mainstream, general public.
            </p>
          </div>
          <div className="project-components">
            <div className="component-1">
              <h3>Skills</h3>
              <p>
                User research, concept development, product management,
                wireframing
              </p>
            </div>
            <div className="component-2">
              <h3>Team</h3>
              <p>
                Conner Hunihan (Product Manager, UX Design) <br />
                Kathy Lee (Researcher)
                <br />
                MIGHTYminnow (Design Lead and Development)
              </p>
            </div>
            <div className="component-3">
              <h3>Duration</h3>
              <p>16 weeks</p>
            </div>
            <div className="component-4">
              <h3>Essential Questions</h3>
              <p>
                How might innovation research be presented in a way that's
                digestible and resonant with the general public?
              </p>
              <p>
                How might the design of the platform galvanize researchers to
                participate?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div
          style={{ margin: "10% auto 0 auto" }}
          className="paragraph small-top-bottom-margin"
        >
          <h3>Obtaining content while shaving time off the schedule</h3>
          <p>
            The team faced an immediate hurdle in getting their hands on content
            for the platform. To resolve this, an email campaign was designed
            and sent to over 300 Principal Investigators (PIs) and co-PIs. The
            email directed users to a Typeform, who’s questionnaire
            automatically populated a spreadsheet, cleaning the data as it was
            submitted. This enabled the development team to move content onto
            the platform much more quickly than originally scoped.
          </p>
          <Img
            style={{ width: "75%", margin: "7% auto 0 auto" }} // top right bottom left
            fluid={data.contentSubmission.childImageSharp.fluid}
          />
        </div>
      </div>

      <div
        style={{ margin: "10% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <h3>
            A publishing platform? A social network? Or a program marketing
            tool?
          </h3>
          <p>
            While the initial focus of the project was to design a publishing
            platform for policy research, interviews with users suggested
            alternative motives. For example, many PIs spoke of their interest
            in keeping tabs on colleagues. University research teams also
            expressed a need to promote themselves, as a unit, beyond their
            immediate academic circles. Staff also wanted the site to advertise
            the success of the SciSIP program, and to use the platform to reach
            potential applicants.
          </p>
        </div>
      </div>

      <div
        style={{ margin: "3% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <ul>
            <li>
              <div>
                <h3>
                  <strike>Purely publishing & marketing</strike>
                </h3>
                <p>
                  An information architecture that focuses on core concepts of
                  the SciSIP program and funded research was mocked up and
                  shared with administrators for feedback. Immediately, the team
                  realized that PIs needed to be featured more prominently.
                </p>
              </div>
            </li>
            <li>
              <div className="half-width">
                <Img
                  style={{ width: "85%", margin: "0 auto 0 auto" }} // top right bottom left
                  fluid={data.architecture1.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{ margin: "5% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <ul>
            <li>
              <div>
                <h3>Research + Community + Program</h3>
                <p>
                  The final structure of the site places equal emphasis on
                  research content, the community of PIs, and the SciSIP
                  program. The exercise also helped refine the categorization
                  schema of research.
                </p>
              </div>
            </li>
            <li>
              <div className="half-width">
                <Img
                  style={{ width: "85%", margin: "0 auto 0 auto" }} // top right bottom left
                  fluid={data.architecture2.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div style={{ margin: "10% auto 10% auto" }} className="paragraph">
          <h3>
            Wireframing to refine feature functionality and content
            representation
          </h3>
          <p>
            Research, community, and program content are all very different in
            nature, so wireframe prototypes were created to craft the nuance in
            where – and how – content is surfaced to users.
          </p>
          <Img
            style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.wireframes.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        <div
          style={{ margin: "10% auto 10% auto" }}
          className="paragraph small-top-bottom-margin"
        >
          <h3>Handing design over to MIGHTYminnow</h3>
          <p>
            With the core information architecture and basic site functionality
            defined, design and development efforts were handed over to{" "}
            <Link to="https://www.mightyminnow.com/">MIGHTYminnow</Link>. They
            created a working prototype (left) and brought the platform to life
            in through multiple, higher-fidelity design iterations (right).
          </p>
          <Img
            style={{ width: "100%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.minnow.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        <div
          style={{ margin: "10% auto 10% auto" }}
          className="paragraph small-top-bottom-margin"
        >
          <h3>The finished product</h3>
          <p>
            The{" "}
            <Link to="https://sih.berkeley.edu/">
              Science and Innovation Hub (SIH)
            </Link>
            launched in the fall of 2018. It is actively managed by the Coleman
            Fung Institute for Engineering Leadership with ongoing support from
            the National Science Foundation.
          </p>
          <Img
            style={{ width: "100%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.final.childImageSharp.fluid}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Autodesk
