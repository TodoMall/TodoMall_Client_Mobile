import React from "react";
import styled from "styled-components";

const PlanFirst = ({ data }) => {
  let text = data.fields[0].value;
  let sub = data.fields[0].highlight;
  let index = text.indexOf(sub);

  let first_half = text.substring(0, index);
  let second_half = text.substring(index + sub.length);

  return (
    <Container>
      <Header>
        <FirstTitle>{first_half}</FirstTitle>
        <SecondTitle>
          <HighlightTitle>{sub}</HighlightTitle>
          {second_half}
        </SecondTitle>
      </Header>
      <Image src="/images/dummy_first_image.png" />
      <Paragraph>{data.fields[2].value}</Paragraph>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div``;

const FirstTitle = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;

const HighlightTitle = styled.span`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #6b47fd;
`;

const SecondTitle = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.005em;

  color: #929292;
`;

export default PlanFirst;
