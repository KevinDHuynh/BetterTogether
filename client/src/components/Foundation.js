import React from "react";
import './style.css';
import undraw_physical_health from './img/undraw_physical_health.svg';
import undraw_mindfulness from './img/undraw_mindfulness.svg';
import undraw_mental_health from './img/undraw_mental_health.svg';
class foundation extends React.Component {
  render() {
    return (
      <div
        className="zonee  container-column-space universal-lr-padding"
        id="foundation"
      >
        <h2 className="txt-cntr">Dont Know Where to Start!?</h2>
        <div className="container-row-space ">
          <div className="card push-down-card container-column vert-cntr mar-right-std">
            <img
              className="card-img"
              src={undraw_physical_health}
              alt="Image of people exercising representing Physical Health card"
            />
            <h3>Physical Health</h3>
            <p className="p-small mar-top-zero">
              Mindfulness is The awareness that arises from paying attention, on
              purpose, in the present moment and non-judgmentally{" "}
            </p>
            <p className="p-small">
              Mindfulness is The awareness that arises from paying attention, on
              purpose, in the present moment and non-judgmentally{" "}
            </p>
          </div>
          <div className="card bg-yellow container-column vert-cntr mar-right-std">
            <img
              className="card-img"
              src={undraw_mindfulness}
              alt="Image of lady sitting practicing mindfulness representing mindfulness card"
            />
            <h3>Mindfulness</h3>
            <p className="p-small mar-top-zero">
              Mindfulness is The awareness that arises from paying attention, on
              purpose, in the present moment and non-judgmentally{" "}
            </p>
            <p className="p-small">
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quasi neque fugiat totam, sequi suscipit
            </p>
            <p className="p-small" />
          </div>
          <div className="card push-down-card container-column vert-cntr container-column ">
            <img
              className="card-img"
              src={undraw_mental_health}
              alt="Image of man sitting in nature to relax representing Mental Health Carc"
            />
            <h3>Mental Health</h3>
            <p className="p-small mar-top-zero">
              mindfulness is The awareness that arises from paying attention, on
              purpose, in the present moment and non-judgmentally{" "}
            </p>
            <p className="p-small" />
          </div>
        </div>
        <div class="zonef container-column cntr  universal-lr-padding">
          <h1>Be The Change You Want To See In The World.</h1>
          <button class="pop-btn btn-cta" id="signBtn3">Start Today</button>
        </div>
      </div>
      
    );
  }
}

export default foundation;
