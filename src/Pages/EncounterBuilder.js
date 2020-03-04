import AlignmentTypeSelector from "../Components/AlignmentTypeSelector";
import axios from 'axios';
import * as ClickHandlers from "./ClickHandlers";
import EncounterDifficultySelector from "../Components/EncounterDifficultySelector";
import * as FilterBuilder from "./FilterBuilder"
import { Link } from "react-router-dom";
import MonsterTypeSelector from "../Components/MonsterTypeSelector";
import Movement from "../Components/Movement";
import PlayerLevelSelector from "../Components/PlayerLevelSelector";
import React from "react";
import SizeSelector from "../Components/SizeSelector";
import styles from "../CSS/FinderStyles.css";


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

class EncounterBuilder extends React.Component {
  constructor(props){
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
      playerLevels: [1, 1, 1, 1],
      challengeRatings: {min: 0,
                        max: 30},
      sizes: {min: "",
              max: ""},
      encounterDifficulty: "Easy", // ENCOUNTER DIFFICULTY DROPDOWN
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
    axios.post('http://localhost:3001/api/monsters',
      {  
        // filter: FilterBuilder.getFilters(this)
        //movement
        fly: this.state.movementCheckboxes["Fly"],
        walk: this.state.movementCheckboxes["Walk"],
        burrow: this.state.movementCheckboxes["Burrow"],
        swim: this.state.movementCheckboxes["Swim"],
        climb: this.state.movementCheckboxes["Climb"],
        //alignment
        lawfulGood: this.state.alignmentCheckboxes["Lawful Good"],
        neutralGood: this.state.alignmentCheckboxes["Neutral Good"],
        chaoticGood: this.state.alignmentCheckboxes["Chaotic Good"],
        lawfulNeutral: this.state.alignmentCheckboxes["Lawful Neutral"],
        neutral: this.state.alignmentCheckboxes["Neutral Neutral"],
        chaoticNeutral: this.state.alignmentCheckboxes["Chaotic Neutral"],
        lawfulEvil: this.state.alignmentCheckboxes["Lawful Evil"],
        neutralEvil: this.state.alignmentCheckboxes["Neutral Evil"],
        chaoticEvil: this.state.alignmentCheckboxes["Chaotic Evil"],
        //monster type
        aberration: this.state.typeCheckboxes["Aberration"],
        dragon: this.state.typeCheckboxes["Dragon"],
        giant: this.state.typeCheckboxes["Giant"],
        plant: this.state.typeCheckboxes["Plant"],
        beast: this.state.typeCheckboxes["Beast"],
        elemental: this.state.typeCheckboxes["Elemental"],
        humanoid: this.state.typeCheckboxes["Humanoid"],
        undead: this.state.typeCheckboxes["Undead"],
        celestial: this.state.typeCheckboxes["Celestial"],
        fey: this.state.typeCheckboxes["Fey"],
        monstrosity: this.state.typeCheckboxes["Monstrosity"],
        construct: this.state.typeCheckboxes["Construct"],
        fiend: this.state.typeCheckboxes["Fiend"],
        ooze: this.state.typeCheckboxes["Ooze"],
        //size
        minSize: this.state.sizes.min,
        maxSize: this.state.sizes.max,
        //challenge
        minChallenge: this.state.challengeRatings.min,
        maxChallenge: this.state.challengeRatings.max,

        // Encounter Data
        playerLevels: this.state.playerLevels,
        encounterDifficulty: this.state.encounterDifficulty
      }
    )
    .then((response) => {
      console.log(response.data);
      this.props.storeData(response.data);

    }, (error) => {
      console.log(error);
    });
  };

  render() {
    return (
      <React.Fragment>
        <h4 className="promptHeader">
          Enter your party information and encounter preferences
        </h4>

        <article className="filterBody">
          <div className="parentContainerListVertical">
            
            {/* <!-- FIRST PAIRING --> */}
            <div className="parentContainerPairHorizontal">
              {/* <!-- ITEM 1 IN FIRST PAIRING --> */}

              <div className="subContainerPairHorizontal">
                <PlayerLevelSelector 
                  playerLevels={this.state.playerLevels}
                  setPlayerLevel={(level, playerNumber) => ClickHandlers.setPlayerLevel(this, level, playerNumber)}/>
              </div>
              <div className="subContainerPairHorizontal">
                <EncounterDifficultySelector 
                  onClick={(i) => ClickHandlers.setEncounterDifficulty(this, i)}/>
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
            {/* <!-- end inner horizontal poairing --> */}
            </div>
            {/* <!-- end first pairing --> */}

            {/* <!-- ALIGNMENT AND TYPE ROW --> */}
            <div className="parentContainerPairHorizontal">
              <AlignmentTypeSelector
                onClick={(i) => ClickHandlers.handleAlignmentClick(this, i)}
                alignmentCheckboxes={this.state.alignmentCheckboxes}
                handleCheckBoxChange={(i) => this.handleCheckBoxChange}
              />
              <MonsterTypeSelector 
                onClick={(i) => ClickHandlers.handleMonsterTypeClick(this, i)}
                typeCheckboxes={this.state.typeCheckboxes}
                handleCheckBoxChange={(i) => this.handleCheckBoxChange}
              />
            </div>

            {/* <!-- BUTTON ROW --> */}
            <div className="parentContainerPairHorizontal">
              <Link to="/encounterResults">
                <button 
                  style = {styles.resultsButtonContainer}
                  className="button"
                  // onClick="window.location.href = '/encounterResults;"
                  onClick={() => this.findInDB()}
                  title="Encounter Results"
                >
                  Build Encounter
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

export default EncounterBuilder;
