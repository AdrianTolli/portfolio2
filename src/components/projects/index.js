import React, { Component } from "react";
import "./style.css";

import Slideshow from "../slideshow";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedProject: "spisekart",
      projectText:
        "Spisekart is a tool created for restaurant owners to create a free online menu. The admin tool is written in react and hosted on heroku, it communicates with a backend written in Elixir hosted on Amazon aws. Available at ",
      projectLink: "https://spisekart.herokuapp.com"
    };

    this.changeProject = this.changeProject.bind(this);
    this.renderSlideshow = this.renderSlideshow.bind(this);
  }

  changeProject(newProject) {
    if (newProject === "spisekart") {
      this.setState({
        displayedProject: newProject,
        projectText:
          "Spisekart is a tool created for restaurant owners to create a free online menu. The admin tool is written in react and hosted on heroku, it communicates with a backend written in Elixir hosted on Amazon aws. Available at ",
        projectLink: "https://spisekart.herokuapp.com"
      });
    } else if (newProject === "tft") {
      this.setState({
        displayedProject: newProject,
        projectText:
          "Tftbuilder is a website created to aid players in the League Of Legends mode Teamfight Tactics. The site shows available champions, items and their combinations, and has a team builder where users can create their own team and see what synergies they get. Available at ",
        projectLink: "https://tftbuild.herokuapp.com"
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