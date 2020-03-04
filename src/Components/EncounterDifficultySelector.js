import Dropdowns from "./Dropdowns"
import React from "react";

const DIFFICULT_RATING = ["Trivial", "Easy", "Medium", "Hard", "Deadly"];

class EncounterDifficultySelector extends React.Component {
  
    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Encounter Difficulty Rating</legend>
            <Dropdowns title="Difficulty" 
              dropdownData={DIFFICULT_RATING} />
        </div>
    </React.Fragment>
      );
    }
}

  export default EncounterDifficultySelector;