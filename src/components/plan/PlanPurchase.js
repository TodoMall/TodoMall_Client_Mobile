import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../global/Header";
import axios from "../../api/axios";
import requests from "../../api/request";

const PlanPurchase = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handlePurchase = async () => {
    // const response = await axios.post(
    //   requests.planPurchase,
    //   {},
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    // console.log(response);
    navigate("/todobox");
  };

  const [page, setPage] = useState(0);
  if (page === 0) {
    return (
      <>
        <Header title="" />
        <Body>
          <Text>
            <BodyText>베타테스트 기간 동안만 한정해</BodyText>
            <BodyText>투두몰의 모든 플랜을 무료로 드려요</BodyText>
            <BodyDescription>
              현재 무료로 제공되는 클래스들 중 일부가
            </BodyDescription>
            <BodyDescription>
              베타테스트가 끝난 이후에 유료로 전환될 수 있어요.
            </BodyDescription>
          </Text>
          <BodyImage src="/images/purchase_first.svg" />
          <Footer>
            <Button
              onClick={() => {
                setPage(1);
              }}
            >
              확인했어요
            </Button>
          </Footer>
        </Body>
      </>
    );
  } else {
    return (
      <>
        <Header title="" />
        <Body>
          <Text>
            <BodyText>클래스가 성공적으로 추가됐어요</BodyText>
            <BodyText>오늘부터 도전이 시작돼요</BodyText>
            <BodyDescription>
              데드라인 전에 인증을 꼭 완수해야해요.
            </BodyDescription>
            <BodyDescription>
              그러지 않으면 도전중인 클래스가 중단되어요.
            </BodyDescription>
          </Text>
          <BodyImage src="/images/purchase_finish.svg" />
          <Footer>
            <ButtonNavigate
              onClick={() => {
                handlePurchase();
              }}
            >
              내 투두함으로 이동
            </ButtonNavigate>
          </Footer>
        </Body>
      </>
    );
  }
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
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;
  margin: 0;
  margin-bottom: 7px;
  text-align: left;
`;

const BodyImage = styled.img`
  width: 80vw;
  margin: auto;
  margin-bottom: 10vh;
`;

const BodyDescription = styled.p`
  font-family: "PretendardMedium";
  color: #888888;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
  text-align: left;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.div`
  max-width: 380px;
  width: 90vw;
  height: 52px;
  background: #d2c6ff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b47fd;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

const ButtonNavigate = styled.div`
  max-width: 380px;
  width: 90vw;
  height: 52px;
  background: #d2c6ff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6b47fd;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: white;
`;

export default PlanPurchase;
