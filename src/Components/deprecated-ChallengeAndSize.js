/*
This is the React code for the Challenge Rating and Size dropdown menus
*/
import React from "react";
import Dropdowns from "./Dropdowns";

//Parent class -- creates the overall component structure
class ChallengeRatings extends React.Component {
  render() {
    //renders objects
    //React Fragment is to allow multiple children on a single parent

    return (
      <React.Fragment>
        <div>
          <legend>Challenge Rating</legend>
          <Dropdowns title="Minimum Challenge Rating" isSize={false} />
          <Dropdowns title="Maximum Challenge Rating" isSize={false} />
        </div>
        <div>
          <legend>Size</legend>
          <Dropdowns title="Minimum Creature Size" isSize={true} />
          <Dropdowns title="Maximum Creature Size" isSize={true} />
        </div>
      </React.Fragment>
    );
  }
}

//renders onto the page
export default ChallengeRatings;

/*
This code is for next sprint, in case we need it -- it creates a "submit"
button that then will take the information and pass it through the 
handle submit method.
<form onSubmit={this.handleSubmit}>
*/

//Fills array with challenge rating options
