import React from 'react';
import Checkbox from './Checkbox';
import "../CSS/FinderStyles.css";

const ALIGNMENT_OPTIONS = ["Lawful Good", "Lawful Neutral", "Lawful Evil", 
  "Neutral Good", "Neutral Neutral", "Neutral Evil", 
  "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];

class AlignmentTypeSelector extends React.Component {

  createCheckbox = option => (
    <Checkbox
      label={option}
      onClick={()=>this.props.onClick(option)}
      key={option}
    />
  );

  createCheckboxes = () => ALIGNMENT_OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <form  onSubmit={this.handleFormSubmit}>
        <legend style = {{fontSize: '25px'}}>Alignment</legend>
        <div className="gridFormatAlignment">
          {this.createCheckboxes()}
        </div>
      </form>
    );
  }
}

export default AlignmentTypeSelector;