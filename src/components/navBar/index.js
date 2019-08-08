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
        <div className="socials">
          <a href="https://www.github.com/AdrianTolli">
            <img src="data:image/png;base64,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" />
          </a>
          <a href="https://www.linkedin.com/in/adrian-tollisen-5765aa8a/">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAYFBMVEUAe7X///8AbK7g6fIAd7NdmcRsnsfc5/EAcbB3qMwAebQAdbLC2Ojk7/UAc7EAb69Fj78hhrtSlMI1hrqFsNGqxNybvdhgnsfS5O+zz+IXgLju9fmiwdqEtNPL3+sAZaqt8wt0AAACRklEQVRoge3ba3OjIBQGYBCsXESNsV5imv7/f7nqpq3YpsMe3cO0c96Pks4zMshBKYxPyfWJYcWcdD6bjHNXKYnmTpGqcjPsGCq70MxNcGWx3UmuOMtLfJcxlTON3tFzpGZ449lLJHZ6qmLBFAqFQvkFMbawEr+USHVuntvOFsiuqnq+pE1Qb1o1/C3OIsq24x/pEzTXGLeCeYO2KLR67XKhsGA1eDC/YMFJ5sM11vCKBkfr6u3gwpu9rPc4abyXSn8CwXypLD46u8ctULb+WyTGq0GujKasX66tvij8ijwtBIoIC4E4KRMv9+ok/av3wT51jJp/X6pid+Uuc7GOqxdZpt5VMX+7MbY863bIM5Hdhlafk312IvwpM11g8+RfFQmz7MX/qWjYnmkuDM6SonN8G6d3zDeB8Ovmwj0D/AkMhMsv3UkuoHIY3LcPYN5Cq0oYnI+PYF4Dl4dh8GOX98BbDoO/Swe75f1wDlsR74fHcyQYuFw6AB5AM+cBsABNnAfAI+izdDg8Dk2Xdtf+cwvo7SMYbmUhpbRFWX8qU0+QJzkUbt7rkL2IbRtkWAfCt9UAkvW2MyDDOhBO171pb37j83+EvW8jdlMkB8ikGQY7H+78VtA2Xuiaa/03MvVbb7Fg0EeqI+AsFiwIJphgggkmmGCCCSaYYIK/gMXxsArbk/DegGXtvmkNlv9hF+Zd9lvRtvcpFAqFQqH8rET6rxYT70hKtEM4wN3lnVF5nINWtopztMwuR8uiHabjy/FBtKfq7fjgH7ziJKbST57CAAAAAElFTkSuQmCC" />
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
