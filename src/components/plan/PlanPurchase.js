import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../global/Header";
import axios from "axios";
import { Loader } from "../global/Loader";

const PlanPurchase = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const productId = useParams().planid;
  const userId = localStorage.getItem("userid");
  const handlePurchase = async () => {
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user/product`, {
        productId: productId,
        userId: userId,
      })
      .then(() => {
        setPage(1);
        setLoading(false);
      });
  };

  const [page, setPage] = useState(0);

  if (loading) {
    return <Loader />;
  }

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
                handlePurchase();
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
                navigate("/todobox");
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
  position: fixed;
`;

const BodyText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  line-height: 25px;
  margin: 0;
  margin-bottom: 7px;
  text-align: left;
`;

const BodyImage = styled.img`
  width: 80vw;
  max-width: 600px;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BodyDescription = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #888888;
  margin: 0;
  text-align: left;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Button = styled.div`
  max-width: 380px;
  width: 90vw;
  height: 52px;
  background: #f1efff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b47fd;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #6b47fd;
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
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: white;
`;

export default PlanPurchase;
