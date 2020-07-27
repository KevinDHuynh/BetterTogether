import React from "react";

class theLens extends React.Component {
  render() {
    return (
      <div
        className="zonec container-row-space  universal-lr-padding"
        id="theLens"
      >
        <section className="container-column">
          <h6>Good Habits: The Compounding Intrest For Self-Improvement</h6>
          <img
            className="mar-right-std"
            id="compoundImg"
            src="./img/compounding_habits.png"
            alt="Compounding Interest Of Habits Chart"
          />
        </section>
        <section className="container-column">
          <h3>ipsum</h3>
          <p className="p-med mar-top-zero">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            tempore. Expedita fugit ipsa doloribus velit laudantium pariatur
            deserunt molestiae ducimus dolor asperiores praesentium, modi
            repellat quidem odit dolore quae ea.{" "}
          </p>
          <p className="p-med mar-top-zero">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            tempore. Expedita fugit ipsa doloribus velit laudantium pariatur
            deserunt molestiae ducimus dolor asperiores praesentium, modi
            repellat quidem odit dolore quae ea.{" "}
          </p>
        </section>
      </div>
    );
  }
}

export default theLens;
