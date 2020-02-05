import React from "react";

const _OPTIONS = [
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

// CSS styling to arange check boxes
const gridFormat = {
  display: "grid",
  gridTemplateColumns: "125px 125px 125px 125px"
};

class Checkbox2 extends React.Component{
  render(){
    return(
      <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={this.props.label}
        checked={this.props.isSelected}
        onChange={(e) => this.props.onClick()}
        className="form-check-input"
      />
      {this.props.label}
    </label>
  </div>
    );
  }
}

class MonsterTypeSelector extends React.Component {
  createCheckbox = option => (
    <Checkbox2
      label={option}
      onClick={()=>this.props.onClick(option)}
      key={option}
    />
  );

  createCheckboxes = () => _OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <form style={gridFormat}>
        {this.createCheckboxes()}
      </form>
    );
  }
}
export default MonsterTypeSelector;
