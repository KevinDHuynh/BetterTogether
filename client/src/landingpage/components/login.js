import React from "react";

class login extends React.Component {
  render() {
    return (
      <div className="modal-log-bg">
        <div className="modal">
          <h2>Log In To Better Together!</h2>
          <label htmlFor="usernameL">Username:</label>
          <input type="text" name="usernameL" id="usernameL" />
          <label htmlFor="passwordL">Password:</label>
          <input type="text" name="passwordL" id="passwordL" />
          <button>Sign Up!</button>
          <span className="modal-log-close">X</span>
        </div>
      </div>
    );
  }
}

export default login;
