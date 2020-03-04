import Dropdowns from "./Dropdowns"
import React from "react";

//Fills array with challenge rating options
function fillWithChallengeRatings() {
  let array = [];
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

const CHALLENGE_OPTIONS = fillWithChallengeRatings();

console.log(CHALLENGE_OPTIONS);

class ChallengeSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  
    render() {
      return (
        <React.Fragment>
        <div>
            <legend style = {{fontSize: '25px'}}>Challenge Rating</legend>
            <Dropdowns title="Minimum Challenge Rating" 
            storeData={this.props.setMinChallenge}
            dropdownData={CHALLENGE_OPTIONS}/>
            {/* fillWithData={()=>this.props.fillWithData(option)}/> */}
            <Dropdowns title="Maximum Challenge Rating" 
            // storeData={this.props.setMaxChallenge} 
            dropdownData={CHALLENGE_OPTIONS} />
        </div>
    </React.Fragment>
      );
    }
  }


  export default ChallengeSelector;