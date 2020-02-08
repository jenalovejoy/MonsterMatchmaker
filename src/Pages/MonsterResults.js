import React from "react";
import "../CSS/MonsterResults.css";
import ResultsTable from "../Components/ResultsTable";

class MonsterResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="filter-component">
          <h3 class="text-light text-center" id="resultsTitle">
            I have found some monsters for you
          </h3>
        </div>
        <ResultsTable/>
      </React.Fragment>
    );
  }
}
export default MonsterResults;
