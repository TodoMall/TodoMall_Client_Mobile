import React from "react";
import Header from "../global/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PlanRetry = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/todobox");
  };

  return (
    <>
      <Header title="" />
      <Body>
        <Text>
          <BodyText>이미 성공했던 클래스에요</BodyText>
          <BodyText>다시 한번 도전을 시작해봐요</BodyText>
          <BodyDescription>
            데드라인 전에 인증을 꼭 완수해야해요.
          </BodyDescription>
          <BodyDescription>
            그러지 않으면 도전중인 클래스가 중단되어요.
          </BodyDescription>
        </Text>
        <BodyImage src="/images/plan_retry.svg" />
      </Body>
      <Footer>
        <Button
          onClick={() => {
            handleRetry();
          }}
        >
          확인했어요
        </Button>
      </Footer>
    </>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const Text = styled.div`
  flex-direction: column;
  margin-left: 5vw;
  margin-bottom: 5vh;
`;

const BodyText = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
  margin: 0;
  text-align: left;
`;

const BodyDescription = styled.p`
  /* font-family: "PretendardMedium"; */
  color: #888888;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  margin-top: 10px;
  text-align: left;
`;

const BodyImage = styled.img`
  width: 80vw;
  margin: auto;
  margin-bottom: 10vh;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.div`
  background: #6b47fd;
  border: 1px solid #6b47fd;
  border-radius: 30px;
  width: 75vw;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  /* font-family: "PretendardMedium"; */
  font-size: 17px;
`;

export default PlanRetry;
