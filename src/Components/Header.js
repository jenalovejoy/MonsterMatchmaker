import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

const Header = props => {

  return (
    <header>
      <menu>
        <Link to="/" className="headerLink">Monster Matchmaker</Link>
      </menu>
      <menu>
        <Link to="/encounterBuilder" className="headerLink">Encounter Builder</Link>
      </menu>
      <menu>
        <Link to="/monsterFinder" className="headerLink">Monster Search</Link>
      </menu>
    </header>
  );
};

export default Header;
