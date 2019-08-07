import React, { Component } from "react";

import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import StartPage from "./components/startPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "home"
    };

    this.renderPage = this.renderPage.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  renderPage() {
    var returnInfo = null;
    this.state.display === "home"
      ? (returnInfo = <Home />)
      : this.state.display === "about"
      ? (returnInfo = <About />)
      : this.state.display === "projects"
      ? (returnInfo = <Projects />)
      : (returnInfo = <StartPage />);
    return returnInfo;
  }

  changeDisplay(page) {
    this.setState({
      display: page
    });
  }

  render() {
    return (
      <div>
        <NavBar buttonClicked={this.changeDisplay} />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
