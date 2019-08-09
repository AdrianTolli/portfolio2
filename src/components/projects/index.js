import React, { Component } from "react";
import "./style.css";

import Slideshow from "../slideshow";

class Projects extends Component {
  renderSlideshow() {
    return (
      <Slideshow
        images={[
          this.props.project + "_slide1.jpg",
          this.props.project + "_slide2.jpg",
          this.props.project + "_slide3.jpg",
          this.props.project + "_slide4.jpg"
        ]}
        displayed={this.props.project}
      />
    );
  }
  render() {
    return (
      <div className="projectsMain">
        <div className="headline">Projects</div>
        <div className="projects">
          <div className="projectsContainer">
            {this.renderSlideshow()}
            <div className="projectText">
              {this.props.projectText}
              <a href={this.props.projectLink}>{this.props.projectLink}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
