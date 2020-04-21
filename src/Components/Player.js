import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 1,
      numberOfLevels: super.numberOfLevels
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    let level = range(30);
    return (
      <ul class="playerLevelItem"><label>
        Player Level
        <select value={this.state.value} onChange={this.handleChange}>
          {level.map(level => (
            <option value={level} key={level}>
              {level}
            </option>
          ))}
        </select>
      </label></ul>
    );
  }
}

function range(max) {
  let array = [];
  for (let i = 1; i <= max; i++) {
    array.push(i);
  }
  return array;
}
export default Player;
