import React from "react"
import "../styles/styles.scss"

// Import Components
import Header from "../components/header"

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
          It was May of 2010, and I would spend the next three months of my
          Peace Corps service conducting research to diagnose and triage
          potential project opportunities.
        </p>
        <p>
          Though I spoke not a word of Quechua, I savored the process of solving
          problems by putting people at center stage.
        </p>
        <p>
          Over ten years, I have had the fortune to continue honing and applying
          this process across diverse contexts, broadening my own perspective
          and skillset along the way.
        </p>
        <p>
          I now design user experiences at EchoUser, where I work with a range
          of clients to understand humans and craft transformational technology.
        </p>
      </div>
    </div>
  </div>
)

export default Project
