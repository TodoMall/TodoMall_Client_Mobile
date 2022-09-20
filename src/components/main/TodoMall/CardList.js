import React from "react";
import styled from "styled-components";
import Card from "./Card";
import ClassPreview from "./class_preview.json";

const CardList = ({ classData }) => {
  // console.log(classData);

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
