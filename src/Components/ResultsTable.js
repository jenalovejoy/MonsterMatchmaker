import React from "react";
import ResultsRow from "./ResultsRow";
import ErrorAlert from "./ErrorAlert";

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
  "Speed (walk)",
  "Speed (fly)",
  "Speed (swim)",
  "Speed (burrow)",
  "Speed (climb)",
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

class ResultsTable extends React.Component {

  createTableHeader = heading => (
    <th key={Math.random().toString(36).substr(2, 9)} className="results-table-header">{heading}</th>
  );

  createTableHeadings = () => TABLE_HEADINGS.map(this.createTableHeader);

  render() {

    let render;
    // if there are results, show the table
    if (this.props.data.length !== 0) {
      render =
        (<table id={this.props.id}>
          <thead>
            <tr>
              {this.createTableHeadings(TABLE_HEADINGS)}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(id => (<ResultsRow key={Math.random().toString(36).substr(2, 9)} id={id} />))}
          </tbody>
        </table>);

    } else {
      render = <ErrorAlert errorMessage="No results for this query" />
    }

    return (
      render

    );
  }
}

export default ResultsTable;
