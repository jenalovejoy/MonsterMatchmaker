import Dropdowns from "./Dropdowns"
import React from "react";

const SIZE_CATEGORIES = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];

class SizeSelector extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <legend style={{ fontSize: '25px' }}>Size</legend>

          <Dropdowns title="Minimum Creature Size"
            category="Size"
            storeData={this.props.setMinSize}
            dropdownData={SIZE_CATEGORIES} />
          <Dropdowns title="Maximum Creature Size"
            category="Size"
            storeData={this.props.setMaxSize}
            dropdownData={SIZE_CATEGORIES} 
            value="Gargantuan"/>

        </div>
      </React.Fragment>

    );
  }
}



export default SizeSelector;