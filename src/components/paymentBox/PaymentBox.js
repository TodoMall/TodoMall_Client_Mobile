import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import separtePriceToComma from "../../utils/separtePriceToComma";

import Layout from "../global/Layout";
import UserInfoBox from "./UserInfoBox";
import Terms from "./Terms";

import { PaymentWayData } from "../../constants/payment";
import { API_ENDPOINT } from "../../constants/Api";
import TotalAmountBox from "./TotalAmountBox";

const PaymentBox = ({ price }) => {
  const { userId, name, email, image } = { ...localStorage };
  const [payMethod, setPaymentMethod] = useState(null);
  const [planInfo, setPlanInfo] = useState();
  const { planid: ID } = useParams();
  const priceWithComma = separtePriceToComma(price);

  const handlePayment = () => {
    const { IMP } = window;
    IMP.init("imp74056714");
    const [payment] = PaymentWayData.filter((el) => el.id === payMethod);

    const mockData = {
      pg: payment.pg,
      pay_method: payment.pay_method,
      merchant_uid: `mid_${new Date().getTime()}`,
      name: planInfo?.title,
      amount: (price = 10000),
      buyer_tel: "010-0000-0000",
      buyer_email: email,
      buyer_name: name,
      m_redirect_url: `http://localhost:3000/payment/complete/${ID}`,
    };

    const callback = async (rsp) => {
      if (rsp.success) {
        // request server with { imp_uid , merchant_uid } & headers: { "Content-Type": "application/json" },
        alert(rsp.response);
      } else {
        // 결제 실패 시 로직,
        alert(rsp.success);
      }
    };
    IMP.request_pay(mockData, callback);
  };

  const fetchProductByPlanId = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API_ENDPOINT}products?id=${ID}`);
      setPlanInfo(data);
    } catch (error) {
      console.error(error);
    }
  }, [ID]);

  useEffect(() => {
    fetchProductByPlanId();
  }, [fetchProductByPlanId]);

  const handleSelectPaymentMethod = (id) => {
    setPaymentMethod(id);
  };

  return (
    <Container>
      <Layout breadCrumbs="결제하기">
        <UserInfoWrapper>
          <UserInfoBox image={image} name={name} email={email} />
        </UserInfoWrapper>

        <Box>
          <Label>도전 클래스</Label>
          <Description>클래스명</Description>
          <p>{planInfo?.title}</p>
          <Divider />
          <Description>커리큘럼</Description>
          {planInfo?.sessions.map((session) => {
            return (
              <div key={session.orderBy}>
                <BorderText>{session.title}</BorderText>
                {/* <DDay>D-{RemainingDay}</DDay> */}
              </div>
            );
          })}
        </Box>

        <Box>
          <TotalAmountBox priceWithComma={priceWithComma} />
        </Box>

        <Box>
          <Label>결제 수단</Label>
          <PaymentIconList>
            {PaymentWayData.map(({ id, pay_method, iconPath, description }) => {
              return (
                <PaymentIconItem
                  key={id}
                  onClick={() => handleSelectPaymentMethod(id)}
                >
                  <PaymentIcon src={iconPath} alt="error" />
                  {description}
                </PaymentIconItem>
              );
            })}
          </PaymentIconList>
        </Box>
        <PaymentButton disabled={!payMethod} onClick={handlePayment}>
          {priceWithComma}원 결제하기
        </PaymentButton>
        <Terms />
      </Layout>
    </Container>
  );
};
export default PaymentBox;

const PaymentIcon = styled.img`
  margin-bottom: 8px;
`;

const PaymentIconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaymentIconItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #ededed;
  flex: 1 0 33%;
  margin: 4px 3px;
  height: 100px;
  &:focus {
    border: 2px solid #6b47fd;
    box-shadow: 0px 0px 2px red;
  }
`;

const Box = styled.div`
  width: 95%;
  box-sizing: border-box;
  padding: 16px 20px;
  margin: 6px 0;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid black; // to be removed
`;

const PaymentButton = styled.div`
  background: ${(props) => (props.disabled ? "#A9A9A9" : "#6b47fd")};
  border-radius: 20px;
  max-width: 380px;
  width: 90%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #f1efff;
`;

const AmountInfo = styled.div`
  display: inline;
`;
const Divider = styled.div`
  width: 100vm;
  border: 1px solid #ededed;
  margin: 16px 0;
`;
const Description = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #888888;
`;
const TotalAmountText = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
`;
const TotalAmount = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.01em;
  text-align: right;
`;
const BorderText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #222222;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f6f8ff;
`;
const Label = styled.div`
  height: 35px;
  align-self: flex-start;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  display: inline-block;
`;
const UserInfoWrapper = styled.div`
  border: 1px solid black; // to be removed
  width: 95%;
  padding: 16px 20px;
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 66px;
  border-radius: 8px;
`;
