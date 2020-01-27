import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
import styled from "@emotion/styled";

const Header = props => {
  const menu = styled.div`
    float: left;
    color: white;
    background-color: light-gray;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  `;
  return (
    <header>
      <menu>
        <Link to="/">Monster Matchmaker</Link>
      </menu>
      <menu>
        <Link to="/encounterBuilder">Encounter Builder</Link>
      </menu>
      <menu>
        <Link to="/monsterFinder">Monster Search</Link>
      </menu>
    </header>
  );
};

export default Header;
