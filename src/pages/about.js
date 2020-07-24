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
        <p>
          That was the first thing I heard when I stepped off the bus in what
          would be my home for the next 27 months.
        </p>
        <p>
          I didn't know it at the time, but the research I would conduct
          throughout my Peace Corps service would change my life.
        </p>
        <p>
          Though I spoke not a word of Quechua, I fell in love with the process
          of problem solving through the lens of the user.
        </p>
        <p>
          Graduate study at Berkley's School of Information refined my process
          of human centered design, and helped me find my passion for
          technology.
        </p>
        <p>
          I now create user experiences at EchoUser, where I help clients bring
          about transformation though human-centered products and services.
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default Project
