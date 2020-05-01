import React from "react";
import Dropdowns from "./Dropdowns";
import * as ClickHandlers from "../Pages/ClickHandlers";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: this.props.playerNumber,
      selectedLevel: this.props.selectedLevel
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
    let allLevels = range(30);

    const setPlayerLevel = (newLevel) => {
      this.props.setPlayerLevel(newLevel, this.state.playerNumber);
    }

    return (
      <ul class="playerLevelItem"><label>
        <Dropdowns title="Player Level" 
          dropdownData={allLevels}
          storeData={setPlayerLevel} />
      </label>
      {/* <button class="removePlayerButton" onClick={this.props.action}>-</button> */}
      </ul>
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
