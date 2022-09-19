import React from "react";
import styled from "styled-components";
import Card from "./Card";
import ClassPreview from "./class_preview.json";

const CardList = ({ classData }) => {

  console.log(classData);

  return (
    <CardListBox>
      {classData.map((preview) => (
        <Card
            title={preview.title}
            description={preview.description}
            tags={preview.tags}
            subDescription={preview.subDescription}
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
