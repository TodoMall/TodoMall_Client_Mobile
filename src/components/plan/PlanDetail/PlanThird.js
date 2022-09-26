import React from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../../constants";

const PlanThird = ({ data }) => {
  return (
    <Container>
      <Header>
        <FirstTitle>이런 사람이 들으면 좋아요</FirstTitle>
      </Header>
      <Body>
        {data.map((datum, i) => (
          <Row key={i}>
            <ProfileImage
              alt="profile"
              src={`/images/dummy_profile_image.png`}
            />
            <Detail>
              <Order>{i + 1}번째,</Order>
              <Who>{datum.description}</Who>
            </Detail>
          </Row>
        ))}
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
  /* font-family: "PretendardMedium"; */
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
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 20vw;
  max-width: 60px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const Order = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  /* identical to box height, or 171% */
  letter-spacing: -0.005em;
  color: #929292;
  margin-bottom: 5px;
`;

const Who = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #222222;
`;

export default PlanThird;
