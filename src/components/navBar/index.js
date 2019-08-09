import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.projectButton = this.projectButton.bind(this);
  }

  projectButton(page, project) {
    this.props.buttonClicked(page);
    this.props.changeProject(project);
  }
  render() {
    return (
      <div className="navbar">
        <div className="nameDiv">
          <div className="imgDiv">
            <img src={require("../../images/portrait.jpg")} />
          </div>
          Adrian Tollisen
          <span className="workTitle">Junior Developer</span>
          <div className="socials">
            <a href="https://www.github.com/AdrianTolli">
              <img src="https://image.flaticon.com/icons/png/512/37/37318.png" />
            </a>
            <a href="https://www.linkedin.com/in/adrian-tollisen-5765aa8a/">
              <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png" />
            </a>
          </div>
        </div>
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
          <div className="childButtons">
            <span
              onClick={() => this.projectButton("projects", "spisekart")}
              className="spanButton childButton"
              value="spisekart"
            >
              - Spisekart
            </span>
            <span
              onClick={() => this.projectButton("projects", "tft")}
              className="spanButton childButton"
              value="tft"
            >
              - Tft builder
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
