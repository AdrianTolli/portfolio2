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
              reading this you might be considering me for a position. Hopefully
              you will give me a call, invite me to an interview, offer me a
              well paid job, I accept and live happily ever after.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
