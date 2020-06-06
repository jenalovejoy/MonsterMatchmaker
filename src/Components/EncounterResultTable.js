import React from "react";
import ResultsTable from "./ResultsTable";
import EncounterDetails from "./EncounterDetails"

class EncounterResultTable extends React.Component {

  render(){
    return (

        <React.Fragment>
            <EncounterDetails details={this.props.details}/>
            {console.log(this.props.result)}
            <ResultsTable id="encounter-results" data={this.props.result}/>
        </React.Fragment>
    );
  }
}

export default EncounterResultTable;
