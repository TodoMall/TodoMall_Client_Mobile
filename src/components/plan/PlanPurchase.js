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
    const response = await axios.post(
      requests.planPurchase,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    navigate("/todobox");
  };

  const [page, setPage] = useState(0);
  if (page === 0) {
    return (
      <>
        <Header title="" />
        <Body>
          <Text>
            <BodyText>베타테스트 기간 동안</BodyText>
            <BodyText>투두몰의 모든 플랜이 무료에요</BodyText>
            <BodyDescription>
              현재 무료로 제공되는 클래스들 중 일부는
            </BodyDescription>
            <BodyDescription>
              베타테스트 이후에 유료로 전환될 수 있어요.
            </BodyDescription>
          </Text>
          <BodyImage src="/images/purchase_first.svg" />
          <Footer>
            <Button
              onClick={() => {
                setPage(1);
              }}
              src="/images/check_button_on.svg"
            />
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
            <Button
              onClick={() => {
                handlePurchase();
              }}
              src="/images/purchase_button.svg"
            />
          </Footer>
        </Body>
      </>
    );
  }
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
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

const Button = styled.img`
  width: 85%;
`;

export default PlanPurchase;
