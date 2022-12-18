import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../global/Header";
import { SUCCESS, FAIL, paymentResultData } from "../../constants";
import styled from "styled-components";
import separtePriceToComma from "../../utils/separtePriceToComma";
import BorderText from "../global/BorderText";
import ThinText from "../global/ThinText";

const PaymentResultBox = ({ paymentMethodId = 1 }) => {
  const [isSuccess] = useState(false); // 서드파티에서 받아오는 결과값으로 대체할것
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

  const { title, iconPath, message, notice, buttonMessage, redirectPath } =
    paymentResultData[PAYMENT_STATUS];

  return (
    <Wrapper>
      <Header title={title} />
      <Icon src={iconPath} alt="" />
      <BorderText
        width="90%"
        textAlign="center"
        fontWeight="700"
        fontSize="18px"
        lineHeight="28px"
        margin="8px 0"
      >
        {message}
      </BorderText>
      <ThinText width="90%" textAlign="center">
        {notice}
      </ThinText>
      {!isSuccess && <EmptyBox />}
      {isSuccess && (
        <PaymentInfoBox>
          <ThinText margin="4px 0">결제 금액</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {price}원
          </BorderText>
          <ThinText margin="4px 0">사용자</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse.name}
          </BorderText>
          <ThinText margin="4px 0">결제카드</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse.card_name}
          </BorderText>
          {paymentMethodId === 1 && (
            <>
              <ThinText margin="4px 0">카드번호</ThinText>
              <BorderText
                textAlign="right"
                fontWeight="700px"
                margin="0 0 4px 0"
              >
                {paymentResponse.card_number}
              </BorderText>
            </>
          )}
          <ThinText margin="4px 0">결제 일시</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse.pay_date}
          </BorderText>
        </PaymentInfoBox>
      )}
      {!isSuccess && (
        <MoveTodoMallButton onClick={() => navigate("/todomall")}>
          <p>투두몰로 이동</p>
        </MoveTodoMallButton>
      )}
      <Button onClick={() => navigate(redirectPath ?? `/payment/${ID}`)}>
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
const EmptyBox = styled.div`
  width: 95%;
  height: 200px;
  margin: 20px 0;
  padding: 20px;
`;
const PaymentInfoBox = styled(EmptyBox)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  background-color: white;
  border-radius: 16px;
  margin: 24px 16px;
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
