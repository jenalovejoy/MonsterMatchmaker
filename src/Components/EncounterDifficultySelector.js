import React from "react";
import Dropdowns from "./Dropdowns"

class EncounterDifficultySelector extends React.Component {
  
    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Encounter Difficulty Rating</legend>
            <Dropdowns title="" category="Difficulty" />
        </div>
    </React.Fragment>
      );
    }
}

  export default EncounterDifficultySelector;