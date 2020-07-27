import React from "react";
import './style.css'
import Cover from './img/cover.svg';

import RegisterModal from './auth/RegisterModal';

class cover extends React.Component {
  render() {
    return (
      <div id="cover" className="zonea container-row-space universal-lr-padding">
        <div className="contianer-column">
          <h6 className="mar-double">BE BETTER FOR THE PEOPLE WHO MATTER</h6>
          <h1>Want A Brighter Future?</h1>
          <h1>Start Today.</h1>
          <RegisterModal id="signBtn2" class="pop-btn modal-sign-btn btn-cta "/>
        </div>
        <img
          id="img-cover"
          src={Cover}
          alt="Image of two people holding a completed task"
        />
      </div>
    );
  }
}

export default cover;
