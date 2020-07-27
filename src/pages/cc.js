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
      existing: file(relativePath: { eq: "cc-existing.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingredients: file(relativePath: { eq: "cc-ingredient-list.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      components: file(relativePath: { eq: "cc-license-components.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      context: file(relativePath: { eq: "cc-license-context.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      modularization: file(
        relativePath: { eq: "cc-license-modularization.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      persona: file(relativePath: { eq: "cc-persona.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      recipe: file(relativePath: { eq: "cc-recipe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      recommendations: file(relativePath: { eq: "cc-recommendation.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoppingCart: file(relativePath: { eq: "cc-shopping-cart.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      styleGuide: file(relativePath: { eq: "cc-style-guide.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wizard: file(relativePath: { eq: "cc-wizard.png" }) {
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
              In January 2018, the{" "}
              <Link to="https://creativecommons.org/">Creative Commons</Link>{" "}
              (CC) kicked off the <em>Usability Initiative</em> to renovate the
              licensing experience. CC partnered with INFO290: Product Studio
              Design to create concepts for six projects, one of which was a
              license chooser tool.
            </p>
          </div>
          <div className="project-components">
            <div className="component-1">
              <h3>Skills</h3>
              <p>User testing, prototyping, design system, responsive design</p>
            </div>
            <div className="component-2">
              <h3>Team</h3>
              <p>Conner Hunihan (Design Lead, Product Manager)</p>
            </div>
            <div className="component-3">
              <h3>Duration</h3>
              <p>4 weeks</p>
            </div>
            <div className="component-4">
              <h3>Essential Questions</h3>
              <p>
                How can the design enable third-party content platforms to
                easily incorporate the license chooser tool out-of-the-box?
              </p>
              <p>
                How can licensing decisions be framed in a way that allows users
                to make informed decisions, without needing to learn technical
                details?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div className="paragraph small-top-bottom-margin">
          <h3>
            The community doesn’t understand what licenses are, or how to use
            them
          </h3>
          <p>
            CC staff had already undertaken much of the research heavy lifting,
            conducting over 100 interviews with publications and users of all
            kinds. Of the nine key insights that came out of that research, two
            were particularly relevant to the License Chooser Tool – licenses
            are not understood and while creators are motivated, the process for
            how to actually license work is not clear.
          </p>
          <Img
            style={{ width: "33%", margin: "5% auto 0 auto" }} // top right bottom left
            fluid={data.existing.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="large-left-right-margin">
        {/* <div className="half-width"> */}
        <div className="paragraph">
          <ul>
            <li>
              <div>
                <h3>Framing the opportunity</h3>
                <p>
                  Working with the Director of Product & Research, a final
                  design objective was framed: give users a tool, not only to
                  find the license they need, but to learn about the licensing
                  process along the way. This tool also needed to be portable
                  across platforms, in order to offer third-party content
                  hosting platforms a standardized template.
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
        <div className="paragraph">
          <h3>A typical, passionate user</h3>
          <p>
            A user persona was created in the shadow of a typical user. Paulo is
            a University professor who publishes a variety of content types
            (academic papers, datasets, conference presentations), and he
            publishes that content across a variety of platforms, using many
            tools. For Paulo, content is his life’s work, and so it is important
            not only to share it publicly, but to protect it, as well. Paulo
            believes that the open sharing of knowledge is fundamental to his
            work. For Paulo, the act of sharing is a statement.
          </p>
          <Img
            style={{ width: "75%", margin: "7% auto 0 auto" }} // top right bottom left
            fluid={data.persona.childImageSharp.fluid}
          />
        </div>
      </div>

      <div
        style={{ margin: "7% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <h3>Three existing bright spots</h3>
          <p>
            In testing the existing licensing experience, there were three areas
            that stood out as particularly clear, insightful, and generally
            useful to users. These three concepts became pillars in the
            foundation for the rest of design.
          </p>
        </div>
      </div>

      <div
        style={{ margin: "7% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div>
          <div className="paragraph">
            <ul>
              <li>
                <div>
                  <h3>Putting licenses in context</h3>
                  <p>
                    Utilizing the existing data portal property would take
                    advantage of existing awareness within the community, but
                    the information architecture needed revision in order to
                    suit the new product categorization.
                  </p>
                </div>
              </li>
              <li>
                <div className="half-width">
                  <Img
                    style={{ width: "65%", margin: "0 auto 0 auto" }} // top right bottom left
                    fluid={data.context.childImageSharp.fluid}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{ margin: "0% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <ul>
            <li>
              <div>
                <h3>Explaining license components</h3>
                <p>
                  The CC website has a page that outlines the fundamental
                  building blocks of every license. These components are
                  combined in different ways to produce license with varying
                  degrees of restriction. Understanding these pieces allows
                  users to craft, exactly, the protection placed on their
                  content.
                </p>
              </div>
            </li>
            <li>
              <div className="half-width">
                <Img
                  style={{ width: "75%", margin: "0 auto 0 auto" }} // top right bottom left
                  fluid={data.components.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{ margin: "0% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <ul>
            <li>
              <div>
                <h3>Third-party integration</h3>
                <p>
                  In the absence of a robust license chooser tool, many
                  third-party content platforms have taken it upon themselves to
                  design a CC licensing experience, as part of the content
                  upload flow. Though these platforms have taken steps toward a
                  fully portable-tool, there is no consistency or
                  standardization.
                </p>
              </div>
            </li>
            <li>
              <div className="half-width">
                <Img
                  style={{ width: "75%", margin: "0 auto 0 auto" }} // top right bottom left
                  fluid={data.modularization.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div style={{ margin: "7% auto 0 auto" }} className="paragraph">
          <h3>Using metaphor to provide a mental model: grocery shopping</h3>
          <p>
            A shopping metaphor was used to give users the comprehension and
            control they need to make a decision, without having to explain
            license technicalities. This metaphor breaks the choosing experience
            down into three phases:
          </p>
        </div>
      </div>

      <div
        style={{ margin: "1% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <h3>Step 1: make the shopping list</h3>
          <p>
            What do you do before going shopping? You make a list of the
            ingredients to buy. Orienting users to the license components gives
            them an opportunity to dive deeper into details. Surfacing summary
            information about the component as the default progressively
            discloses details that might not be immediately relevant.
          </p>
          <Img
            style={{ width: "75%", margin: "7% auto 0 auto" }} // top right bottom left
            fluid={data.ingredients.childImageSharp.fluid}
          />
        </div>
      </div>

      <div
        style={{ margin: "5% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <h3>Step 2: fill the shopping cart</h3>
          <p>
            Once in the store, shoppers compare and contrast items before making
            final purchasing decisions. Similarly, the Chooser Tool builds upon
            the license context graphic by introducing the four differentiating
            dimensions in a matrix format.
          </p>
          <Img
            style={{ width: "75%", margin: "7% auto 0 auto" }} // top right bottom left
            fluid={data.shoppingCart.childImageSharp.fluid}
          />
        </div>
      </div>

      <div
        style={{ margin: "5% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <h3>Step 3: make the recipe</h3>
          <p>
            The last step is actually using the purchased ingredients. With the
            Chooser Tool, this mostly means copying and pasting HTML (although
            there are different instructions for platform and plaintext
            versions). Highly contrasting text and color hierarchy instructs the
            user on what to do next, guiding them through this final step.
          </p>
          <Img
            style={{ width: "75%", margin: "7% auto 0 auto" }} // top right bottom left
            fluid={data.recipe.childImageSharp.fluid}
          />
        </div>
      </div>

      <div
        style={{ margin: "10% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <h3>Interactions left on the cutting room floor</h3>
          <p>
            While the matrix mechanism was ultimately selected because it
            allowed for the greatest degree of exploration and context-setting,
            two other selection mechanisms were considered:
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
                  <strike>"Recommended option"</strike>
                </h3>
                <p>
                  In order to minimize choice aversion, a recommendation could
                  be offered, as well as two attribute-based alternatives. While
                  this streamlined the selection process, users found it too
                  simplistic, “my work is too important…I need to know more
                  about the details of this license before I can trust it."
                </p>
              </div>
            </li>
            <li>
              <div className="half-width">
                <Img
                  style={{ width: "100%", margin: "0 auto 0 auto" }} // top right bottom left
                  fluid={data.recommendations.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
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
                  <strike>"Wizard"</strike>
                </h3>
                <p>
                  The mechanism on the existing Chooser Tool is a wizard which,
                  from a decisional perspective, is the most usable. However, a
                  wizard does not facilitate exploration outside of the confines
                  of the component you are selecting. This results in long-time
                  users who, while they have the correct license, do not
                  understand it.
                </p>
              </div>
            </li>
            <li>
              <div className="half-width">
                <Img
                  style={{ width: "100%", margin: "0 auto 0 auto" }} // top right bottom left
                  fluid={data.wizard.childImageSharp.fluid}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{ margin: "10% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <h3>Mobile prototype</h3>
          <p style={{ margin: "0% 0% 7% 0%" }}>
            The final design holds selection as the primary focus, but around
            that skeleton, introduces opportunities to explore the licensing
            process. Users can dive deeper into the technical language, see how
            attribution will look, and explore real-world examples that have
            used this license.
          </p>
        </div>
      </div>
      <div
        style={{ margin: "10% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="prototype-iframe-container">
          <div className="small-left-right-margin">
            <iframe
              width="442"
              height="935"
              src="//invis.io/HWPCKZ1FB36"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div
        style={{ margin: "7% auto 0 auto" }}
        className="large-left-right-margin"
      >
        <div className="paragraph">
          <h3>Third-party integration</h3>
          <p style={{ margin: "0% 0% 5% 0%" }}>
            Conference presentations are high on the list of content Paulo wants
            to license, so the design was ported into Google Slides to
            demonstrate the integration of the revised Licence Chooser Tool on a
            third-party platform.
          </p>
          <div className="smallest-left-right-margin">
            <div className="yt-iframe-container">
              <iframe
                className="responsive-iframe"
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/FRtFQnNJARk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="large-left-right-margin">
        <div style={{ margin: "15% 0% 5% 0%" }} className="paragraph">
          <h3>Handing off the revised style guide + design system</h3>
          <p>
            The design necessitated extending the{" "}
            <Link to="https://wiki.creativecommons.org/wiki/Colors">
              existing Creative Common's style guide
            </Link>
            . As such, a light design system was developed to document the
            typography, colors, and component details.
          </p>
          <Img
            style={{ width: "100%", margin: "7% auto 0 auto" }} // top right bottom left
            fluid={data.styleGuide.childImageSharp.fluid}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Autodesk
