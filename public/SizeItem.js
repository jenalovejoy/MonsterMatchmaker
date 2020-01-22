import React from "react";
import styled from "@emotion/styled";

const SizeItem = ({ title }) => {
  const Container = styled.div`
    text-align: justify;
    font-family: "Fira Sans", sans-serif;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
  `;
  return (
    <Container>
      <h6>{title}</h6>
      <select>
        <option value="tiny">Tiny</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="huge">Huge</option>
        <option value="gargantuan">Gargantuan</option>
      </select>
    </Container>
  );
};

export default SizeItem;
