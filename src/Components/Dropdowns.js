import React from "react";

// creates the dropdowns themselves
class Dropdowns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: this.props.title, //takes in title
    };
    // required code
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Returns the value selected by the user
  handleChange(event) {
    this.props.storeData(event.target.value);
    this.setState({ value: event.target.value });
    this.myString = event.target.value;
    //console.log(this.myString);
    //this.props.value(this.myString);
  }

  //currently does nothing, will eventually pass on info to query
  handleSubmit(event) {
    event.preventDefault();
  }

  //renders dropdowns
  render() {
    let dropdownFill = [];
    dropdownFill = this.props.fillWithData();
    let title = this.state.headerTitle;

    //Creates a form that allos for user to interact and submit information
    //fills dropdowns via the .map method
    return (
      <form onSubmit={this.handleSubmit}>
        <label>{title}</label>
        <div></div>
        <select value={this.state.value} onChange={this.handleChange}>
          {dropdownFill.map(dropdownFill => (
            <option value={dropdownFill} key={dropdownFill}>
              {dropdownFill}
            </option>
          ))}
        </select>
      </form>
    );
  }
}

export default Dropdowns;
