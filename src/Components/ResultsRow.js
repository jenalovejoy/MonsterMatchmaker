import React from "react";

// Dummy data
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

class ResultsRow extends React.Component {
  render(){
    return (
    <tr>
        <td>{dragon.name}</td>
        <td>{dragon.challenge_rating}</td>
        <td>{dragon.size}</td>
        <td>{dragon.type}</td>
        <td>{dragon.subtype}</td>
        <td>{dragon.alignment}</td>
        <td>{dragon.armor_class}</td>
        <td>{dragon.hit_points}</td>
        <td>{dragon.hit_dice}</td>
        <td>{dragon.speed.walk}, {dragon.speed.fly}, {dragon.speed.swim}</td>
        <td>{dragon.strength}</td>
        <td>{dragon.dexterity}</td>
        <td>{dragon.constitution}</td>
        <td>{dragon.intelligence}</td>
        <td>{dragon.wisdom}</td>
        <td>{dragon.charisma}</td>
    </tr>
    );}
}

export default ResultsRow;
