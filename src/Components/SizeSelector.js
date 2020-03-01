import React from "react";
import Dropdowns from "./Dropdowns"

class SizeSelector extends React.Component {
  constructor(props){
    super(props);
  }

  //fills array with size category options
fillWithData() {
  let array = [];
  array.push("");
  array.push("Tiny");
  array.push("Small");
  array.push("Medium");
  array.push("Large");
  array.push("Huge");
  array.push("Gargantuan");
  return array;
}
  
    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Size</legend>

            <Dropdowns title="Minimum Creature Size" 
            isSize={true} 
            storeData={this.props.setMinSize}
            fillWithData={this.fillWithData}/>
            <Dropdowns title="Maximum Creature Size" 
            isSize={true} 
            storeData={this.props.setMaxSize}
            fillWithData={this.fillWithData}/>

        </div>
    </React.Fragment>
    
      );
    }
  }



  export default SizeSelector;