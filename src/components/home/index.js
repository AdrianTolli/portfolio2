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
              <br /> My name is Adrian Tollisen. I'm a computer engineer who is
              currently looking for work. I'm most passionate about web
              development, and have been focusing mainly on the frontend, but I
              would also like to gain more experience working full stack.
            </p>
          </div>
          <img src={require("../../images/portrait2.jpg")} />
        </div>
      </div>
    );
  }
}

export default Home;
