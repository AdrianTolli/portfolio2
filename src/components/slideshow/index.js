import React, { Component } from "react";
import "./style.css";
import { isGenericTypeAnnotation } from "@babel/types";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSlide: 0
    };

    this.renderSlideshow = this.renderSlideshow.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  prevSlide() {
    console.log("prev clicked");
    var newValue = this.state.visibleSlide;
    if (this.state.visibleSlide != 0) {
      this.setState({ visibleSlide: newValue - 1 });
    }
  }
  nextSlide() {
    console.log("next clicked");
    var newValue = this.state.visibleSlide;
    if (this.state.visibleSlide != 1) {
      this.setState({ visibleSlide: newValue + 1 });
    }
  }

  renderSlideshow() {
    var slideshowImages = [];
    for (let i = 0; i < this.props.images.length; i++) {
      slideshowImages.push(
        <div className="slideContainer">
          <img
            src={require("../../images/" + this.props.images[i])}
            alt={"slide" + (i + 1)}
            className={`slide  + ${
              i === this.state.visibleSlide ? "visibleSlide" : ""
            }
          `}
          />
          <span className="imgbutton prev" onClick={() => this.prevSlide()} />
          <span className="imgbutton next" onClick={() => this.nextSlide()} />
          <div className="slideCounter">
            <span
              className={`dot ${this.state.visibleSlide === 0 ? "dotted" : ""}`}
            />{" "}
            <span
              className={`dot ${this.state.visibleSlide === 1 ? "dotted" : ""}`}
            />{" "}
          </div>
        </div>
      );
    }
    return slideshowImages;
  }

  render() {
    return this.renderSlideshow();
  }
}

export default Slideshow;
