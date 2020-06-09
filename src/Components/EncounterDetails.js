import React from "react";

class EncounterDetails extends React.Component {
  render() {
    return (
      <div className="encounter-details">
        <table>
          <tbody>
            <tr>
              <td className="results-table-item">Number of Monsters: {this.props.details["Number of Monsters"]}</td>
              <td className="results-table-item">Total XP: {this.props.details["XP Total"]}</td>
              <td className="results-table-item">Percent of max XP threshold: {this.props.details["Percent of Threshold"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EncounterDetails;
