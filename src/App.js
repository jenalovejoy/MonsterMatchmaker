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
  Route,
} from "../node_modules/react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [], //stores data from mongo for all the pages
    };
    this.storeData = this.storeData.bind(this);
  }

  storeData(i){
    this.setState({data: i});
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/encounterBuilder" render={props => <EncounterBuilder storeData={this.storeData}/>} />
            <Route path="/monsterFinder" render={props => <MonsterFinder storeData={this.storeData}/>} />
            <Route path="/monsterResults" render={props => <MonsterResults data={this.state.data}/>} />
            <Route path="/encounterResults" render={props => <EncounterResults data={this.state.data}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
