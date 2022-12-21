import React from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../../constants";

const PlanFirst = ({ data }) => {
  return (
    <Container>
      <Header>
        <FirstTitle>지금 시작하면 나만의</FirstTitle>
        <SecondTitle>{data.title}</SecondTitle>
      </Header>
      <Image src={data.image} />
      <Paragraph>{data.description}</Paragraph>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: ${MAX_WIDTH};
`;

const Header = styled.div``;

const FirstTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;

const SecondTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 100%;
  max-width: ${MAX_WIDTH};
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.005em;
  color: #929292;
`;

export default PlanFirst;
