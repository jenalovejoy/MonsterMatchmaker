import React from "react";

class EncounterDetails extends React.Component {
  render(){
    return (
    <div class="encounter-details">
    <tr>
        <td class="results-table-item">Number of Monsters: {this.props.details["Number of Monsters"]}</td>
        <td class="results-table-item">Total XP: {this.props.details["XP Total"]}</td>
        <td class="results-table-item">Percent of max XP threshold: {this.props.details["Percent of Threshold"]}</td>

    </tr></div>
    );}
}

export default EncounterDetails;
