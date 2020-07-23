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
      cardSorting: file(relativePath: { eq: "autodesk-card-sorting.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      conceptModel: file(relativePath: { eq: "autodesk-concept-model.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feedback: file(relativePath: { eq: "autodesk-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      final: file(relativePath: { eq: "autodesk-final.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      products: file(relativePath: { eq: "autodesk-products.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prototypeTesting: file(relativePath: { eq: "autodesk-prototype.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      serviceBlueprint: file(
        relativePath: { eq: "autodesk-service-blueprint.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      testing: file(relativePath: { eq: "autodesk-testing.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      users: file(relativePath: { eq: "autodesk-users.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Header />
      <div className="outer-container full-vh">
        <div className="banner project">
          <p>
            The <Link to="https://www.autodesk.com/">Autodesk</Link> Data
            Platform (ADP) combines datasets from across the company into a
            single warehouse, offering unparalleled insight for product teams.
            <br />
            <br />
            But you needed to know how to use it.
          </p>
        </div>
        <div className="project-components">
          <div className="component-1">
            <h3>Skills</h3>
            <p>
              Workshop facilitation, user research, prototyping, concept
              validation
            </p>
          </div>
          <div className="component-2">
            <h3>Team</h3>
            <p>
              Conner Hunihan (Product Manager)
              <br />
              Kristen Zhou (Product Manager)
              <br />
              Carlo Liquido (Data Engineer)
            </p>
          </div>
          <div className="component-3">
            <h3>Duration</h3>
            <p>10 weeks</p>
          </div>
          <div className="component-4">
            <h3>Essential Questions</h3>
            <p>
              How might the product balance simplification with technical
              robustness?
            </p>
            <p>
              Specifically, how does the platform need to cater to needs of the
              various distinct user groups?
            </p>
          </div>
        </div>
      </div>

      <div className="larger-outer-container">
        <div className="paragraph">
          <h3>
            The community doesn’t know what data is on the platform, or how to
            access it
          </h3>
          <p>
            20+ interviews, two workshops, and a community survey revealed
            distinct user groups within ADP, each of which had their own data
            needs, technological proficiencies, and preference for learning.
            While knowledge needs varied across these groups, there were
            unanimously reported frustrations with transparency of data, as well
            as with understanding the process of using the platform.
          </p>
          <Img
            className="top-bottom-margin"
            fluid={data.users.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="larger-outer-container">
        <div className="half-width">
          <div className="paragraph">
            <h3>
              Design for a single product experience to start small and move
              fast
            </h3>
            <p>
              In collaboration with a consulting team from{" "}
              <Link to="https://www.fjordnet.com/">Fjord</Link>, core ADP
              functionality was divided into four distinct product categories:
              Analytics, Data, Core Services, and Support. Within those
              categories lay individual product experiences, the most
              complicated of which was selected as a candidate for prototyping.
            </p>
          </div>
        </div>
        <div className="half-width image-right">
          <Img fluid={data.products.childImageSharp.fluid} />
        </div>
      </div>

      <div className="larger-outer-container">
        <div className="half-width">
          <div className="paragraph">
            <h3>
              Card sort with users to restructure the existing data portal
            </h3>
            <p>
              Utilizing the existing data portal property would take advantage
              of existing awareness within the community, but the information
              architecture needed revision in order to suit the new product
              categorization.
            </p>
          </div>
        </div>
        <div className="half-width image-right">
          <Img fluid={data.cardSorting.childImageSharp.fluid} />
        </div>
      </div>

      <div className="larger-outer-container">
        <div className="paragraph">
          <p>
            A concept model was created to map the mental model users had, to
            the revised structure of the data portal property. This provided not
            only a foundation for the portal, but it outlined process details
            that would need to be included in the product experience, as well.
          </p>
          <Img fluid={data.conceptModel.childImageSharp.fluid} />
        </div>
      </div>

      <div className="larger-outer-container">
        <div className="paragraph">
          <h3>Three distinct pain points in the process</h3>
          <p>
            A service design blueprint was created to visually represent paint
            points, dependencies, and areas of opportunity that exist throughout
            the process of using a given ADP data product. The exercise
            suggested that technical users required three distinct pieces of
            knowledge throughout their engagement with ADP: process (An overview
            of the process required to use the various softwares of ADP),
            details (detailed explanations of permissions, points of contact,
            and use case-dependent instructions) and context (Notes of what
            works and what didn’t for teams that have gone before).
          </p>
          <Img fluid={data.serviceBlueprint.childImageSharp.fluid} />
        </div>
      </div>

      <div className="larger-outer-container">
        <div className="half-width">
          <div className="paragraph">
            <h3>Testing a prototype</h3>
            <p>
              A low-fidelity, clickable prototype of the “Development and ETL”
              data product was designed around three core concepts: clarifying
              the process, surfacing resources, and including technical details.
              This was tested on-site with data engineers over two sessions.
            </p>
          </div>
        </div>
        <div className="half-width image-right">
          <Img fluid={data.testing.childImageSharp.fluid} />
        </div>
      </div>

      <div className="larger-outer-container">
        <div className="paragraph">
          <Img fluid={data.prototypeTesting.childImageSharp.fluid} />
          <p>
            Users praised the high-level overview and guidance that the site
            would offer, but commented that many of the details required to
            actually run an ETL are not documented on any source.
          </p>
          <Img fluid={data.feedback.childImageSharp.fluid} />
        </div>
      </div>
      <div className="larger-outer-container">
        <div className="paragraph">
          <h3>Applying Autodesk branding</h3>
          <p>
            Comments from usability tests were incorporated into a final,
            high-fidelity mockup that was delivered to the Data Strategy and
            Experience team.
          </p>
          <Img fluid={data.final.childImageSharp.fluid} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Autodesk
