import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, tags, subDescription, id }) => {
  const navigate = useNavigate();

  const cardTag = tags.map((tag, index) => {
    return (
      <div key={index}>
        <CardTag>{tag}</CardTag>
      </div>
    );
  });

  const CutOff = 65;

  return (
    <CardBox
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <DescriptionFor>{subDescription}</DescriptionFor>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description.substring(1, CutOff)}...</CardDescription>
      <CardIcon>🎨</CardIcon>
      <CardTags>{cardTag}</CardTags>
    </CardBox>
  );
};

const CardBox = styled.div`
  width: 95%;
  height: 180px;
  border-radius: 16px;
  background-color: white;
  margin-bottom: 10px;
  padding: 20px;
  position: relative;
  cursor: pointer;
`;

const CardIcon = styled.div`
  position: absolute;
  font-size: 40px;
  right: 20px;
  top: 10px;
`;

const DescriptionFor = styled.p`
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  color: #c0c0c0;
`;

const CardTitle = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
  margin-bottom: 5px;
`;

const CardDescription = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #888888;
  margin-bottom: 10px;
`;

const CardTags = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const CardTag = styled.div`
  width: auto;
  height: 26px;
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagContent = styled.img``;

export default Card;
