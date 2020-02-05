import React from "react";
import "../CSS/MonsterResults.css";

class MonsterResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="filter-component">
          <h3 class="text-light text-center" id="resultsTitle">
            I have found some monsters for you
          </h3>
        </div>
        <div id="results-table" //style="overflow-x:auto;"
        >
          <table>
            <tr>
              <th>Monster Name</th>
              <th>Challenge Rating</th>
              <th>Size</th>
              <th>Type</th>
              <th>Subtype</th>
              <th>Alignment</th>
              <th>Armor Class</th>
              <th>Hit Points</th>
              <th>Hit Dice</th>
              <th>Speed</th>
              <th>Strength</th>
              <th>Dexterity</th>
              <th>Constitution</th>
              <th>Intelligence</th>
              <th>Wisdom</th>
              <th>Charisma</th>
            </tr>
            <tr>
              <td>Blink Dog</td>
              <td>1/4 (50 XP)</td>
              <td>Medium</td>
              <td>Fey</td>
              <td></td>
              <td>Lawful Good</td>
              <td>13</td>
              <td>22</td>
              <td>4d8+4</td>
              <td>40 feet</td>
              <td>12</td>
              <td>17</td>
              <td>12</td>
              <td>10</td>
              <td>13</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Green Hag</td>
              <td>3 (700 XP)</td>
              <td>Medium</td>
              <td>Fey</td>
              <td></td>
              <td>Neutral Evil</td>
              <td>17</td>
              <td>82</td>
              <td>11d8+33</td>
              <td>30 ft</td>
              <td>18</td>
              <td>12</td>
              <td>16</td>
              <td>13</td>
              <td>14</td>
              <td>14</td>
            </tr>
            <tr>
              <td>Dryad</td>
              <td>1 (200 XP)</td>
              <td>Medium</td>
              <td>Fey</td>
              <td></td>
              <td>Neutral</td>
              <td>11</td>
              <td>22</td>
              <td>5d8</td>
              <td>30 ft</td>
              <td>10</td>
              <td>12</td>
              <td>11</td>
              <td>14</td>
              <td>15</td>
              <td>18</td>
            </tr>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default MonsterResults;
