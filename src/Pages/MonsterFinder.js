import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../CSS/FinderStyles.css";
import MonsterTypeSelector from "../Components/MonsterTypeSelector";
import AlignmentTypeSelector from "../Components/AlignmentTypeSelector";
import Movement from "../Components/Movement";
import ChallengeSelector from "../Components/ChallengeSelector";
import SizeSelector from "../Components/SizeSelector";

const ALIGNMENT_OPTIONS = ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];
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
      speedA: Array(5).fill(false), //holds the movement fields
      speedA: MOVEMENT_OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),
      challengeRatings : Array(2).fill(""),
      sizes : Array(2).fill(""),
      checkboxes: ALIGNMENT_OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),
      checkboxes2: TYPE_OPTIONS.reduce(
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
      fly: this.state.speedA["Fly"],
      walk: this.state.speedA["Walk"],
      burrow: this.state.speedA["Burrow"],
      swim: this.state.speedA["Swim"],
      climb: this.state.speedA["Climb"],
      //alignment
      lawfulGood: this.state.checkboxes["Lawful Good"],
      neutralGood: this.state.checkboxes["Neutral Good"],
      chaoticGood: this.state.checkboxes["Chaotic Good"],
      lawfulNeutral: this.state.checkboxes["Lawful Neutral"],
      neutral: this.state.checkboxes["Neutral Neutral"],
      chaoticNeutral: this.state.checkboxes["Chaotic Neutral"],
      lawfulEvil: this.state.checkboxes["Lawful Evil"],
      neutralEvil: this.state.checkboxes["Neutral Evil"],
      chaoticEvil: this.state.checkboxes["Chaotic Evil"],
      //monster type
      aberration: this.state.checkboxes2["Aberration"],
      dragon: this.state.checkboxes2["Dragon"],
      giant: this.state.checkboxes2["Giant"],
      plant: this.state.checkboxes2["Plant"],
      beast: this.state.checkboxes2["Beast"],
      elemental: this.state.checkboxes2["Elemental"],
      humanoid: this.state.checkboxes2["Humanoid"],
      undead: this.state.checkboxes2["Undead"],
      celestial: this.state.checkboxes2["Celestial"],
      fey: this.state.checkboxes2["Fey"],
      monstrosity: this.state.checkboxes2["Monstrosity"],
      construct: this.state.checkboxes2["Construct"],
      fiend: this.state.checkboxes2["Fiend"],
      ooze: this.state.checkboxes2["Ooze"],
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

  setMinChallenge(i){
    this.setState(prevState => ({
      challengeRatings: {
        ...prevState.challengeRatings,
        [0]: i
      },
    }));
    console.log(this.state.challengeRatings);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }
  setMaxChallenge(i){
    this.setState(prevState => ({
      challengeRatings: {
        ...prevState.challengeRatings,
        [1]: i
      },
    }));
    console.log(this.state.challengeRatings);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

  setMinSize(i){
    this.setState(prevState => ({
      sizes: {
        ...prevState.sizes,
        [0]: i
      },
    }));
    console.log(this.state.sizes);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }
  setMaxSize(i){
    this.setState(prevState => ({
      sizes: {
        ...prevState.sizes,
        [1]: i
      },
    }));
    console.log(this.state.sizes);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

  //for movement
  // setMaxChallenge(i) {
  //   const speedA = this.state.speedA.slice();
  //   speedA[i] = !speedA[i];
  //   this.setState({speedA: speedA});
  //   console.log(speedA[i], i);
  // }

  // movement
  handleClick(i) {
    this.setState(prevState => ({
      speedA: {
        ...prevState.speedA,
        [i]: !prevState.speedA[i]
      },
    }));
    console.log(this.state.speedA);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

  // alignment
  handleClick2(i) {
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [i]: !prevState.checkboxes[i]
      },
    }));
    console.log(this.state.checkboxes);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

  //monster type
  handleClick3(i) {
    this.setState(prevState => ({
      checkboxes2: {
        ...prevState.checkboxes2,
        [i]: !prevState.checkboxes2[i]
      },
    }));
    console.log(this.state.checkboxes2);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

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
                setMinChallenge={(i) => this.setMinChallenge(i)}
                setMaxChallenge={(i) => this.setMaxChallenge(i)}
                />
              </div>
              <div className="subContainerPairHorizontal">
                <SizeSelector 
                setMinSize={(i) => this.setMinSize(i)}
                setMaxSize={(i) => this.setMaxSize(i)} />
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
              <MonsterTypeSelector 
                onClick={(i) => this.handleClick3(i)}
                checkboxes2={this.state.checkboxes2}
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
