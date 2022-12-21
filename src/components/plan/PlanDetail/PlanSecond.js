import React from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../../constants";

const PlanSecond = ({ data }) => {
  return (
    <Container>
      <Header>
        <FirstTitle>이럴 때 들으면 좋아요</FirstTitle>
      </Header>
      <Body>
        <SubTitle>{data[0].title}</SubTitle>
        <Paragraph>{data[0].description}</Paragraph>
        <SubTitle>{data[1].title}</SubTitle>
        <Paragraph>{data[1].description}</Paragraph>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 100vw;
  max-width: ${MAX_WIDTH};
`;
const Header = styled.div``;

const FirstTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 32px;
`;

const SubTitle = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #222222;
  margin: 15px 0;
`;

const Body = styled.div``;

const Paragraph = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: #888888;
  margin-bottom: 20px;
`;
export default PlanSecond;
