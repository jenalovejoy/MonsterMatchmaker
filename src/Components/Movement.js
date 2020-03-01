import React from "react";
import Checkbox from "./Checkbox";

const MOVEMENT_OPTIONS = [
  "Fly",
  "Walk",
  "Burrow",
  "Swim",
  "Climb"
];

class Movement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speedA: Array(5).fill(false)
    };
  }
  handleClick(i) {
    const speedA = this.state.speedA.slice();
    speedA[i] = !speedA[i];
    this.setState({ speedA: speedA });
    console.log(speedA[i], i);
  }

  
  createCheckbox = option => (
    <Checkbox
      label={option}
      onClick={()=>this.props.onClick(option)}
      key={option}
    />
  );

  createCheckboxes = () => MOVEMENT_OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <form  onSubmit={this.handleFormSubmit}>
        <legend style = {{fontSize: '25px'}}>Movement</legend>
        <div className="gridFormatAlignment">
          {this.createCheckboxes()}
        </div>
      </form>
    );
  }
}

export default Movement;
