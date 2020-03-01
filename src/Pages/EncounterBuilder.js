import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/FinderStyles.css";
import PlayerLevelSelector from "../Components/PlayerLevelSelector";
import AlignmentTypeSelector from "../Components/AlignmentTypeSelector";
import MonsterTypeSelector from "../Components/MonsterTypeSelector";
import Movement from "../Components/Movement";
import ChallengeSelector from "../Components/ChallengeSelector";
import SizeSelector from "../Components/SizeSelector";
import EncounterDifficultySelector from "../Components/EncounterDifficultySelector";

const ALIGNMENT_OPTIONS = ["Lawful Good", "Lawful Neutral", "Lawful Evil", 
                  "Neutral Good", "Neutral Neutral", "Neutral Evil", 
                  "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];

const TYPE_OPTIONS = [
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
      checkboxes: ALIGNMENT_OPTIONS.reduce(
        (ALIGNMENT_OPTIONS, option) => ({
          ...ALIGNMENT_OPTIONS,
          [option]: false
        }),
        {}
      ),
      checkboxes2: TYPE_OPTIONS.reduce(
        (ALIGNMENT_OPTIONS, option) => ({
          ...ALIGNMENT_OPTIONS,
          [option]: false
        }),
        {}
      )
    };
  }
  render() {
    return (
      <React.Fragment>
        <h4 className="promptHeader">
          Enter your party information and encounter preferences
        </h4>

        <article className="filterBody">
          {/* <!-- css style for the whole page frame --> */}

          <div className="parentContainerListVertical">
            
            {/* <!-- FIRST PAIRING --> */}
            <div className="parentContainerPairHorizontal">
              {/* <!-- ITEM 1 IN FIRST PAIRING --> */}

              <div className="subContainerPairHorizontal">
                <PlayerLevelSelector />
              </div>
              <div className="subContainerPairHorizontal">
                <EncounterDifficultySelector />
              </div>
              <div className="subContainerPairHorizontal">
                <ChallengeSelector/>
              </div>
              <div className="subContainerPairHorizontal">
                <SizeSelector/>
              </div>
              <div className="subContainerPairHorizontal">
                <Movement
                  speedA={this.state.speedA}
                  onClick={(i) => this.handleClick(i)}
                />
              </div>
            {/* <!-- end inner horizontal poairing --> */}
            </div>
            {/* <!-- end first pairing --> */}

            {/* <!-- ALIGNMENT AND TYPE ROW --> */}
            <div className="parentContainerPairHorizontal">
              <AlignmentTypeSelector
                onClick={(i) => this.handleClick2(i)}
                checkboxes={this.state.checkboxes}
                handleCheckBoxChange={(i) => this.handleCheckBoxChange}
              />
                  <MonsterTypeSelector />
            </div>

            {/* <!-- BUTTON ROW --> */}
            <div className="parentContainerPairHorizontal">
              <Link to="/encounterResults">
                <button 
                  style = {styles.resultsButtonContainer}
                  className="button"
                  onClick="window.location.href = '/encounterResults;"
                  title="Encounter Results"
                >
                  Build Encounter
                </button>
              </Link>
            </div>
            {/* <!-- end third pairing --> */}
          </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default EncounterBuilder;
