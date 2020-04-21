import "../CSS/EncounterResults.css";
import React from "react";
import ResultsTable from "../Components/ResultsTable";

class EncounterResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <article >
        <div id="resultsTitle">
          <h3 class="text-light text-center" id="">
          I have made some encounters for you
          </h3>
          <h5 title="Plot Hook Title">Players will be searching for:</h5>
          <h6 title="Plot Hook">A lost amulet that has magic powers</h6>
        </div>
            
            <h5 title="Monsters">Monsters</h5>
            <div class="results-table">
              <ResultsTable id="encounter-results" data={this.props.data}/>
            </div>
          <div class="results-table">
            <h5 title="Dungeon traps">Dungeon Traps</h5>

            <table id="encounter-results">
              <tr>
                <th class="results-table-header">Name</th>
                <th class="results-table-header">Trap Type</th>
                <th class="results-table-header">Dection DC</th>
                <th class="results-table-header">Disabling DC</th>
                <th class="results-table-header">Attack Bonus</th>
                <th class="results-table-header">Damage Delt</th>
                <th class="results-table-header">Description</th>
              </tr>
              <tr>
                <td class="results-table-item">Fire Trap</td>
                <td class="results-table-item">Arcane</td>
                <td class="results-table-item">13</td>
                <td class="results-table-item">15</td>
                <td class="results-table-item">+6 to +8</td>
                <td class="results-table-item">2D10</td>
                <td class="results-table-item">Players come across a small, ashy hole in the wall</td>
              </tr>
              <tr>
                <td class="results-table-item">Water Trap</td>
                <td class="results-table-item">Full Dungeon</td>
                <td class="results-table-item">17</td>
                <td class="results-table-item">19</td>
                <td class="results-table-item">None</td>
                <td class="results-table-item">None</td>
                <td class="results-table-item">Room begins to food with water</td>
              </tr>
            </table>
          </div>
          <div class="results-table">
            <h5 title="Rewards">Rewards</h5>

            <table>
              <tr>
                <th class="results-table-header">Name</th>
                <th class="results-table-header">Total Value</th>
                <th class="results-table-header">Description</th>
              </tr>
              <tr>
                <td class="results-table-item">Wand of Mirror Image</td>
                <td class="results-table-item">3600 GP</td>
                <td class="results-table-item">
                  inscription provides clue to function -- 40 to 50 charges
                </td>
              </tr>
              <tr>
                <td class="results-table-item">Copper Statue</td>
                <td class="results-table-item">1200 gp</td>
                <td class="results-table-item">Copper Statue of a Hell-hound. Probably 300 years old.</td>
              </tr>
            </table>
          </div>
          <div class="filter-component">
            <h5 title="Dungeon Map">Dungeon Map</h5>

            <img
              src="example_dungeon_map.png"
              class="dungeonMap"
              alt="This is just an example dungeon map that players may or may not use."
            ></img>
          </div>
          
        </article>
      </React.Fragment>
    );
  }
}
export default EncounterResults;
