import React, { Component } from "react";
import "./style.css";

import Slideshow from "../slideshow";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedProject: "spisekart",
      projectText:
        "Spisekart is a tool for restaurant owners to create and maintain their menu online. Using heroku they create their own user, where they can create multiple restaurants and add/delete/edit dishes. They can also create their own domain, and the menu will be available at www.domain.spisekart.com. Available at ",
      projectLink: "www.spisekart.herokuapp.com"
    };

    this.changeProject = this.changeProject.bind(this);
    this.renderSlideshow = this.renderSlideshow.bind(this);
  }

  changeProject(newProject) {
    if (newProject === "spisekart") {
      this.setState({
        displayedProject: newProject,
        projectText:
          "Spisekart is a tool for restaurant owners to create and maintain their menu online. Using heroku they create their own user, where they can create multiple restaurants and add/delete/edit dishes. They can also create their own domain, and the menu will be available at www.domain.spisekart.com. Available at ",
        projectLink: "www.spisekart.herokuapp.com"
      });
    } else if (newProject === "tft") {
      this.setState({
        displayedProject: newProject,
        projectText:
          "Tftbuilder is a website created to aid players in the League Of Legends mode Teamfight Tactics. The site shows available champions, items and their combinations, and has a team builder where users can create their own team and see what synergies they get. Available at ",
        projectLink: "www.tftbuild.herokuapp.com"
      });
    }
  }

  renderSlideshow() {
    console.log(this.state.displayedProject);
    var project = this.state.displayedProject;
    return (
      <Slideshow
        images={[
          project + "_slide1.jpg",
          project + "_slide2.jpg",
          project + "_slide3.jpg",
          project + "_slide4.jpg"
        ]}
        displayed={project}
      />
    );
  }
  render() {
    return (
      <div className="projectsMain">
        <div className="headline">Projects</div>
        <div className="projects">
          <div className="buttonContainer">
            <span
              className="button"
              onClick={() => this.changeProject("spisekart")}
            >
              Spisekart
            </span>
            <span className="button" onClick={() => this.changeProject("tft")}>
              Tft Builder
            </span>
          </div>
          <div className="projectsContainer">
            {this.renderSlideshow()}
            <div className="projectText">
              {this.state.projectText}
              <a href={this.state.projectLink}>{this.state.projectLink}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
