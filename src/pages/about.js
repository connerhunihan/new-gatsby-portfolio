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
          In northern Andrean Quechua, that means
          <br /> <em>Hello! How are you?</em>
        </p>
        <p>
          I don’t speak Quechua, but I did learn enough in the Peace Corps to
          say <em>Hello!</em> and <em>How are you?</em> and{" "}
          <em>Who gave you that bread?</em>
        </p>
        <p>
          The thing about Quechua is that it’s not a written language. There is
          a way to represent phonetics, but there are no written texts to learn
          from – you have to talk with people to learn it.
        </p>
        <p>
          But isn’t that the best way to figure something out? To go out, talk
          with people, learn about who they are, what they want, and how they do
          what they are trying to do?
        </p>
        <p>
          The Peace Corps gave me a taste of this, but it was graduate study at
          Berkley's School of Information that solidified this passion and gave
          me the technical skills to apply that process to the design of
          technology.
        </p>
        <p>
          I now get to talk with people and solve problems for a living, working
          with clients both big and small to help them understand the people
          they serve and to design human-centered products and experiences.
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default Project
