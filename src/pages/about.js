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
          I didn't know it at the time, but the research that I would conduct in
          thefirst three months of my Peace Corps service would change my life
          forever.
        </p>
        <p>
          Though I spoke not a word of Quechua, I fell in love with the process
          of solving problems by putting people at center stage.
        </p>
        <p>
          However, it was graduate study at Berkley's School of Information that
          helped me find my calling - applying the process of human centered
          design to the development of technology.
        </p>
        <p>
          I now design user experiences at EchoUser, where I help clients bring
          transformational products and services to life.
        </p>
      </div>
    </div>
  </div>
)

export default Project
