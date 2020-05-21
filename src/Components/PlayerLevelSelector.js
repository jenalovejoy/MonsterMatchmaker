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
<<<<<<< HEAD
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
=======
        <form id="player-level-select" onSubmit={this.handleSubmit}>
          <legend style = {{fontSize: '25px'}}>Player Levels</legend>

          {this.state.playerLevels.map((level, i) => (
            <Player 
              playerNumber={i} 
              selectedLevel={level}
              setPlayerLevel={this.props.setPlayerLevel}
              // action={ClickHandlers.removePlayer(this, this.state.playerNumber)}
              />))}
        </form>
        <button class="addPlayerButton" 
            onClick={(i) => ClickHandlers.addPlayer(this)}>+</button> 
      </div>
>>>>>>> 9657925dc75d9e10082cfbd96db2a62b91d2f445
    );
  }
}

export default PlayerLevelSelector;
