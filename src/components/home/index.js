import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="homeMain">
        <div className="headline">Home</div>
        <div className="homeInfo">
          <div className="homeImg">
            <img src={require("../../images/portrait.jpg")} />
          </div>
          <div className="homeText">
            <p>
              Hi, <br /> My name is Adrian Tollisen. Im a computer engineer who
              looking for work. I would love to work with web development, both
              frontend and backend if necessary.
            </p>
            <p>
              I've jet to obtain my first job in this field, and if you're
              reading this you might be considering me for a position. Keep in
              mind that I've never worked as a frontend developer and therefore
              my skills might be lesser than others, but my learning curve will
              be sky high! Imagine what I could do if I worked 8 hours a day
              with web development.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
