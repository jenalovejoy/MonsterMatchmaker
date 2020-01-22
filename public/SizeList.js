import React from "react";
import styled from "@emotion/styled";
import SizeItem from "./SizeItem";

const SizeList = props => {
  const Card = styled.div`
    margin: 0 auto;
    background-color: coral;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    color: white;
    align: left;
    border-radius: 15px;
  `;
  return (
    <Card>
      <SizeItem title="Minimum Size" />
      <SizeItem title="Maximum Size" />
    </Card>
  );
};

export default SizeList;
