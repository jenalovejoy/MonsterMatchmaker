import React from "react";

class ResultsRow extends React.Component {
  render(){
    return (
    <tr key={this.props.id.index}>
        <td className="results-table-item">{this.props.id.name}</td>
        <td className="results-table-item">{this.props.id.challenge_rating}</td>
        <td className="results-table-item">{this.props.id.size}</td>
        <td className="results-table-item">{this.props.id.type}</td>
        <td className="results-table-item">{this.props.id.subtype}</td>
        <td className="results-table-item">{this.props.id.alignment}</td>
        <td className="results-table-item">{this.props.id.armor_class}</td>
        <td className="results-table-item">{this.props.id.hit_points}</td>
        <td className="results-table-item">{this.props.id.hit_dice}</td>
        <td className="results-table-item">{this.props.id.speed.walk}</td>
        <td className="results-table-item">{this.props.id.speed.fly}</td>
        <td className="results-table-item">{this.props.id.speed.swim}</td>
        <td className="results-table-item">{this.props.id.speed.burrow}</td>
        <td className="results-table-item">{this.props.id.speed.climb}</td>
        <td className="results-table-item">{this.props.id.strength}</td>
        <td className="results-table-item">{this.props.id.dexterity}</td>
        <td className="results-table-item">{this.props.id.constitution}</td>
        <td className="results-table-item">{this.props.id.intelligence}</td>
        <td className="results-table-item">{this.props.id.wisdom}</td>
        <td className="results-table-item">{this.props.id.charisma}</td>
    </tr>
    );}
}

export default ResultsRow;
