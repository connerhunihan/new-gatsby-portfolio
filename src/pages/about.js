import React from "react"
import "../styles/styles.scss"

// Import Components
import Header from "../components/header"

const Project = () => (
  <div>
    <Header />
    <div className="outer-container">
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
          Peace Corps service conducting research in the community to diagnose
          and triage potential project opportunities.
        </p>
        <p>
          Though I spoke not a word of Quechua, I fell in love with the process
          of solving problems by putting people at center stage.
        </p>
        <p>
          In the ten years since, I have had the fortune to continue honing and
          applying this process across diverse contexts, broadening my own
          perspective and skillset along the way.
        </p>
        <p>
          I now design user experiences at EchoUser where I help clients bring
          transformational technology to life.
        </p>
      </div>
    </div>
  </div>
)

export default Project
