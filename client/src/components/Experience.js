import React from "react";
import './style.css';
import LeftChevron from './img/left-chevron.svg';
import RightChevron from './img/right-chevron.svg';
import btdisplay from './img/bt-display.PNG';
import btsign from './img/bt-sign.PNG';
import btrecord from './img/bt-record.PNG';
{/*import Carousel from './carousel';*/}

class experience extends React.Component {
  render() {
    return (
      <div
        className="zoned background-img-d universal-lr-padding"
        id="experienceMain"
      >
        <div className="carousel-container">
          <img
            src= {LeftChevron}
            id="prevBtn"
            alt="Previous picture button"
          />
          <img
            src= {RightChevron}
            id="nextBtn"
            alt="Next picture button"
          />
          <div className="carousel-slide container ">
            <img
              className="img-fit"
              src= {btdisplay}
              id="lastClone"
              alt="created habits being displayed with the Better Together login tool"
            />
            <img
              className="img-fit"
              src= {btsign}
              alt="log in feature of Better Together"
            />
            <img
              className="img-fit"
              src= {btrecord}
              alt="showing Better Together's Habit Creation Tool"
            />
            <img
              className="img-fit"
              src= {btdisplay}
              alt= "showing created habits being displayed with the Better Together login tool"
            />
            <img
              className="img-fit"
              src= {btsign}
              id="firstClone"
              alt="showing the log in feature of Better Together"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default experience;
