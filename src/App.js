import React from "react";
import "./App.css";
import "./CSS/homeScreenStyles.css";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import EncounterBuilder from "./Pages/EncounterBuilder";
import MonsterFinder from "./Pages/MonsterFinder";
import MonsterResults from "./Pages/MonsterResults";
import EncounterResults from "./Pages/EncounterResults";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "../node_modules/react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/encounterBuilder" component={EncounterBuilder} />
            <Route path="/monsterFinder" component={MonsterFinder} />
            <Route path="/monsterResults" component={MonsterResults} />
            <Route path="/encounterResults" component={EncounterResults} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
