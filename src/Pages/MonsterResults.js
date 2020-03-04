import "../CSS/MonsterResults.css";
import React from "react";
import ResultsTable from "../Components/ResultsTable";

class MonsterResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="filter-results-title">
          <h3 class="text-light text-center" id="title-header">
            I have found some monsters for you
          </h3>
        </div>
        <div class="results-table">
          <ResultsTable id="monster-results" data={this.props.data}/>
        </div>
        
      </React.Fragment>
    );
  }
}
export default MonsterResults;
