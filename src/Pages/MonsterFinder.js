import React from "react";
import axios from 'axios';
import ChallengeAndSize from "../Components/ChallengeAndSize";
import "../CSS/FinderStyles.css";
import { Link } from "react-router-dom";
import ChallengeAndSize from "../Components/ChallengeAndSize";
//import styles from "../CSS/FinderStyles.css";
import MonsterTypeSelector from "../Components/MonsterTypeSelector";
import AlignmentTypeSelector from "../Components/AlignmentTypeSelector";
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

class MonsterFinder extends React.Component {
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
  //for searching the database
  findInDB = () => {
    axios.post('http://localhost:3001/api/findData',{
      //movement
      fly: this.state.speedA[0],
      walk: this.state.speedA[1],
      burrow: this.state.speedA[2],
      swim: this.state.speedA[3],
      climb: this.state.speedA[4],
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
    })
    .then((response) => {
      this.props.storeData(response.data);

    }, (error) => {
      console.log(error);
    });
  };

  //for movement
  handleClick(i) {
    const speedA = this.state.speedA.slice();
    speedA[i] = !speedA[i];
    this.setState({speedA: speedA});
    console.log(speedA[i], i);
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
        <h4 style={promptHeader}>
          Enter your monster preferences.
        </h4>

        <article style={filterBody}>
          {/* <!-- css style for the whole page frame --> */}
          <div style={parentContainerListVertical}>
            {/* <!-- FIRST PAIRING --> */}
            <div style={parentContainerPairHorizontal}>
              <ChallengeAndSize />
              <Movement
                speedA={this.state.speedA}
                onClick={(i) => this.handleClick(i)}/>
              <AlignmentTypeSelector
                onClick={(i) => this.handleClick2(i)}
                checkboxes={this.state.checkboxes}
                handleCheckBoxChange={(i) => this.handleCheckBoxChange}
              />
            </div>
              {/* <!-- end first pairing --> */}

              {/* <!-- SECOND PAIRING -->
        <!-- JENA'S .TS GENERATED FIELDS --> */}
            <div style={parentContainerPairHorizontal}>
              <MonsterTypeSelector onClick={(i) => this.handleClick3(i)}
                checkboxes2={this.state.checkboxes2}
                handleCheckBoxChange={(i) => this.handleCheckBoxChange}
              />
            </div>
              {/* <!--end second pairing--> */}

              {/* <!-- THIRD PAIRING --> */}
              <div style={parentContainerPairHorizontal}>
                {/* <Link to="/MonsterResults"> */}
                  <button
                    style = {resultsButtonContainer}
                    className="button"
                    onClick={() => this.findInDB()}
                    //onClick="window.location.href = '/monsterResults';"
                    title="Monster Results"
                  >
                    Find Monsters
                  </button>
                {/* </Link> */}
              </div>
            {/* <!-- end third pairing --> */}
          </div>
        </article>
      </React.Fragment>
    );
  }
}
export default MonsterFinder;

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

 const resultsButtonContainer = {
  paddingTop: '30px',
  display: 'flex',
  justifyContent: 'center'
}
