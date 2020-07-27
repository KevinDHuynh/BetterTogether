import React from "react";

class experience extends React.Component {
  render() {
    return (
      <div
        className="zoned background-img-d universal-lr-padding"
        id="experienceMain"
      >
        <div className="carousel-container">
          <img
            src="./img/left-chevron.svg"
            id="prevBtn"
            alt="Next picture button"
          />
          <img
            src="./img/right-chevron.svg"
            id="nextBtn"
            alt="Next picture button"
          />
          <div className="carousel-slide container ">
            <img
              className="img-fit"
              src="./img/bt-display.png"
              id="lastClone"
              alt="Image showing created habits being displayed with the Better Together login tool"
            />
            <img
              className="img-fit"
              src="./img/bt-sign.png"
              alt="Image showing the log in feature of Better Together"
            />
            <img
              className="img-fit"
              src="./img/bt-record.png"
              alt="Image showing Better Together's Habit Creation Tool"
            />
            <img
              className="img-fit"
              src="./img/bt-display.png"
              alt="Image showing created habits being displayed with the Better Together login tool"
            />
            <img
              className="img-fit"
              src="./img/bt-sign.png"
              id="firstClone"
              alt="Image showing the log in feature of Better Together"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default experience;
