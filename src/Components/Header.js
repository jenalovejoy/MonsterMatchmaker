import "../CSS/Header.css";
import { Link } from "react-router-dom";
import React from "react";

const Header = props => {

  return (
    <header class="header">
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
