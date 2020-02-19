import React from "react";
import Dropdowns from "./Dropdowns"

class SizeSelector extends React.Component {
  
    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Size</legend>

            <Dropdowns title="Minimum Creature Size" isSize={true} />
            <Dropdowns title="Maximum Creature Size" isSize={true} />
        </div>
    </React.Fragment>
    
      );
    }
  }
  export default SizeSelector;