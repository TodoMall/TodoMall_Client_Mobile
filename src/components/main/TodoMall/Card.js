import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description }) => {
  const navigate = useNavigate();

  return (
    <CardBox
      onClick={() => {
        navigate("/detail/1");
      }}
    >
      <DescriptionFor>발전을 원하는 디자이너를 위한</DescriptionFor>
      <CardTitle>피그마 마스터하고 UI 디자인</CardTitle>
      <CardDescription>
        종잣돈을 모으기 위해 가장 먼저 해야 하는 일은 바로 자신의 소비 패턴을
      </CardDescription>
      <CardIcon>🎨</CardIcon>
      <CardTags>
        <CardTag>
          <TagContent src="/images/dummy_tag.svg" />
        </CardTag>
        <CardTag>
          <TagContent src="/images/dummy_tag.svg" />
        </CardTag>
      </CardTags>
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
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  color: #444444;
  padding-bottom: 5px;
`;

const CardTags = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const CardTag = styled.div`
  width: 96px;
  height: 26px;
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagContent = styled.img``;

export default Card;
