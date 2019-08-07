import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nameDiv">ADRIAN TOLLISEN</div>
        <div className="navbarButtons">
          <span
            onClick={() => this.props.buttonClicked("home")}
            className="spanButton"
            value="home"
          >
            Home
          </span>
          <span
            onClick={() => this.props.buttonClicked("about")}
            className="spanButton"
            value="about"
          >
            About
          </span>
          <span
            onClick={() => this.props.buttonClicked("projects")}
            className="spanButton"
            value="projects"
          >
            My projects
          </span>
        </div>
      </div>
    );
  }
}

export default NavBar;
