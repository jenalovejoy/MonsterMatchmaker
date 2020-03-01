import React from "react";
import ResultsRow from "./ResultsRow";

const TABLE_HEADINGS = [
  "Monster Name",
  "Challenge Rating",
  "Size",
  "Type",
  "Subtype",
  "Alignment",
  "Armor Class",
  "Hit Points",
  "Hit Dice",
  "Speed (walk, fly, swim)",
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

class ResultsTable extends React.Component {

  createTableHeader = heading => (
    <th class="resultsTableHeading">{heading}</th>
  );

  createTableHeadings = () => TABLE_HEADINGS.map(this.createTableHeader);

  render(){
    return (
        <table id="monsterResultsTable">
            <tr>
              {this.createTableHeadings(TABLE_HEADINGS)}
            </tr>
            {this.props.data.map(id=>(<ResultsRow id={id}/>))}    
        </table>
       
    );
  }
}

export default ResultsTable;
