/*
This is the React code for the Challenge Rating and Size dropdown menus
*/
import React from "react";

//Parent class -- creates the overall component structure
class ChallengeRatings extends React.Component {
  render() {
    //renders objects
    //React Fragment is to allow multiple children on a single parent
    return (
      <React.Fragment>
        <div>
          <legend>Challenge Rating</legend>
          <Dropdowns title="Minimum Challenge Rating" isSize={false} />
          <Dropdowns title="Maximum Challenge Rating" isSize={false} />
        </div>
        <div>
          <legend>Size</legend>
          <Dropdowns title="Minimum Creature Size" isSize={true} />
          <Dropdowns title="Minimum Creature Size" isSize={true} />
        </div>
      </React.Fragment>
    );
  }
}

//creates the dropdowns themselves
class Dropdowns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: this.props.title, //takes in title
      isSizeDropdown: this.props.isSize //boolean value for it it is a size or CR dropdown
    };
    //requried code
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Code provided by React tutorial
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  //currently does nothing, will eventually pass on info to query
  handleSubmit(event) {
    event.preventDefault();
  }

  //renders dropdowns
  render() {
    let dropdownFill = [];
    if (this.state.isSizeDropdown) {
      //if it is true, will fill with size types
      dropdownFill = fillWithSizeCategories();
    } else {
      //otherwise will fill array with challenge ratings
      dropdownFill = fillWithChallengeRatings();
    }
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
//Fills array with challenge rating options
function fillWithChallengeRatings() {
  let array = [];
  array.push("0");
  array.push("1/8");
  array.push("1/4");
  array.push("1/2");
  for (let i = 1; i <= 24; i++) {
    array.push(i.toString(10));
  }
  array.push("30");
  return array;
}
//fills array with size category options
function fillWithSizeCategories() {
  let array = [];
  array.push("Dimimutive");
  array.push("Tiny");
  array.push("Small");
  array.push("Medium");
  array.push("Large");
  array.push("Huge");
  array.push("Gargantuan");
  array.push("Colossal");
  return array;
}

//renders onto the page
export default ChallengeRatings;

/*
This code is for next sprint, in case we need it -- it creates a "submit"
button that then will take the information and pass it through the 
handle submit method.
<form onSubmit={this.handleSubmit}>
*/
