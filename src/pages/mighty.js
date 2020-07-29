import { Link } from "gatsby"
import React from "react"
import "../styles/styles.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// Import Components
import Header from "../components/header"
import Footer from "../components/footer"

const Mighty = () => {
  const data = useStaticQuery(graphql`
    query {
      annotations: file(relativePath: { eq: "mighty-annotations.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      companiesDetail: file(
        relativePath: { eq: "mighty-companies-detail.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      companiesOverview: file(
        relativePath: { eq: "mighty-companies-overview.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      conceptModel: file(relativePath: { eq: "mighty-concept-model.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dealsDetail: file(relativePath: { eq: "mighty-deals-detail.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dealsOverview: file(relativePath: { eq: "mighty-deals-overview.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      findings: file(relativePath: { eq: "mighty-findings.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ia1: file(relativePath: { eq: "mighty-ia1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ia2: file(relativePath: { eq: "mighty-ia2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ia3: file(relativePath: { eq: "mighty-ia3.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      investmentDetails: file(
        relativePath: { eq: "mighty-investments-detail.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      investmentOverview: file(
        relativePath: { eq: "mighty-investments-overview.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      qDetails: file(relativePath: { eq: "mighty-q-detail.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      qOverview: file(relativePath: { eq: "mighty-q-overview.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      workshop: file(relativePath: { eq: "mighty-workshop.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
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
              The <Link to="https://www.mightyportfolio.com/">Mighty</Link> team
              had a vision – to create a product disciplined enough to edify,
              but flexible in addressing the diverse needs of the 21st century
              investor. <br />
              <br />
              EchoUser was engaged to conduct an end-to-end research study and
              completely redesign the existing product.
            </p>
          </div>
          <div className="project-components">
            <div className="component-1">
              <h3>Skills</h3>
              <p>
                User research, concept modeling, wireframing, prototyping &
                validation testing, hi-fidelity design
              </p>
            </div>
            <div className="component-2">
              <h3>Team</h3>
              <p>
                Conner Hunihan (Design Lead, Project Manager)
                <br />
                Yiying Lin (UX Designer)
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
                How might we design complex, technical workflows in a way that
                simplifies users’ everyday lives?
              </p>
              <p>
                How might we put information to work for users to create
                additional value?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>
            A comprehensive product experience starts with an aligned team
          </h3>
          <p>
            A Guiding Principles workshop was conducted remotely on Miro boards,
            kicking the project off and aligning the team’s individual
            aspirations, goals, and concerns about the product. Synthesizing
            these into a cohesive Mission Statement and Guiding Principles set
            guide rails for the project, and established success criteria for
            the product.
          </p>
          <Img
            style={{ width: "100%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.workshop.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>
            Utilizing mixed methods research to streamline the existing platform
            and discover new product opportunities
          </h3>
          <p>
            15 interviews were conducted across two research studies, including
            a mix of users and non-users, as well as a variety of roles in the
            venture capital community. 350+ observations were affinity mapped
            into two sets of findings:{" "}
            <b>suggestions on how to streamline the existing product</b> and{" "}
            <b>recommendations on new features to deliver novel value.</b>
          </p>
          <Img
            style={{ width: "66%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.findings.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        {/* <div className="half-width"> */}
        <div className="paragraph top-margin">
          <ul>
            <li>
              <div>
                <h3>Concept modeling the new platform to prioritize efforts</h3>
                <p>
                  The two sets of findings were crystalized into a concept model
                  for the product. Modeling in low-fidelity, abstract terms
                  allowed the team to explore new functionality and prioritize
                  across a multi-year roadmap. The ultimate artefact set a
                  horizon for the new product, outlining both improvements and
                  novel feature design that would be required.
                </p>
              </div>
            </li>
            <li>
              <div>
                <Img
                  style={{ width: "50%", margin: "0% auto 0 auto" }} // top right bottom left
                  fluid={data.conceptModel.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>
            Rebasing the information architecture and platform UI to improve
            immediate usability
          </h3>
          <p>
            To align with users’ mental models, a revised information
            architecture was proposed that centered around concepts of ‘people’
            and ‘companies’. Research revealed that most users conduct in-depth
            analysis only once a quarter – if that – so detailed data and
            functionality were structured behind higher level representations in
            the UI, thereby optimizing usage for the most frequent use cases.
          </p>
          <div className="paragraph">
            <ul>
              <li>
                <div>
                  <Img
                    style={{ width: "100%", margin: "5% auto 0 auto" }} // top right bottom left
                    fluid={data.ia1.childImageSharp.fluid}
                  />
                </div>
              </li>
              <li>
                <div>
                  <Img
                    style={{ width: "100%", margin: "5% auto 0 auto" }} // top right bottom left
                    fluid={data.ia2.childImageSharp.fluid}
                  />
                </div>
              </li>
              <li>
                <div>
                  <Img
                    style={{ width: "100%", margin: "5% auto 0 auto" }} // top right bottom left
                    fluid={data.ia3.childImageSharp.fluid}
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
                <h3>Improving collaboration on deals</h3>
                <p>
                  All users interviewed highlighted the criticality of good
                  office collaboration. To support this, concepts of ownership,
                  validation, and referral history were introduced to deals,
                  along with an integrated activity feed.
                </p>
              </div>
            </li>
            <li>
              <div>
                <Img
                  style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
                  fluid={data.dealsOverview.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="large-left-right-margin">
        <Img
          style={{ width: "85%", margin: "5% auto 0 auto" }} // top right bottom left
          fluid={data.dealsDetail.childImageSharp.fluid}
        />
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <ul>
            <li>
              <div>
                <h3>Restructuring investments</h3>
                <p>
                  Research revealed that most users prefer to conduct analysis
                  offline in excel, so the investments section of the app was
                  completely redesigned into a structured data grid with robust
                  filtering and exporting capabilities.
                </p>
              </div>
            </li>
            <li>
              <div>
                <Img
                  style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
                  fluid={data.investmentOverview.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="large-left-right-margin">
        <Img
          style={{ width: "85%", margin: "5% auto 0 auto" }} // top right bottom left
          fluid={data.investmentDetails.childImageSharp.fluid}
        />
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <ul>
            <li>
              <div>
                <h3>New functionality: letting users play with their data</h3>
                <p>
                  Research suggested that while tight data structures support
                  the majority of use cases, users routinely need unfettered, ad
                  hoc access to their data. “People” and “Company” sections were
                  therefore created and designed to provide multiple layers of
                  sub-navigation, along with robust filtering and export
                  capabilities.
                </p>
              </div>
            </li>
            <li>
              <div>
                <Img
                  style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
                  fluid={data.companiesOverview.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="large-left-right-margin">
        <Img
          style={{ width: "85%", margin: "5% auto 0 auto" }} // top right bottom left
          fluid={data.companiesDetail.childImageSharp.fluid}
        />
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <ul>
            <li>
              <div>
                <h3>‘Queue’ – a novel email integration</h3>
                <p>
                  Modeled after observed existing behavior, the new ‘Queue’
                  feature allows for users to triage their existing email
                  inboxes. By forwarding emails to an address that automatically
                  imports and stages for processing, Queue brings large-office
                  capabilities to users of any size.
                </p>
              </div>
            </li>
            <li>
              <div>
                <Img
                  style={{ width: "75%", margin: "5% auto 0 auto" }} // top right bottom left
                  fluid={data.qOverview.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="large-left-right-margin">
        <Img
          style={{ width: "85%", margin: "5% auto 0 auto" }} // top right bottom left
          fluid={data.qDetails.childImageSharp.fluid}
        />
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph top-margin">
          <h3>Validating the redesign to create a product roadmap</h3>
          <p style={{ margin: "0% 0% 5% 0%" }}>
            A clickable prototype was created and tested with users in order to
            generate a roadmap for what to build, and when.
          </p>
          <div className="smallest-left-right-margin">
            <div className="yt-iframe-container">
              <iframe
                className="responsive-iframe"
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/g1eAZ58wRmk"
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
          <h3>Annotating final designs for handoff</h3>
          <p>
            Final designs were annotated to document logic and interaction
            details, as well as areas earmarked for further refinement.
          </p>
          <Img
            style={{ width: "85%", margin: "5% auto 10% auto" }} // top right bottom left
            fluid={data.annotations.childImageSharp.fluid}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Mighty
