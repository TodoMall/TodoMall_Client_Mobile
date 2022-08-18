import React from "react";
import styled from "styled-components";

const PlanSecond = ({ data }) => {
  return (
    <Container>
      <Header>
        <FirstTitle>{data.fields[0].value}</FirstTitle>
      </Header>
      <Body>
        <SubTitle>{data.fields[1].value}</SubTitle>
        <Paragraph>{data.fields[2].value}</Paragraph>
        <SubTitle>{data.fields[3].value}</SubTitle>
        <Paragraph>{data.fields[4].value}</Paragraph>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 100vw;
`;
const Header = styled.div``;

const FirstTitle = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 32px;
`;

const SubTitle = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Body = styled.div``;

const Paragraph = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #929292;
  margin-bottom: 32px;
`;
export default PlanSecond;
