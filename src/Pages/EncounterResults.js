import "../CSS/EncounterResults.css";
import React from "react";
import EncounterResultTable from "../Components/EncounterResultTable";
import ErrorAlert from "../Components/ErrorAlert"
import Loader from "../Components/Loader"

class EncounterResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],

      encounterParams: {
        minXP: this.props.encounterParams.minXP,
        maxXP: this.props.encounterParams.maxXP
      }
    };
  }

  EXP_BY_CHALLENGE_RATING = {
    "0": 0 | 10,
    "1/8": 25,
    "1/4": 50,
    "1/2": 100,
    "1": 200,
    "2": 450,
    "3": 700,
    "4": 1100,
    "5": 1800,
    "6": 2300,
    "7": 2900,
    "8": 3900,
    "9": 5000,
    "10": 5900,
    "11": 7200,
    "12": 8400,
    "13": 10000,
    "14": 11500,
    "15": 13000,
    "16": 15000,
    "17": 18000,
    "18": 20000,
    "19": 22000,
    "20": 25000,
    "21": 33000,
    "22": 41000,
    "23": 50000,
    "24": 62000,
    "25": 75000,
    "26": 90000,
    "27": 105000,
    "28": 120000,
    "29": 135000,
    "30": 155000,
  }

  // this.props.monsters is all potential monsters that could work
  bundleResults(monsters) {
    // let monsters = this.props.monsters;
    console.log(this.state.encounterParams);
    let minXP = this.props.encounterParams.minXP; // dummy monsters for user parameters
    let maxXP = this.props.encounterParams.maxXP; // would be "this.props.minXP", "this.props.maxXP"
    console.log("testing " + minXP, maxXP);

    // Add XP to each monster
    monsters.map(monsters => { monsters.XP = this.EXP_BY_CHALLENGE_RATING[monsters.challenge_rating]; return monsters; });

    // Sort on XP
    monsters.sort((a, b) => a.XP - b.XP);

    // monsters is now available as a representation of each monster XP available with the rest of the individual monster monsters

    // Many monsters
    let monsterCount = 1;

    // All encounters
    let encounters = [];
    let idx = 0;
    let encounterCount = 0;
    // look at each size of monster encounter group: 1 monster, 2, 3...
    while (monsterCount < 21) {
      encounterCount = 0;
      // Adjust the XPThreshold for the number of monsters in the encounter
      let XPThresholdMax = this.adjustMultiplier(monsterCount, maxXP);

      let XPThresholdMin = this.adjustMultiplier(monsterCount, minXP);
      // Pick a "starting" monster as the root, moving from biggest to smallest
      for (let seed = monsters.length - 1; encounterCount < 5 && seed >= 0; seed--) {
        let encounter = { "result": [], "details": {} }; // individual encounters
        let XPTotal = 0; // total XP in the encounter so far
        let XPLeft = XPThresholdMax; // how much XP to go in the budget
        for (let i = seed; encounterCount < 5 && i >= 0; i--) { // from seed to smallest
          let currentMonsterHP = monsters[i].XP;
        //   console.log("hp: " + currentMonsterHP)
          if (XPLeft >= currentMonsterHP) { // if the monster is valid -> not too big out of range
            encounter["result"].push(monsters[i]); // add the monster to the bundle
            XPTotal += currentMonsterHP;
            XPLeft = XPThresholdMax - XPTotal;
          }

          // if we're above the minimum and at budget, complete encounter
          if (XPTotal >= XPThresholdMin && encounter.result.length === monsterCount) {
            if (!this.checkIncludes(encounters, encounter) && this.testEncounter(encounter.result, minXP, maxXP)) {
              encounter["details"] = {
                "Number of Monsters": encounter.result.length,
                "XP Total": XPTotal,
                "Percent of Threshold": ((XPTotal / XPThresholdMax) * 100).toFixed(2) + "%"
            };
            console.log("one worked: " + encounter["result"] + " xp left: " + XPLeft)
              encounter["index"] = idx++;
              encounters.push(encounter);
              console.log("e #" + encounterCount + " ");

              encounterCount++;
            }

            encounter = { "result": [], "details": {}};
            XPTotal = 0;
            XPLeft = XPThresholdMax;

            // if we're above the minimum but don't have enough monsters OR we've reached the end of the loop, grab duplicate monsters smallest to largest
          } else if ((XPTotal >= XPThresholdMin && encounter.length < monsterCount) || i === 0) {
            monsters.map(monsters => { monsters.numberToThreshold = Math.floor(XPLeft / monsters.XP); return monsters; });
            for (let j = 0; j < monsters.length && monsters[j].numberToThreshold > 0; j++) {
              let numberToThreshold = monsters[j].numberToThreshold;
              let temp = { "result": encounter["result"] };
              if (encounter["result"].length + numberToThreshold === monsterCount) {
                let currentMonsterHP = monsters[j].XP;
                for (let k = 0; k < numberToThreshold; k++) {
                  temp["result"].push(monsters[j]);
                  XPTotal += currentMonsterHP;
                  XPLeft = XPThresholdMax - XPTotal;
                }
                if (!this.checkIncludes(encounters, encounter) && this.testEncounter(encounter.result, minXP, maxXP)) {
                  temp["details"] = {
                    "Number of Monsters": encounter.result.length,
                    "XP Total": XPTotal,
                    "Percent of Threshold": ((XPTotal / XPThresholdMax) * 100).toFixed(2) + "%"
                  };
                  temp["index"] = idx++;
                  encounters.push(temp);
                  console.log(temp["result"].length)

                  console.log("e # " + encounterCount + " " + temp["result"]);
                    for (let r of temp["result"]){
                        console.log(r.name)
                    }

                  encounterCount++;
                }

              }
            }
          }
        }
      }
      monsterCount++;
    }

    // Testing accuracy
    let correct = 0;
    let accuracy = 0;
    for (let i = 0; i < encounters.length; i++) {
      //console.log(encounters[i]);
      //console.log("type: " + typeof(encounters[i].result))
      let test = this.testEncounter(encounters[i].result, minXP, maxXP)
      if (test)
        correct++

    }
    accuracy = correct / encounters.length;

    console.log(accuracy * 100 + "%")

    return encounters;

  }

  testEncounter(encounter, minXP, maxXP) {
    let xpSum = 0;
    for (let e of encounter) {
      xpSum += e.XP;
    }
    let adjXP = this.adjustXP(encounter.length, xpSum);
    return adjXP >= minXP && adjXP <= maxXP
  }

  checkIncludes(array, ele) {
    for (let e of array) {
      if (JSON.stringify(e.result) === JSON.stringify(ele.result)) {

        return true
      }
    }
    return false
  }

  adjustMultiplier(numberOfMonsters, XP) {
    if (numberOfMonsters === 1)
      return XP
    if (numberOfMonsters < 3) { // move from 1->2 monsters
      XP *= (1 / 1.5); // monsters have 1.5x strength

    } else if (numberOfMonsters < 7) { // move from 2->3 monsters
      XP /= 2; // monsters have 2x strength

    } else if (numberOfMonsters < 11) { // move from 3-6->7-10 monsters
      XP *= (1. / 2.5); // monsters have 2.5x strength

    } else if (numberOfMonsters < 15) { // move from 7-10->11-14 monsters
      XP /= 3; // monsters have 3x strength

    } else if (numberOfMonsters >= 15) { // move from 11-14->15+ monsters
      XP /= 4; // monsters have 4x strength

    }

    return XP;
  }

  adjustXP(numberOfMonsters, XP) {
    if (numberOfMonsters === 1)
      return
    if (numberOfMonsters < 3) {
      return XP * 1.5;
    } else if (numberOfMonsters < 7) { // 3-6
      return XP * 2
    } else if (numberOfMonsters < 11) { // 7-10
      return XP * 2.5;
    } else if (numberOfMonsters < 15) { // 12 {
      return XP * 3;
    } else {
      return XP * 4;
    }

  }




  render() {
    let render;
    if (this.props.data == undefined) {
        render = <Loader/>
    } else if (this.props.data.length > 0) {
        let bundle = this.bundleResults(this.props.data);
        if (bundle.length > 0){
            render =
                (<div className="results-table">
                    {bundle.map(encounterResult => (<EncounterResultTable key={encounterResult.index} id="encounter-results" result={encounterResult.result} details={encounterResult.details} />))}
                </div>
                );
        } else {
            render = <ErrorAlert errorMessage="No possible encounters for this search. Better results can be obtained through a more difficult encounter, or more general monster search" />
        }
    } else {
        render = <ErrorAlert errorMessage="No possible encounters for this search. Better results can be obtained through a more difficult encounter, or more general monster search" />
    }
       
    return (
      <React.Fragment>
        <article >
          <div id="filter-results-title">
            <h3 className="text-light text-center" id="title-header">
              I have made some encounters for you
          </h3>
          </div>

          <h5 title="Monsters" className="encounter-title">Monsters</h5>
          {render}


        </article>
      </React.Fragment>
    );
  }
}

export default EncounterResults;
