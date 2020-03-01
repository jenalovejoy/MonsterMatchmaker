import React from "react";
import Dropdowns from "./Dropdowns"

class ChallengeSelector extends React.Component {
  
    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Challenge Rating</legend>
            <Dropdowns title="Minimum Challenge Rating" category="Challenge"/>
            <Dropdowns title="Maximum Challenge Rating" category="Challenge"/>
        </div>
    </React.Fragment>
      );
    }
  }
  export default ChallengeSelector;