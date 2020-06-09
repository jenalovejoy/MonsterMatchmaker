import Player from "./Player";
import React from "react";
import * as ClickHandlers from "../Pages/ClickHandlers";

class PlayerLevelSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerLevels: this.props.playerLevels,
      numberOfPlayers: this.props.numberOfPlayers
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    //console.log(value);
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
      {/* <form id="player-level-select" onSubmit={this.handleSubmit}> */}
        <legend style = {{fontSize: '25px'}}>Player Levels</legend>

        {this.state.playerLevels.map((level, i) => (
          <Player 
            key={i}
            playerNumber={i} 
            selectedLevel={level}
            setPlayerLevel={this.props.setPlayerLevel}
              // action={ClickHandlers.removePlayer(this, this.state.playerNumber)}
              />))}
      {/* </form> */}
      <button className="addPlayerButton" 
            onClick={(i) => ClickHandlers.addPlayer(this)}>+</button>
      <button className="removePlayerButton" 
            onClick={(i) => ClickHandlers.removePlayer(this)}>-</button>
    </div>
    );
  }
}

export default PlayerLevelSelector;
