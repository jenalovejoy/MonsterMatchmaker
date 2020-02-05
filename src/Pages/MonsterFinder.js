import React from "react";
import { Link } from "react-router-dom";
import ChallengeAndSize from "../Components/ChallengeAndSize";
//import styles from "../CSS/FinderStyles.css";
import MonsterTypeSelector from "../Components/MonsterTypeSelector";
import AlignmentTypeSelector from "../Components/AlignmentTypeSelector";
import Movement from "../Components/Movement";

class MonsterFinder extends React.Component {
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
              <ChallengeAndSize />
              <Movement />
              <AlignmentTypeSelector />
            </div>
              {/* <!-- end first pairing --> */}

              {/* <!-- SECOND PAIRING -->
        <!-- JENA'S .TS GENERATED FIELDS --> */}
            <div style={parentContainerPairHorizontal}>
              <MonsterTypeSelector />
            </div>
              {/* <!--end second pairing--> */}

              {/* <!-- THIRD PAIRING --> */}
            <div style={parentContainerPairHorizontal}>
              <Link to="/encounterBuilder">
                <button
                  style = {resultsButtonContainer}
                  className="button"
                  onClick="window.location.href = '/monsterResults';"
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

// const subContainerPairVertical = {
//   display: 'flex', /* or inline-flex */
//   flexDirection: 'column', /*order left to right normally*/
//   flexWrap: 'wrap', /*place second item below when small*/
//   justifyContent: 'center', /* id like this to say space-between but it is not supported on edge*/
//   paddingRight: '25px',
//   paddingBottom: '25px'
// }
// const dropdown = { /* makes the dropdown fields appear side by side */
//   display: 'block',
//   paddingBottom: '50px',
//   paddingRight: '50px',
// }