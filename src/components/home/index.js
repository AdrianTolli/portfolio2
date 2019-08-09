import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="homeMain">
        <div className="headline">Home</div>
        <div className="homeInfo">
          <div className="homeText">
            <p>
              Hi! <br />
              <br /> My name is Adrian Tollisen. Im a computer engineer who is
              currently looking for work. I would love to work with web
              development, both frontend and backend if necessary.
            </p>
          </div>
          <img src={require("../../images/portrait2.jpg")} />
        </div>
      </div>
    );
  }
}

export default Home;
