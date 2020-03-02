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
      challengeRatings: Array(2).fill(""),
      sizes: Array(2).fill(""),
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
    axios.post('http://localhost:3001/api/findData',{
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
      minSize: this.state.sizes[0],
      maxSize: this.state.sizes[1],
      //challenge
      minChallenge: this.state.challengeRatings[0],
      maxChallenge: this.state.challengeRatings[1],
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
        <h4 className="promptHeader">
          Enter your monster preferences.
        </h4>

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
              {/* <!--end second pairing--> */}

              {/* <!-- THIRD PAIRING --> */}
              <div className="parentContainerPairHorizontal">
                <Link to="/MonsterResults">
                  <button
                    style = {resultsButtonContainer}
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
