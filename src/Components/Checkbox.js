import React from "react";

class Checkbox extends React.Component {
  render() {
    return (
      <div className="form-check">
        <label>
          <input
            type="checkbox"
            name={this.props.label}
            checked={this.props.isSelected}
            onChange={(e) => this.props.onClick()}
            className="form-check-input"
          />
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
