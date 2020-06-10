import Checkbox from "./Checkbox";
import React from "react";

const TYPE_OPTIONS = [
  "Aberration",
  "Beast",
  "Celestial",
  "Construct",
  "Dragon",
  "Elemental",
  "Fey",
  "Fiend",
  "Giant",
  "Humanoid",
  "Monstrosity",
  "Ooze",
  "Plant",
  "Undead"
];

class MonsterTypeSelector extends React.Component {
  createCheckbox = option => (
    <Checkbox
      label={option}
      onClick={() => this.props.onClick(option)}
      key={option}
    />
  );

  createCheckboxes = () => TYPE_OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <legend style={{ fontSize: '25px' }}>Type</legend>
        <div className="gridFormatAlignment">
          {this.createCheckboxes()}
        </div>
      </form>
    );
  }
}
export default MonsterTypeSelector;
