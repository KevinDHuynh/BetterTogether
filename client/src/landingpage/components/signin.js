import React from "react";

class signin extends React.Component {
  render() {
    return (
      <div className="modal-sign-bg">
        <div className="modal">
          <h2>Sign Up For Better Together!</h2>
          <label htmlFor="usernameS">Username:</label>
          <input type="text" name="usernameS" id="usernameS" />
          <label htmlFor="passwordS">Password:</label>
          <input type="text" name="passwordS" id="passwordS" />
          <button>Sign Up!</button>
          <span className="modal-sign-close">X</span>
        </div>
      </div>
    );
  }
}

export default signin;
