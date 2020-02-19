import React from "react";
import Dropdowns from "./Dropdowns"

class ChallengeSelector extends React.Component {
  
    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Challenge Rating</legend>
            <Dropdowns title="Minimum Challenge Rating" isSize={false} />
            <Dropdowns title="Maximum Challenge Rating" isSize={false} />
        </div>
    </React.Fragment>
      );
    }
  }
  export default ChallengeSelector;