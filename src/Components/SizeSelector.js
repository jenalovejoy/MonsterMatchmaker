import React from "react";
import Dropdowns from "./Dropdowns"

class SizeSelector extends React.Component {
  
    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Size</legend>

            <Dropdowns title="Minimum Creature Size" category="Size" />
            <Dropdowns title="Maximum Creature Size" category="Size" />
        </div>
    </React.Fragment>
    
      );
    }
  }
  export default SizeSelector;