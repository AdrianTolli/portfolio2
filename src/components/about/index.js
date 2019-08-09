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
              CSS3 to create my websites. I would like to exoand my knowledge
              and learn new technologies.
            </p>
            <p>
              I've played volleyball from over a decade, and would like to keep
              playing on my spare time as long as I can.
            </p>
            <p>I exercise regulary, either volleyball or running.</p>
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
