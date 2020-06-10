import { Link } from "react-router-dom";
import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-1 text-light text-center" id="title-header">Welcome!</h1>
        <h3 className="text-light text-center" id="title-header">
          Please select a method of building your encounter
        </h3>
        <div className="parent-container-pair-horizontal">
          <div>
            <Link to="/encounterBuilder">
              <button
                className="homescreen-button"
                // onClick={window.location.href = '/encounterBuilder'}
                title="Build Encounter"
              >
                Build Encounter
              </button>
            </Link>
          </div>
          <div>
            <Link to="monsterFinder">
              <button
                className="homescreen-button"
                // onClick={window.location.href = '/monsterFinder'}
                title="Search For Monsters"
              >
                Filter Monsters
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
