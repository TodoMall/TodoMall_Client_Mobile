import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardList = ({ classData }) => {
  return (
    <CardListBox>
      {classData.map((preview) => (
        <Card
          title={preview.title}
          description={preview.description}
          smallTags={preview.informationTags}
          largeTags={preview.summarizedTags}
          subDescription={preview.subDescription}
          id={preview.id}
          icon={preview.icon}
          key={preview.id}
        />
      ))}
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
