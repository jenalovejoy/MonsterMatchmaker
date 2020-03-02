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

const THE_PARTY=["11","11","11","11","11","11","11","0","0","0"]

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

const EXP_BY_CHALLENGE_RATING = {
  "0": 0 | 10,
  "1/8": 25,
  "1/4": 50,
  "1/2": 100,
  "1": 200,
  "2": 450,
  "3": 700,
  "4": 1100,
  "5": 1800,
  "6": 2300,
  "7": 2900,
  "8": 3900,
  "9": 5000,
  "10": 5900,
  "11": 7200,
  "12": 8400,
  "13": 10000,
  "14": 11500,
  "15": 13000,
  "16": 15000,
  "17": 18000,
  "18": 20000,
  "19": 22000,
  "20": 25000,
  "21": 33000,
  "22": 41000,
  "23": 50000,
  "24": 62000,
  "25": 75000,
  "26": 90000,
  "27": 105000,
  "28": 120000,
  "29": 135000,
  "30": 155000, 
}

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
  createEncounter = () => {
    axios.post('http://localhost:3001/api/createEncounter',{
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

  CRfromXP(xp){
    console.log("provided xp "+xp);
    if(xp<=10){
      return 0;
    }if(10<xp && xp<=25){
      return 1/8;
    }if(25<xp && xp<=50){
      return 1/4;
    }if(50<xp && xp<=100){
      return 1/2;
    }if(100<xp && xp<=200){
      return 1;
    }if(200<xp  && xp<=450){
      return 2;
    }if(450<xp  && xp<=700){
      return 3;
    }if(700<xp && xp<=1100){
      return 4;
    }if(1100<xp && xp<=1800){
      return 5;
    }if(1800<xp && xp<=2300){
      return 6;
    }if(2300<xp && xp<=2900){
      return 7;
    }if(2900<xp && xp<=3900){
      return 8;
    }if(3900<xp && xp<=5000){
      return 9;
    }if(5000<xp && xp<=5900){
      return 10;
    }if(5900<xp && xp<=7200){
      return 11;
    }if(7200<xp && xp<=8400){
      return 12;
    }if(8400<xp && xp<=10000){
      return 13;
    }if(10000<xp && xp<=11500){
      return 14;
    }if(11500<xp && xp<=13000){
      return 15;
    }if(13000<xp && xp<=15000){
      return 16;
    }if(15000<xp && xp<=18000){
      return 17;
    }if(18000<xp && xp<=20000){
      return 18;
    }if(20000<xp && xp<=22000){
      return 19;
    }if(22000<xp && xp<=25000){
      return 20;
    }if(25000<xp && xp<=33000){
      return 21;
    }if(33000<xp && xp<=41000){
      return 22;
    }if(41000<xp && xp<=50000){
      return 23;
    }if(50000<xp && xp<=62000){
      return 24;
    }if(62000<xp && xp<=75000){
      return 25;
    }if(75000<xp && xp<=90000){
      return 26;
    }if(90000<xp && xp<=105000){
      return 27;
    }if(105000<xp && xp<=120000){
      return 28;
    }if(120000<xp && xp<=135000){
      return 29;
    }if(135000<xp && xp<=155000){
      return 30;
    }if(xp<=155000){
      return 31;
    } 
  }

  partyCRs(){
    var challenge="Medium";
    var partySize=0;
    var xpMin=0;
    var xpMax=0;
    for(let val of THE_PARTY) {
      if(val!=0){
        xpMin=xpMin+PLAYER_XP_THRESHOLD[val]["Medium"];
        xpMax=xpMax+PLAYER_XP_THRESHOLD[val]["Hard"];
        partySize++;
      }
    }
    var CRMin=this.CRfromXP(xpMin/4);
    var CRMax=this.CRfromXP(xpMax-1);
    console.log("minimum xp "+xpMin);
    console.log("maximum xp "+xpMax);
    console.log("CR Min "+CRMin);
    console.log("CR Max "+CRMax);
    console.log("party size "+partySize);
    //ClickHandlers.setMinChallenge(this, CRMin);
  }

  
  

  render() {
    this.partyCRs();
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
                  onClick={() => this.createEncounter()}
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
