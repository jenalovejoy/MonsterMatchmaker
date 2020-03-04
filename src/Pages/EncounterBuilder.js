import React from "react";
import { Link } from "react-router-dom";
//import styles from "../CSS/FinderStyles.css";
import PlayerLevelSelector from "../Components/PlayerLevelSelector";
import ChallengeAndSize from "../Components/ChallengeAndSize";
import AlignmentTypeSelector from "../Components/AlignmentTypeSelector";
import MonsterTypeSelector from "../Components/MonsterTypeSelector";
import Movement from "../Components/Movement";

const OPTIONS = ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];
const _OPTIONS2 = [
  "Aberration",
  "Beast",
  "Celestial",
  "Construct",
  "Dragon",
  "Elemental",
  "Fey",
  "Fiend",
  "Giant",
  "Humanoid",
  "Monstrosity",
  "Ooze",
  "Plant",
  "Undead"
];

class EncounterBuilder extends React.Component {
  constructor(props){
    super(props);
    // this.storeDataLocal = this.storeDataLocal.bind(this);
    this.state = {
      data: [],
      speedA: Array(5).fill(false), //holds the movement fields
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),
      checkboxes2: _OPTIONS2.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    };
  }
  render() {
    return (
      <React.Fragment>
        <h4 style={promptHeader}>
          Enter your party information and encounter preferences
        </h4>

        <article style={filterBody}>
          {/* <!-- css style for the whole page frame --> */}
          <div style={parentContainerListVertical}>
            
            {/* <!-- FIRST PAIRING --> */}
            <div style={parentContainerPairHorizontal}>
              {/* <!-- ITEM 1 IN FIRST PAIRING --> */}
              <PlayerLevelSelector />

              {/* <!-- ITEM 2 IN FIRST PAIRING -->
                  <!-- SUB PAIRING IN 2ND ITEM OF FIRST PAIRING --> */}
                <div style={subContainerPairHorizontal}>
                  <ChallengeAndSize />
                  <Movement
                speedA={this.state.speedA}
                onClick={(i) => this.handleClick(i)}/>
              <AlignmentTypeSelector
                onClick={(i) => this.handleClick2(i)}
                checkboxes={this.state.checkboxes}
                handleCheckBoxChange={(i) => this.handleCheckBoxChange}
              />
                  <MonsterTypeSelector />

                  {/* <!-- second item in inner horizontal pairing --> */}
                </div>
                {/* <!-- end inner horizontal poairing --> */}
                </div>
              {/* <!-- end first pairing --> */}
              </div>

              {/* <!-- ALIGNMENT AND TYPE ROW --> */}
              <div style={parentContainerPairHorizontal}>
                <AlignmentTypeSelector />
                <MonsterTypeSelector />
              </div>
              {/* <!--end second pairing--> */}

              {/* <!-- BUTTON ROW --> */}
              <div style={parentContainerPairHorizontal}>
                <Link to="/encounterResults">
                  <button 
                    style = {resultsButtonContainer}
                    className="button"
                    onClick="window.location.href = '/encounterResults;"
                    title="Encounter Results"
                  >
                    Build Encounter
                  </button>
                </Link>
              </div>
              {/* <!-- end third pairing --> */}
        </article>
      </React.Fragment>
    );
  }
}

export default EncounterBuilder;

const promptHeader = { /* The discriptive text at the top of each search page*/
  paddingTop: '20px',
  paddingLeft: '50px',
  paddingRight: '20px'
}

const filterBody = { /* CSS style for the whole search page */
  margin: 'auto',
  width: '95%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const parentContainerListVertical = {
  display: 'flex', /* or inline-flex */
  flexDirection: 'column', /*order left to right normally*/
  flexWrap: 'wrap', /*place second item below when small*/
  justifyContent: 'space-between' /* justifies to far left and right, may not work on Edge */
}

const parentContainerPairHorizontal = {
  display: 'flex', /* or inline-flex */
  flexDirection: 'row', /*order left to right normally*/
  flexWrap: 'wrap', /*place second item below when small*/
  justifyContent: 'space-between', /* justifies to far left and right, may not work on Edge */
  alignItems: 'flex-start',
  padding: '30px'
}

const subContainerPairHorizontal = {
  display: 'flex', /* or inline-flex */
  flexDirection: 'row', /*order left to right normally*/
  flexWrap: 'wrap', /*place second item below when small*/
  justifyContent: 'space-between', /* justifies to far left and right, may not work on Edge */
  alignItems: 'flex-start',
  paddingRight: '50px',
}

 const resultsButtonContainer = {
  paddingTop: '30px',
  display: 'flex',
  justifyContent: 'center'
}
