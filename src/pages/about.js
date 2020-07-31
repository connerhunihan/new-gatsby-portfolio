import React from "react"
import "../styles/styles.scss"

// Import Components
import Header from "../components/header"
import Footer from "../components/footer"

const Project = () => (
  <div>
    <Header />
    <div className="small-left-right-margin">
      <div className="banner">
        <p>Imanalla! Ima shuti kangui?</p>
      </div>
      <div className="paragraph">
        <p>I had no idea what that meant, either.</p>
        <p>
          But 27 months later, I left Ecuador with a marginally-proficient –
          albeit random – understanding of northern Andean Quechua, and a
          newfound passion for solving problems through the lens of the human at
          the center of the system.
        </p>
        <p>
          And while the Peace Corps introduced me to human-centered design, it
          was graduate study at Berkley's School of Information that formalized
          my process and gave me the technical training to apply that process to
          the design of technology in society.
        </p>
        <p>
          I have always been driven to help guide others, and I now do that
          professionally, creating (mostly digital) user experiences at
          EchoUser. Working with clients both big and small, we enabled
          transformation through the design of human-centered products and
          services.
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default Project
