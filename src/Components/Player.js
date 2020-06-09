import React from "react";
import Dropdowns from "./Dropdowns";

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
    let allLevels = range(20);

    const setPlayerLevel = (newLevel) => {
      this.props.setPlayerLevel(newLevel, this.state.playerNumber);
    }
    return (
      <ul className="playerLevelItem"><label>
         <Dropdowns title="Player Level" 
          dropdownData={allLevels}
          storeData={setPlayerLevel} />
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
