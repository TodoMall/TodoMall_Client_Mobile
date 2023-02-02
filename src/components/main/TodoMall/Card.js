import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IconDict } from "../../global/Icon";

const Card = ({
  title,
  description,
  smallTags,
  subDescription,
  dataid,
  icon,
}) => {
  const navigate = useNavigate();

  const cardSmallTag = smallTags.map((tag, index) => {
    return (
      <div key={index}>
        <CardTag>
          <TagIcon src={`/images/${IconDict[tag]}.svg`} />
          {tag}
        </CardTag>
      </div>
    );
  });

  return (
    <CardBox
      onClick={() => {
        navigate(`/detail/${dataid}`);
      }}
    >
      <DescriptionFor>{subDescription}</DescriptionFor>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardIcon src={`${icon}`} />
      <CardTags>{cardSmallTag}</CardTags>
    </CardBox>
  );
};

const CardBox = styled.div`
  width: 95%;
  height: auto;
  border-radius: 16px;
  background-color: white;
  margin-bottom: 10px;
  padding: 20px;
  position: relative;
  cursor: pointer;
`;

const CardIcon = styled.img`
  position: absolute;
  font-size: 40px;
  right: 20px;
  top: 10px;
`;

const DescriptionFor = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  color: #c0c0c0;
`;

const CardTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  margin-bottom: 5px;
  width: 85%;
`;

const CardDescription = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #888888;
  margin-bottom: 10px;
  word-break: keep-all;
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
  padding-right: 10px;
  padding-left: 6px;
  height: 26px;
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #a9a9a9;
`;

const TagIcon = styled.img`
  margin-right: 3px;
`;

export default Card;
