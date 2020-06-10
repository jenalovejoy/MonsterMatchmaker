import AlignmentTypeSelector from "../Components/AlignmentTypeSelector";
import axios from 'axios';
import * as ClickHandlers from "./ClickHandlers";
import EncounterDifficultySelector from "../Components/EncounterDifficultySelector";
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

const PLAYER_XP_THRESHOLD = {
  "1": {"Easy": 25, "Medium": 50, "Hard": 75, "Deadly": 100},
  "2": {"Easy": 50, "Medium": 100, "Hard": 150, "Deadly": 200},
  "3": {"Easy": 75, "Medium": 150, "Hard": 225, "Deadly": 400},
  "4": {"Easy": 125, "Medium": 250, "Hard": 375, "Deadly": 500},
  "5": {"Easy": 250, "Medium": 500, "Hard": 750, "Deadly": 1100},
  "6": {"Easy": 300, "Medium": 600, "Hard": 900, "Deadly": 1400},
  "7": {"Easy": 350, "Medium": 750, "Hard": 1100, "Deadly": 1700},
  "8": {"Easy": 450, "Medium": 900, "Hard": 1400, "Deadly": 2100},
  "9": {"Easy": 550, "Medium": 1100, "Hard": 1600, "Deadly": 2400},
  "10": {"Easy": 600, "Medium": 1200, "Hard": 1900, "Deadly": 2800},
  "11": {"Easy": 800, "Medium": 1600, "Hard": 2400, "Deadly": 3600},
  "12": {"Easy": 1000, "Medium": 2000, "Hard": 3000, "Deadly": 4500},
  "13": {"Easy": 1100, "Medium": 2200, "Hard": 3400, "Deadly": 5100},
  "14": {"Easy": 1250, "Medium": 2500, "Hard": 3800, "Deadly": 5700},
  "15": {"Easy": 1400, "Medium": 2800, "Hard": 4300, "Deadly": 6400},
  "16": {"Easy": 1600, "Medium": 3200, "Hard": 4800, "Deadly": 7200},
  "17": {"Easy": 2000, "Medium": 3900, "Hard": 5900, "Deadly": 8800},
  "18": {"Easy": 2100, "Medium": 4200, "Hard": 6300, "Deadly": 9500},
  "19": {"Easy": 2400, "Medium": 2900, "Hard": 7300, "Deadly": 10900},
  "20": {"Easy": 2800, "Medium": 5700, "Hard": 8500, "Deadly": 12700}
}

const experience = [
  0,
  10,
  25,
  50,
  100,
  200,
  450,
  700,
  1100,
  1800,
  2300,
  2900,
  3900,
  5000,
  5900,
  7200,
  8400,
  10000,
  11500,
  13000,
  15000,
  18000,
  20000,
  22000,
  25000,
  33000,
  41000,
  50000,
  62000,
  75000,
  90000,
  105000,
  120000,
  135000,
  155000, 
]

const challengeRatings = [
  0,
  0,
  1/8,
  1/4,
  1/2,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30, 
]


class EncounterBuilder extends React.Component {
  constructor(props){
    super(props);
    // this.storeDataLocal = this.storeDataLocal.bind(this);
    this.state = {      
      //data: [],
      // movementCheckboxes: Array(5).fill(false), //holds the movement fields
      movementCheckboxes: MOVEMENT_OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),
      challengeRatings: [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30 ],
      encounterDifficulty: Array(1).fill(""),

      numberOfPlayers: 4,
      playerLevels: [1,1,1,1],
      sizes: {min: "Tiny",max: "Gargantuan"},

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

  initPlayerLevels(numberOfPlayers){
    let playerLevels =  new Array(numberOfPlayers);

    for (let i = 0; i < numberOfPlayers; i++){
        playerLevels[i] = 1;
    }
  }

  //Calculates allowed Challenge Ratings from Encounter Difficulty
  partyCRs(){
    var hasMin=true;
    var hasMax=true;
    var challenge=this.state.encounterDifficulty[0];
    var challenge2="";
    //Determines upper bounds
    if(challenge.localeCompare("Trivial")===0){
      challenge2="Easy";
      hasMin=false;
    }if(challenge.localeCompare("Easy")===0){
      challenge2="Medium";
    }if(challenge.localeCompare("Medium")===0){
      challenge2="Hard";
    }if(challenge.localeCompare("Hard")===0){
      challenge2="Deadly";
    }if(challenge.localeCompare("Deadly")===0){
      hasMax=false;
    }
    var partySize=0;
    var xpMin=0;
    var xpMax=0;
    //Gets the partys xp thresholds
    var d;
    for(d=0; d<this.state.playerLevels.length; d++) {
      if(this.state.playerLevels[d]!==0){
          xpMin=xpMin+PLAYER_XP_THRESHOLD[this.state.playerLevels[d]][challenge];
          xpMax=xpMax+PLAYER_XP_THRESHOLD[this.state.playerLevels[d]][challenge2];
        partySize++;
      }
    }

    if(hasMax===false)
      xpMax=155001;
    if(hasMin===false)
      xpMin=0;


      this.props.saveEncounterParams(xpMin, xpMax);
    
    var i;
    for(i=1; i<16; i++){ //for different numbers of monsters
      //console.log(i);
      var multiplier=1;
      //one monster
      if(i===1 && partySize<4)
        multiplier=1.5;
      if(i===1 && partySize>5)
        multiplier=0.5;
        //two monsters
      if(i===2 && partySize<4)
        multiplier=2;
      if(i===2 && partySize>5)
        multiplier=1;
      if(i===2 && partySize>3 && partySize<6)
        multiplier=1.5;
      //three to six monsters
      if(i>2 && i<7 && partySize<4)
        multiplier=2.5;
      if(i>2 && i<7 && partySize>5)
        multiplier=1.5;
      if(i>2 && i<7 && partySize>3 && partySize<6)
        multiplier=2;
      //seven to 10 
      if(i>6 && i<11 && partySize<4)
        multiplier=3;
      if(i>6 && i<11 && partySize>5)
        multiplier=2;
      if(i>2 && i<7 && partySize>3 && partySize<6)
        multiplier=2.5;
      //11 to 14 
      if(i>10 && i<15 && partySize<4)
        multiplier=4;
      if(i>10 && i<15 && partySize>5)
        multiplier=2.5;
      if(i>10 && i<15 && partySize>3 && partySize<6)
        multiplier=3;
      //15 or more
      if(i>14 && partySize<4)
        multiplier=3;
      if(i>14 && partySize>5)
        multiplier=5;
      if(i>14 && partySize>3 && partySize<6)
        multiplier=4;

      var x=0;
      for(let val of experience){
        if(val>=xpMin/(i*multiplier) && val<xpMax/(i*multiplier)){
          if(!this.state.challengeRatings.includes(challengeRatings[x]))
            this.state.challengeRatings.push(challengeRatings[x]);
        }
        x=x+1;
      }
      var position=0;
      position=position+1;
    }
    console.log("minimum xp "+xpMin);
    console.log("maximum xp "+xpMax);
    console.log(this.state.challengeRatings);
    
    // console.log("party size "+partySize);
    
  }

  //for searching the database
  findInDB = () => {

    this.partyCRs(); //13.58.12.74
    let data = {
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
    };
    console.log(data);
    axios.post('https://6f2fso95cd.execute-api.us-east-2.amazonaws.com/api/EncounterBuilder',data)
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
          Enter your party information and encounter preferences
        </h4>

        <article className="filterBody">
          {/* <!-- css style for the whole page frame --> */}

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
               setMaxChallenge={(i) => ClickHandlers.setEncounterDifficulty(this, i)}
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
