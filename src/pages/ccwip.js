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
      designSystem1: file(relativePath: { eq: "ccwip-design-system-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designSystem2: file(relativePath: { eq: "ccwip-design-system-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      existingReport: file(
        relativePath: { eq: "ccwip-existing-report-flow.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ia: file(relativePath: { eq: "ccwip-ia.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      idealFlow: file(relativePath: { eq: "ccwip-ideal-flow.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mentalModel: file(relativePath: { eq: "ccwip-mental-model.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mostPopular: file(relativePath: { eq: "ccwip-most-popular.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      persona: file(relativePath: { eq: "ccwip-persona.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reportFinal: file(relativePath: { eq: "ccwip-report-final.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      roadmap: file(relativePath: { eq: "ccwip-roadmap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smallMultiples: file(relativePath: { eq: "ccwip-small-multiples.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      userMatrix: file(relativePath: { eq: "ccwip-user-matrix.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      preconfigured: file(relativePath: { eq: "ccwip-preconfigured.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
              <Link to="https://ccwip.berkeley.edu/">
                California Child Welfare Indicators Project
              </Link>{" "}
              transforms raw data from Social Services into reports, which are
              publicly available on its website. <br /> <br /> Ten years of
              continuous development had left the site bloated, making reporting
              data frustratingly difficult to use.
            </p>
          </div>
          <div className="project-components">
            <div className="component-1">
              <h3>Skills</h3>
              <p>
                User research, prototyping, concept validation, design system
              </p>
            </div>
            <div className="component-2">
              <h3>Team</h3>
              <p>
                Conner Hunihan (UX Designer) <br />
                Ashish Sur (UX Designer) <br />
                Kaushiki Priyam (UX Designer)
                <br />
                Katherine Qiu (UX Designer)
              </p>
            </div>
            <div className="component-3">
              <h3>Duration</h3>
              <p>4 weeks</p>
            </div>
            <div className="component-4">
              <h3>Essential Questions</h3>
              <p>
                How to design a search experience for users who aren’t sure what
                they are looking for?
              </p>
              <p>How can a search experience be educational?</p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ margin: "10% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div>
          <div className="paragraph">
            <ul>
              <li>
                <div>
                  <h3>How do child welfare workers use data?</h3>
                  <p>
                    To develop an intuition for how child welfare workers
                    approach data, information sessions were conducted with
                    CCWIP staff, and background research was conducted on
                    California’s child welfare system. A matrix of use cases was
                    developed that outlined not only the various user groups,
                    but their data-relevant characteristics, as well.
                  </p>
                </div>
              </li>
              <li>
                <div className="half-width">
                  <Img
                    style={{ width: "100%", margin: "10% auto 0 auto" }} // top right bottom left
                    fluid={data.userMatrix.childImageSharp.fluid}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <ul>
            <li>
              <div>
                <h3>Framing the opportunity</h3>
                <p>
                  Conversations with CCWIP staff and a content audit of the
                  existing site revealed three critical issues:{" "}
                  <b>unclear hierarchy</b> (users don't how to find data they
                  need), <b>lack of guidance</b> (users don't always know what
                  metric to look for) and <b>poor navigation</b> (users need to
                  jump between measures and reports). Synthesizing these issues
                  into a single problem statement gave structure to the project
                  and the team’s design approach.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p
                  style={{
                    color: "#c0c0c0",
                    fontSize:
                      "calc(27px + (35 - 27) * ((100vw - 300px) / (1600 - 300)))",
                    lineHeight:
                      "calc(2.4rem + (3.5 - 2.4) * ((100vw - 300px) / (1600 - 300)))",
                    letterSpacing: "0.14rem",
                    fontWeight: 100,
                    margin: "10% auto 0 auto",
                  }}
                >
                  <em>
                    How might the selection experience also educate users on the
                    process and technical details of a license?
                  </em>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>Prioritizing a single user group</h3>
          <p>
            Collaborating with CCWIP staff, two personas were developed to
            represent two of the keys users of the CCWIP website: County Analyst
            John and Reporter Amanda. County Analyst John was ultimately
            selected as the most critical persona to design for because he
            represents the largest population of users on the CCWIP site.
          </p>
          <Img
            style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.persona.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        <div>
          <div className="paragraph top-margin">
            <ul>
              <li>
                <div>
                  <h3>Modeling the intended interaction</h3>
                  <p>
                    With a design objective and primary user defined, the team
                    defined an ideal user flow through the CCWIP website. This
                    would become the bedrock user flow onto which the rest of
                    the website was designed.
                  </p>
                </div>
              </li>
              <li>
                <div className="half-width">
                  <Img
                    style={{ width: "100%", margin: "10% auto 0 auto" }} // top right bottom left
                    fluid={data.idealFlow.childImageSharp.fluid}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>
            Creating an information architecture that supports both novice and
            advanced users
          </h3>
          <p>
            Persona John doesn’t always know what report or measure he is
            looking for, so the site was organized around the actual "Measures”
            themselves, as well as categorical “Topics”. This created a more
            flexible navigation system that caters to seasoned veterans, as well
            as analysts who might be exploring a new data domain. The site
            already had a personalized dashboard feature of most popular reports
            that was also incorporated.
          </p>
          <Img
            style={{ width: "50%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.ia.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>
            Choice overload was leading to long load times and excessive
            navigation
          </h3>
          <p>
            CCWIP’s existing site required users to complete a three-step
            process to arrive at a single dataset. Since an average session
            requires over a dozen reports, users were forced to endure hours of
            unnecessary load times and duplicative navigation.
          </p>
          <Img
            style={{ width: "75%", margin: "7% auto 0 auto" }} // top right bottom left
            fluid={data.existingReport.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        <div>
          <div className="paragraph top-margin">
            <ul>
              <li>
                <div>
                  <h3>Design for lateral navigation between reports</h3>
                  <p>
                    To support the kind of movement across the site that users
                    needed, the report navigation experience was designed around
                    users’ mental model of how to find information. Starting
                    first with their geography of interest and timeframe, users
                    next consider the specific measure and will reference a
                    visualization for confirmation. Sub-groups and specific
                    notes are sometimes required to verify details and changes.
                  </p>
                </div>
              </li>
              <li>
                <div className="half-width">
                  <Img
                    style={{ width: "75%", margin: "10% auto 0 auto" }} // top right bottom left
                    fluid={data.mentalModel.childImageSharp.fluid}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>Other interactions considered for the reporting page</h3>
          <p>
            Interface components were prototyped with CCWIP staff to identify
            the mechanism(s) that would be most useful to users, in finding
            their reports.{" "}
          </p>
          <p>
            The team was most interested in learning what information needs to
            be customized versus default. Ultimately, a blend was suggested that
            utilizes pre-configured reports, along with similar report
            suggestions.
          </p>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div>
          <div className="paragraph">
            <ul>
              <li>
                <div>
                  <h3>
                    <strike>Pre-configured reports</strike>
                  </h3>
                  <p>
                    In this option, a single report is displayed with
                    configurable settings. This would be ideal for users who
                    often use the same metrics, but need frequent fine-tuning.
                    While ideal for advanced users, the majority need broader
                    customization, at a higher level.
                  </p>
                </div>
              </li>
              <li>
                <div className="half-width">
                  <Img
                    style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
                    fluid={data.preconfigured.childImageSharp.fluid}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph">
          <ul>
            <li>
              <div>
                <h3>
                  <strike>Most popular reports</strike>
                </h3>
                <p>
                  Surfacing most popular reports would give users a dynamic list
                  of the most useful reports. This would have been an ideal
                  choice, if not for the fact that reporting metrics vary
                  significantly between regions and agencies.
                </p>
              </div>
            </li>
            <li>
              <div className="half-width">
                <Img
                  style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
                  fluid={data.mostPopular.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph">
          <ul>
            <li>
              <div>
                <h3>
                  <strike>Small multiples</strike>
                </h3>
                <p>
                  The brute-force option, this design would essentially give
                  users a high-level overview of many different reports and give
                  them tooling to continually refine the filters they apply to
                  these reports. While an ideal design, it would have required
                  quicker loading of more data than the existing backend was
                  capable of.
                </p>
              </div>
            </li>
            <li>
              <div className="half-width">
                <Img
                  style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
                  fluid={data.smallMultiples.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph">
          <h3>Final design: hybrid of pre-configured and similar reports</h3>
          <p>
            The final design transforms a three-step process into a single,
            manipulatable interface by loading a pre-configured (but
            customizable) report, along with similar report suggestions. Not
            only does this simplify the experience, CCWIP staff realized that it
            would dramatically improve querying response time, as well.
          </p>
          <Img
            style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.reportFinal.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>Creating a design system for sustained development</h3>
          <p>
            Building on CCWIPs existing branding, a comprehensive design system
            was developed. The U.S. Web Design System was used as a boilerplate
            template, customized with CCWIP typography, colors, and UI
            components. The design system was uploaded to Zeplin so that CCWIP
            developers had direct access to exact CSS properties and values.
          </p>
          <Img
            style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.designSystem1.childImageSharp.fluid}
          />
          <Img
            style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.designSystem2.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        <div>
          <div className="paragraph top-margin">
            <ul>
              <li>
                <div>
                  <h3>Prioritizing suggested changes in a product roadmap</h3>
                  <p>
                    As a small development team, CCWIP staff would not be able
                    to immediately implement very much of the proposed design
                    work. To help them triage their own efforts, suggested
                    changes were defined and scored in a spreadsheet along
                    dimensions of impact and effort. These values were used to
                    calculate an overall priority score that can be used by
                    CCWIP staff for help determine the project roadmap.
                  </p>
                </div>
              </li>
              <li>
                <div className="half-width">
                  <Img
                    style={{ width: "65%", margin: "5% auto 0 auto" }} // top right bottom left
                    fluid={data.roadmap.childImageSharp.fluid}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>Final prototype</h3>
          <p style={{ margin: "0% 0% 5% 0%" }}>
            The final facilitates the analysts quest to find the data they are
            looking for by catering to both beginner and advanced users.
            Centering the design around lateral movement between reports keeps
            data exploration at the center of the experience, and deployment of
            usability concepts throughout ensures that the site is intuitive and
            consistent.
          </p>
          <div className="smallest-left-right-margin">
            <div className="yt-iframe-container">
              <iframe
                className="responsive-iframe"
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/7SXbwWLRa7I"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <ul style={{ margin: "0 0 10% 0" }}>
            <li>
              <div>
                <h3>Impact</h3>
                <p>
                  Final designs, project roadmap, and Zeplin-ready design system
                  were presented and turned over to the client in the fall of
                  2018. While the client began immediately implementing back-end
                  changes to the site’s information architecture, a 2020 grant
                  allowed staff to completely overhaul the platform,
                  stylistically bringing it in-line with existing UC Berkeley
                  design standards. Many of the recommendations can be seen in
                  the live site, today.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p
                  style={{
                    color: "#c0c0c0",
                    fontSize:
                      "calc(27px + (35 - 27) * ((100vw - 300px) / (1600 - 300)))",
                    lineHeight:
                      "calc(2.4rem + (3.5 - 2.4) * ((100vw - 300px) / (1600 - 300)))",
                    letterSpacing: "0.14rem",
                    fontWeight: 100,
                    margin: "10% auto 0 auto",
                  }}
                >
                  <em>
                    “We asked you to focus on our power users, but your design
                    actually addresses the needs of all our user groups…you
                    solved for more than we knew we could even ask for” <br />–
                    Wendy Wiegmann, CCWIP Project Director
                  </em>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Autodesk
