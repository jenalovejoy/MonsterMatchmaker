import Player from "./Player";
import React from "react";

class PlayerLevelSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerLevels: this.props.playerLevels
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

  newPlayer() {
    let n = this.state.numberOfPlayers;
    this.setState({numberOfPlayers: n + 1});
  }


  render() {

    return (
      <div>
        <form id="player-level-select" onSubmit={this.handleSubmit}>
          <legend style = {{fontSize: '25px'}}>Player Levels</legend>

          {this.state.playerLevels.map((level, i) => (
            <Player 
              playerNumber={i} 
              selectedLevel={level}
              setPlayerLevel={this.props.setPlayerLevel}/>
          ))}
        </form>
      </div>
    );
  }
}


export default PlayerLevelSelector;
