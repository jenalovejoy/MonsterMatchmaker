import React from "react";
import ResultsRow from "./ResultsRow";

class ResultsTable extends React.Component {
  render(){
    return (
        <table>
            <tr>
            <th>Monster Name</th>
            <th>Challenge Rating</th>
            <th>Size</th>
            <th>Type</th>
            <th>Subtype</th>
            <th>Alignment</th>
            <th>Armor Class</th>
            <th>Hit Points</th>
            <th>Hit Dice</th>
            <th>Speed (walk, fly, swim)</th>
            <th>Strength</th>
            <th>Dexterity</th>
            <th>Constitution</th>
            <th>Intelligence</th>
            <th>Wisdom</th>
            <th>Charisma</th>
            </tr>
            <ResultsRow/>
            <ResultsRow/>
            <ResultsRow/>
                
        </table>
    );
  }
}

export default ResultsTable;
