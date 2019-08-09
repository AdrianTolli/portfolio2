import React, { Component } from "react";

import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import StartPage from "./components/startPage";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      currProject: "spisekart",
      projectText:
        "Spisekart is a tool created for restaurant owners to create a free online menu. The admin tool is written in react and hosted on heroku, it communicates with a backend written in Elixir hosted on Amazon aws. Available at ",
      projectLink: "https://spisekart.herokuapp.com"
    };
    this.renderPage = this.renderPage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeProject = this.changeProject.bind(this);
  }

  renderPage() {
    if (this.state.page === "home") {
      return <Home />;
    } else if (this.state.page === "about") {
      return <About />;
    } else {
      return (
        <Projects
          project={this.state.currProject}
          projectText={this.state.projectText}
          projectLink={this.state.projectLink}
        />
      );
    }
  }

  changePage(page) {
    this.setState({ page: page });
  }
  changeProject(newProject) {
    if (newProject === "spisekart") {
      this.setState({
        currProject: newProject,
        projectText:
          "Spisekart is a tool created for restaurant owners to create a free online menu. The admin tool is written in react and hosted on heroku, it communicates with a backend written in Elixir hosted on Amazon aws. Available at ",
        projectLink: "https://spisekart.herokuapp.com"
      });
    } else if (newProject === "tft") {
      this.setState({
        currProject: newProject,
        projectText:
          "Tftbuilder is a website created to aid players in the League Of Legends mode Teamfight Tactics. The site shows available champions, items and their combinations, and has a team builder where users can create their own team and see what synergies they get. Available at ",
        projectLink: "https://tftbuild.herokuapp.com"
      });
    }
  }

  render() {
    return (
      <div className="mainContainer">
        <NavBar
          buttonClicked={this.changePage}
          changeProject={this.changeProject}
        />
        <div className="rightContent">{this.renderPage()}</div>
      </div>
    );
  }
}

export default App;
