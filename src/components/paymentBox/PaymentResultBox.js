import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../global/Header";
import { SUCCESS, FAIL } from "../../constants/payment";
import styled from "styled-components";
import separtePriceToComma from "../../utils/separtePriceToComma";

const PaymentResultBox = ({ paymentMehod }) => {
  const [isSuccess] = useState(true); // 서드파티에서 받아오는 결과값으로 대체할것
  const [paymentResponse] = useState({
    name: "한솔빈",
    price: 10000,
    card_name: "롯데카드",
    card_number: "3213-****-****-323*",
    pay_date: "2022.12.02 14:30:32",
  });
  const navigate = useNavigate();
  const { planid: ID } = useParams();
  const PAYMENT_STATUS = isSuccess ? SUCCESS : FAIL;
  const price = separtePriceToComma(paymentResponse.price);
  const paymenrResulObj = {
    // TODO: move constants folder
    success: {
      title: "결제완료",
      iconPath: "/images/payment/paymnetSuccessIcon.svg",
      message:
        "클래스가 성공적으로 추가됐어요.\n데드라인 내에 미션 인증을 잊지 마세요!",
      notice: "시간 내에 완수해야 다음 세션을 계속 들을 수 있어요.",
      buttonMessage: "내 투두함으로 이동",
      handleNavigate: () => navigate("/todobox"),
    },
    fail: {
      title: "결제실패",
      iconPath: "/images/payment/paymnetFailIcon.svg",
      message: "결제 과정 중에 문제가 발생했습니다.",
      notice:
        "선택하신 출금 계좌가 출금이체 등록이 되어 있지 않아요.\n계좌를 다시 등록해 주세요.", // TODO: 서드파티에서 넘겨주는 에러메세지로 변경
      buttonMessage: "다시 결제하기",
      handleNavigate: () => navigate(`/payment/${ID}`),
    },
  };

  const { title, iconPath, message, notice, buttonMessage, handleNavigate } =
    paymenrResulObj[PAYMENT_STATUS];

  return (
    <Wrapper>
      <Header title={title} />
      <Icon src={iconPath} alt="" />
      <BorderText>{message}</BorderText>
      <Description>{notice}</Description>
      {!isSuccess && <EmptyBox />}
      {isSuccess && (
        <PaymentInfoBox>
          <Description>결제 금액</Description>
          <BorderText>{price}원</BorderText>
          <Description>사용자</Description>
          <BorderText>{paymentResponse.name}</BorderText>
          <Description>결제카드</Description>
          <BorderText>{paymentResponse.card_name}</BorderText>
          {paymentMehod === "card" && (
            <>
              <Description>카드번호</Description>
              <BorderText>{paymentResponse.card_number}</BorderText>
            </>
          )}
          <Description>결제 일시</Description>
          <BorderText>{paymentResponse.pay_date}</BorderText>
        </PaymentInfoBox>
      )}
      {!isSuccess && /*<EmptyBox></EmptyBox>*/ <></>}
      {!isSuccess && (
        <MoveTodoMallButton onClick={() => navigate("/todomall")}>
          <p>투두몰로 이동</p>
        </MoveTodoMallButton>
      )}
      <Button onClick={handleNavigate}>
        <p>{buttonMessage}</p>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f5f5f5;
`;
const Icon = styled.img`
  margin: 98px 128px 48px 128px;
`;
const BorderText = styled.p`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #222222;
  margin-bottom: 4px;
`;
const Description = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #888888;
  margin: 4px 0;
`;
const EmptyBox = styled.div`
  width: 95%;
  height: 200px;
  margin: 20px 0;
  padding: 20px;
`;
const PaymentInfoBox = styled(EmptyBox)`
  background-color: white;
  border-radius: 16px;
`;
const Button = styled.button`
  width: 95%;
  height: 52px;
  align-items: flex-end;
  background-color: #6b47fd;
  border-radius: 20px;
  margin-bottom: 34px;
  p {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ffffff;
  }
`;

const MoveTodoMallButton = styled(Button)`
  margin: 0 0 4px 0;
  border: 1px solid #6b47fd;
  background-color: #ffffff;
  p {
    color: #6b47fd;
  }
`;
export default PaymentResultBox;
