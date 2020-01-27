import React from "react";
import "../CSS/EncounterResults.css";
import EncounterBuilder from "./EncounterBuilder";

class EncounterResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <article id="filter-body">
          <div class="filter-component">
            <h1 class="text-light text-left" id="pageTitle">
              Built Encounter
            </h1>
          </div>
          <div class="filter-component">
            <h5 title="Plot Hook Title">Players will be searching for:</h5>

            <h6 title="Plot Hook">A lost amulet that has magic powers</h6>
          </div>
          <div class="filter-component">
            <h5 title="Monsters">Monsters</h5>

            <table>
              <tr>
                <th>Monster Name</th>
                <th>Challenge Rating</th>
                <th>Type</th>
                <th>Subtype</th>
                <th>Alignment</th>
                <th>Armor Class</th>
                <th>Hit Points</th>
                <th>Hit Dice</th>
              </tr>
              <tr>
                <td>Aboleth</td>
                <td>10</td>
                <td>Abberation</td>
                <td></td>
                <td>Lawful Evil</td>
                <td>17</td>
                <td>135</td>
                <td>18d10 + 36</td>
              </tr>
            </table>
          </div>
          <div class="filter-component">
            <h5 title="Dungeon traps">Dungeon Traps</h5>

            <table>
              <tr>
                <th>Name</th>
                <th>Trap Type</th>
                <th>Dection DC</th>
                <th>Disabling DC</th>
                <th>Attack Bonus</th>
                <th>Damage Delt</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Fire Trap</td>
                <td>Arcane</td>
                <td>13</td>
                <td>15</td>
                <td>+6 to +8</td>
                <td>2D10</td>
                <td>Players come across a small, ashy hole in the wall</td>
              </tr>
              <tr>
                <td>Water Trap</td>
                <td>Full Dungeon</td>
                <td>17</td>
                <td>19</td>
                <td>None</td>
                <td>None</td>
                <td>Room begins to food with water</td>
              </tr>
            </table>
          </div>
          <div class="filter-component">
            <h5 title="Rewards">Rewards</h5>

            <table>
              <tr>
                <th>Name</th>
                <th>Total Value</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Wand of Mirror Image</td>
                <td>3600 GP</td>
                <td>
                  inscription provides clue to function -- 40 to 50 charges
                </td>
              </tr>
              <tr>
                <td>Copper Statue</td>
                <td>1200 gp</td>
                <td>Copper Statue of a Hell-hound. Probably 300 years old.</td>
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
