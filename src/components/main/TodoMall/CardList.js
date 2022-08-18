import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardList = () => {
  return (
    <CardListBox>
      <Card />
      <Card />
      <Card />
      <Card />
    </CardListBox>
  );
};

const CardListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-direction: column;
`;

export default CardList;
