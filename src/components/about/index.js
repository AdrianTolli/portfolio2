import React, { Component } from "react";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div className="aboutMain">
        <div className="headline">About</div>
        <div className="aboutInfo">
          <div className="infoBracket">
            <p>
              My hobbies are programming, volleyball and exercise! I've played
              volleyball for over a decade, and I would love to keep playing
              where ever I end up. I exercise regulary, but with no
              subscription. It's to expensive for an unemployed web developer.
            </p>
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
