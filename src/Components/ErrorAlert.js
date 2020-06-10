import React from "react";
import alert from "../Pages/alert-icon.png"

class ErrorAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.errorMessage
    };

  }

  render() {

    return (
      <div className="error-message">
        <img
          id="alert-icon"
          src={alert}
          alt="Alert Icon"
        ></img>
        {this.state.message}
      </div>
    );
  }
}

export default ErrorAlert;
