import React from "react";

class ResultsRow extends React.Component {
  render(){
    return (
    <tr>
        <td class="results-table-item">{this.props.id.name}</td>
        <td class="results-table-item">{this.props.id.challenge_rating}</td>
        <td class="results-table-item">{this.props.id.size}</td>
        <td class="results-table-item">{this.props.id.type}</td>
        <td class="results-table-item">{this.props.id.subtype}</td>
        <td class="results-table-item">{this.props.id.alignment}</td>
        <td class="results-table-item">{this.props.id.armor_class}</td>
        <td class="results-table-item">{this.props.id.hit_points}</td>
        <td class="results-table-item">{this.props.id.hit_dice}</td>
        <td class="results-table-item">{this.props.id.speed.walk} {this.props.id.speed.fly} {this.props.id.speed.swim} {this.props.id.speed.burrow} {this.props.id.speed.climb}</td>
        <td class="results-table-item">{this.props.id.strength}</td>
        <td class="results-table-item">{this.props.id.dexterity}</td>
        <td class="results-table-item">{this.props.id.constitution}</td>
        <td class="results-table-item">{this.props.id.intelligence}</td>
        <td class="results-table-item">{this.props.id.wisdom}</td>
        <td class="results-table-item">{this.props.id.charisma}</td>
    </tr>
    );}
}

export default ResultsRow;
