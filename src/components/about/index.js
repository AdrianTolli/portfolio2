import React, { Component } from "react";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div className="aboutMain">
        <div className="headline">About</div>
        <div className="aboutInfo">
          <div className="infoBracket">
            <p>My hobbies are programming, volleyball and exercise!</p>
            <p>
              Right now I use technologies like JavaScript, React, HTML5 and
              CSS3 to create my websites. I would like to expand my knowledge
              and learn new technologies.
            </p>
            <p>
              I've been playing volleyball for over a decade, and I'm still as
              passionate about it as I was when I first began.
            </p>
            <p>I exercise regularly, either volleyball or running.</p>
          </div>
          <div>
            <img src={require("../../images/FIL_portrait.jpg")} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
