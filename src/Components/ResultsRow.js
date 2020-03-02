import React from "react";

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
