import AlignmentTypeSelector from "../Components/AlignmentTypeSelector";
import axios from 'axios';
import ChallengeSelector from "../Components/ChallengeSelector";
import * as ClickHandlers from "./ClickHandlers";
import "../CSS/FinderStyles.css";
import { Link } from "react-router-dom";
import MonsterTypeSelector from "../Components/MonsterTypeSelector";
import Movement from "../Components/Movement";
import React from "react";
import SizeSelector from "../Components/SizeSelector";


const ALIGNMENT_OPTIONS = ["Lawful Good", "Lawful Neutral", "Lawful Evil",
  "Neutral Good", "Neutral Neutral", "Neutral Evil",
  "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];

const TYPE_OPTIONS = [
  "Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental",
  "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"
];

const MOVEMENT_OPTIONS = [
  "Fly",
  "Walk",
  "Burrow",
  "Swim",
  "Climb"
];

class MonsterFinder extends React.Component {
  constructor(props) {
    super(props);
    // this.storeDataLocal = this.storeDataLocal.bind(this);
    this.state = {
      data: [],
      // movementCheckboxes: Array(5).fill(false), //holds the movement fields
      movementCheckboxes: MOVEMENT_OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),
      challengeRatings: { min: "", max: "" },
      sizes: {min: "Tiny", max: "Gargantuan"},
      alignmentCheckboxes: ALIGNMENT_OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),
      typeCheckboxes: TYPE_OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    };
  }
  //for searching the database
  findInDB = () => {
    this.props.storeData(undefined);
    axios.post('https://6f2fso95cd.execute-api.us-east-2.amazonaws.com/api/FindMonsters', {
      //movement

      movements: this.state.movementCheckboxes,
      //alignment
      alignments: this.state.alignmentCheckboxes,
      //monster type
      types: this.state.typeCheckboxes,
      //size
      sizesGiven: this.state.sizes,
      //challenge
      challengeRatings: this.state.challengeRatings
    })
      .then((response) => {
        this.props.storeData(response.data);

      }, (error) => {
        console.log(error);
      });
  };


  render() {
    return (
      <React.Fragment>
        <h3 id="title-header">
          Enter your monster preferences.
        </h3>

        <article className="filterBody">
          {/* <!-- css style for the whole page frame --> */}
          <div className="parentContainerListVertical">
            {/* <!-- FIRST PAIRING --> */}
            <div className="parentContainerPairHorizontal">
              {/* <!-- ITEM 1 IN FIRST PAIRING --> */}

              <div className="subContainerPairHorizontal">
                <ChallengeSelector
                  setMinChallenge={(i) => ClickHandlers.setMinChallenge(this, i)}
                  setMaxChallenge={(i) => ClickHandlers.setMaxChallenge(this, i)}
                />
              </div>
              <div className="subContainerPairHorizontal">
                <SizeSelector
                  setMinSize={(i) => ClickHandlers.setMinSize(this, i)}
                  setMaxSize={(i) => ClickHandlers.setMaxSize(this, i)} />
              </div>
              <div className="subContainerPairHorizontal">
                <Movement
                  movementCheckboxes={this.state.movementCheckboxes}
                  onClick={(i) => ClickHandlers.handleMovementClick(this, i)}
                />
              </div>
              {/* <!-- end inner horizontal pairing --> */}
            </div>
            {/* <!-- end first pairing --> */}

            {/* <!-- ALIGNMENT AND TYPE ROW --> */}
            <div className="parentContainerPairHorizontal">
                <div className="subContainerPairHorizontal">
                    <AlignmentTypeSelector
                        onClick={(i) => ClickHandlers.handleAlignmentClick(this, i)}
                        alignmentCheckboxes={this.state.alignmentCheckboxes}
                        handleCheckBoxChange={(i) => this.handleCheckBoxChange}
                    />
                </div>
                <div className="subContainerPairHorizontal">
                    <MonsterTypeSelector
                        onClick={(i) => ClickHandlers.handleMonsterTypeClick(this, i)}
                        typeCheckboxes={this.state.typeCheckboxes}
                        handleCheckBoxChange={(i) => this.handleCheckBoxChange}
                    />
                </div>
            </div>
            {/* <!--end second pairing--> */}

            {/* <!-- THIRD PAIRING --> */}
            <div className="parentContainerPairHorizontal">
              <Link to="/MonsterResults">
                <button
                  style={resultsButtonContainer}
                  className="button"
                  onClick={() => this.findInDB()}
                  //Not sure what this is actually for, removal has no effect
                  // onClick="window.location.href = '/monsterResults';" 
                  title="Monster Results"
                >
                  Find Monsters
                  </button>
              </Link>
            </div>
            {/* <!-- end third pairing --> */}
          </div>
        </article>
      </React.Fragment>
    );
  }
}
export default MonsterFinder;

const resultsButtonContainer = {
  paddingTop: '30px',
  display: 'flex',
  justifyContent: 'center'
}
