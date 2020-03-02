import React from "react";
import Dropdowns from "./Dropdowns"

class ChallengeSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  

  //Fills array with challenge rating options
fillWithData() {
  let array = [];
  array.push("");
  array.push("0");
  array.push("1/8");
  array.push("1/4");
  array.push("1/2");
  for (let i = 1; i <= 24; i++) {
    array.push(i.toString(10));
  }
  array.push("30");
  return array;
}

    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Challenge Rating</legend>
            <Dropdowns title="Minimum Challenge Rating" 
            category="Challenge"
            storeData={this.props.setMinChallenge}
            fillWithData={this.fillWithData}/>
            {/* fillWithData={()=>this.props.fillWithData(option)}/> */}
            <Dropdowns title="Maximum Challenge Rating" 
            category="Challenge"
            storeData={this.props.setMaxChallenge} 
            fillWithData={this.fillWithData} />
        </div>
    </React.Fragment>
      );
    }
  }


  export default ChallengeSelector;