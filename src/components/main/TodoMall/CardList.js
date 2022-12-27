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
          dataid={preview.id}
          icon={preview.icon}
          key={preview.id}
          id="category-img"
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
