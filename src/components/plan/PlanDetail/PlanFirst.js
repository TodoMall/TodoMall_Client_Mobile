import React from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../../constants";

const PlanFirst = ({ data }) => {
  console.log(data);

  return (
    <Container>
      <Header>
        <FirstTitle>지금 시작하면 나만의</FirstTitle>
        <SecondTitle>
          {/* <HighlightTitle>{sub}</HighlightTitle>
          {second_half} */}
          {data.title}
        </SecondTitle>
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
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;

const HighlightTitle = styled.span`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #6b47fd;
`;

const SecondTitle = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
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
  height: 170px;
`;

const Paragraph = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.005em;
  color: #929292;
`;

export default PlanFirst;
