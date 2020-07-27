import React from "react";

class nav extends React.Component {
  render() {
    return (
      <nav className="sticky">
        <ul className="main-nav container">
          <li className="nav-special">
            {" "}
            <a href="#cover">
              {" "}
              <img
                className="nav-logo-resize"
                src="./img/logo_nav.svg"
                alt="Better Together Logo at top left of Navigation Bar"
              />
            </a>
          </li>
          <li className="no-border">
            <a href="#cover">
              <strong>Better Together</strong>
            </a>
          </li>
          <li className="push nav-border-left hide">
            <a href="#benefits">Benefits</a>
          </li>
          <li className="hide">
            <a href="#theLens">The Lens</a>
          </li>
          <li className="hide">
            <a href="#experience">Experience</a>
          </li>
          <li className="hide">
            <a href="#foundation">Foundation</a>
          </li>
          <li className="nav-special push-again">
            <button className="flat-btn modal-log-btn">Login</button>
          </li>
          <li className="nav-special">
            <button className="pop-btn modal-sign-btn" id="signBtn1">
              {" "}
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default nav;
