import React from "react";

const dragon = {
	"name": "Adult Black Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": null,
	"alignment": "chaotic evil",
	"armor_class": 19,
	"hit_points": 195,
	"hit_dice": "17d12",
	"speed": {
		"walk": "40 ft.",
		"fly": "80 ft.",
		"swim": "40 ft."
  },
  "challenge_rating": 14,
	"strength": 23,
	"dexterity": 14,
	"constitution": 21,
	"intelligence": 14,
	"wisdom": 13,
	"charisma": 17,
}

const categories = ["name", "challenge_rating", "size", "type", "subtype", 
  "alignment", "armor_class", "hit_points", "hit_dice", "speed", "strength", 
  "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

const monsters = [dragon];

class ResultsRow extends React.Component {
  render(){
    return (
    <tr>
        <td>{this.props.id.name}</td>
        <td>{this.props.id.challenge_rating}</td>
        <td>{this.props.id.size}</td>
        <td>{this.props.id.type}</td>
        <td>{this.props.id.subtype}</td>
        <td>{this.props.id.alignment}</td>
        <td>{this.props.id.armor_class}</td>
        <td>{this.props.id.hit_points}</td>
        <td>{this.props.id.hit_dice}</td>
        <td>{this.props.id.speed.walk} {this.props.id.speed.fly} {this.props.id.speed.swim} {this.props.id.speed.burrow} {this.props.id.speed.climb}</td>
        <td>{this.props.id.strength}</td>
        <td>{this.props.id.dexterity}</td>
        <td>{this.props.id.constitution}</td>
        <td>{this.props.id.intelligence}</td>
        <td>{this.props.id.wisdom}</td>
        <td>{this.props.id.charisma}</td>
    </tr>
    );}
}

export default ResultsRow;
