import React from "react";
import styled from "@emotion/styled";
import ChallengeRatingDropdown from "./ChallengeRatingDropdowns";

const ChallengeRating = props => {
  const Card = styled.div`
    margin: 0 auto;
    color: white;
    align: left;
    background-color: coral;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    border-radius: 15px;
  `;
  return (
    <Card>
      <ChallengeRatingDropdown title="Minimum Challenge Rating" />
      <ChallengeRatingDropdown title="Maximum Challenge Rating" />
    </Card>
  );
};

export default ChallengeRating;
ReactDOM.render(
  <PlayerLevelSelector />,
  document.getElementById("player-level-dropdown-container")
);
