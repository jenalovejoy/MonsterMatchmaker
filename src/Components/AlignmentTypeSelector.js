import React from 'react';

const OPTIONS = ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];

// CSS styling to arange check boxes
const gridFormatAlignment = {
    display: 'grid',
    gridTemplateColumns: '160px 175px 150px'
  }

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

  class AlignmentTypeSelector extends React.Component {
  
    createCheckbox = option => (
      <Checkbox2
        label={option}
        onClick={()=>this.props.onClick(option)}
        key={option}
      />
    );
  
    createCheckboxes = () => OPTIONS.map(this.createCheckbox);
  
    render() {
      return (
        <form style={gridFormatAlignment}>
          {this.createCheckboxes()}
        </form>
      );
    }
  }

  export default AlignmentTypeSelector;