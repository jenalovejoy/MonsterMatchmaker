import React from "react";
import styled from "@emotion/styled";

const ChallengeRatingDropdown = ({ title }) => {
  const Container = styled.div`
    text-align: left;
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
      <legend>{title}</legend>
      <select id="MinChallengeRatingDropdown" name="MinimumChallengeRating">
        <optgroup label="Pathetic">
          <option value="1">0</option>
          <option value="2">1/8</option>
          <option value="3">1/4</option>
          <option value="4">1/2</option>
        </optgroup>
        <optgroup label="Low">
          <option value="5">1</option>
          <option value="6">2</option>
          <option value="7">3</option>
          <option value="8">4</option>
          <option value="9">5</option>
          <option value="10">6</option>
          <option value="11">7</option>
          <option value="12">8</option>
          <option value="13">9</option>
          <option value="14">10</option>
        </optgroup>
        <optgroup label="Medium">
          <option value="15">11</option>
          <option value="16">12</option>
          <option value="17">13</option>
          <option value="18">14</option>
          <option value="19">15</option>
          <option value="20">16</option>
          <option value="21">17</option>
          <option value="22">18</option>
          <option value="23">19</option>
          <option value="24">20</option>
        </optgroup>
        <optgroup label="High">
          <option value="25">21</option>
          <option value="26">22</option>
          <option value="27">23</option>
          <option value="28">24</option>
          <option value="29">25</option>
          <option value="30">26</option>
          <option value="31">27</option>
          <option value="32">28</option>
          <option value="33">29</option>
          <option value="34">30</option>
        </optgroup>
      </select>
    </Container>
  );
};

export default ChallengeRatingDropdown;
