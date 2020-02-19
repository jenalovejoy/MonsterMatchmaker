import React from "react";
import Player from "./Player";

class PlayerLevelSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: 4,
      numberOfLevels: 30
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
    let players = range(4);

    return (
      
      <form id="player-level-select" onSubmit={this.handleSubmit}>
        <legend style = {{fontSize: '25px'}}>Players</legend>

        {players.map(player => (
          <Player />
        ))}
      </form>
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

export default PlayerLevelSelector;
