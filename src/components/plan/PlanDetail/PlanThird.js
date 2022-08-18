import React from "react";
import styled from "styled-components";

const PlanThird = ({ data }) => {
  return (
    <Container>
      <Header>
        <FirstTitle>이런 사람이 들으면 좋아요</FirstTitle>
      </Header>
      <Body>
        <Row>
          <Profile_image src={`/images/dummy_profile_image.png`} />
          <Detail>
            <Order>첫번째</Order>
            <Who>{data[0].description}</Who>
          </Detail>
        </Row>
        <Row>
          <Profile_image src={`/images/dummy_profile_image.png`} />
          <Detail>
            <Order>첫번째</Order>
            <Who>{data[1].description}</Who>
          </Detail>
        </Row>
        <Row>
          <Profile_image src={`/images/dummy_profile_image.png`} />
          <Detail>
            <Order>첫번째</Order>
            <Who>{data[2].description}</Who>
          </Detail>
        </Row>
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
  margin-bottom: 25px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Profile_image = styled.img`
  width: 20vw;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const Order = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #929292;
  margin-bottom: 5px;
`;

const Who = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #000000;
`;

export default PlanThird;
