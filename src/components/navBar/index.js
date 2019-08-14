import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactExpanded: false,
      arrow: "⮙"
    };

    this.projectButton = this.projectButton.bind(this);
    this.expandContact = this.expandContact.bind(this);
  }

  projectButton(page, project) {
    this.props.buttonClicked(page);
    this.props.changeProject(project);
  }
  expandContact() {
    if (this.state.contactExpanded === false) {
      this.setState({ contactExpanded: true, arrow: "⮛" });
    } else {
      this.setState({ contactExpanded: false, arrow: "⮙" });
    }
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
        <div className="contact">
          <div className="expandButton" onClick={this.expandContact}>
            <span>{this.state.arrow}</span>
            <span>Contact</span>
          </div>
          <div
            className={`contactInfo ${
              this.state.contactExpanded != true ? "contactDown" : ""
            }`}
          >
            <div className="contactInfoItem">
              <img src={require("../../images/email_icon.png")} />{" "}
              <span>Adrian.tollisen@gmail.com</span>
            </div>
            <div className="contactInfoItem">
              <img src={require("../../images/phone_icon.png")} />{" "}
              <span>93213970</span>
            </div>
            <div className="contactInfoItem">
              <img src={require("../../images/skype_icon.png")} />{" "}
              <span>adrian.tollisen</span>
            </div>
            <div className="contactInfoItem">
              <img src={require("../../images/cv_icon.png")} />
              <a
                href={require("../../files/Adrian_tollisen_CV.pdf")}
                download="Adrian_tollisen_CV.pdf"
              >
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
