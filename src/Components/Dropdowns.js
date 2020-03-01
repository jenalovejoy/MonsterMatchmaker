import React from "react";

const SIZE_CATEGORIES = ["Dimimutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"];
const DIFFICULT_RATING = ["Trivial", "Easy", "Medium", "Hard", "Deadly"];


// creates the dropdowns themselves
class Dropdowns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: this.props.title, // String representing dropdown 
      category: this.props.category // String representing category type
    };

    // required code
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Returns the value selected by the user
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.myString = event.target.value;
    console.log(this.myString);
    //this.props.value(this.myString);
  }

  //currently does nothing, will eventually pass on info to query
  handleSubmit(event) {
    event.preventDefault();
  }

  //renders dropdowns
  render() {
    let dropdownFill = [];

    if (this.state.category === "Size") {
      dropdownFill = SIZE_CATEGORIES;

    } else if (this.state.category === "Challenge"){
      dropdownFill = fillWithChallengeRatings();
      
    } else if (this.state.category === "Difficulty"){
      dropdownFill = DIFFICULT_RATING;
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

export default Dropdowns;
