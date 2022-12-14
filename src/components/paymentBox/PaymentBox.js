import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import separtePriceToComma from "../../utils/separtePriceToComma";

import { PaymentGateDatas } from "../../constants/payment";
import { API_ENDPOINT } from "../../constants/Api";

import Layout from "../global/Layout";
import TotalAmountBox from "./TotalAmountBox";
import UserInfoBox from "./UserInfoBox";
import Terms from "./Terms";
import ClassInfoBox from "./ClassInfoBox";
import PaymentMethodList from "./PaymentMethodList";

const PaymentBox = ({ price }) => {
  const { name, email, image } = { ...localStorage };
  const [user] = useState({ name, email, image });
  const [payMethod, setPaymentMethod] = useState(null);
  const [planInfo, setPlanInfo] = useState();
  const { planid: ID } = useParams();
  const priceWithComma = separtePriceToComma(price);

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

  const handlePayment = () => {
    const { IMP } = window;
    IMP.init("imp74056714");
    const [payment] = PaymentGateDatas.filter((el) => el.id === payMethod);

    const requstData = {
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
    IMP.request_pay(requstData, callback);
  };

  return (
    <Container>
      <Layout breadCrumbs="결제하기">
        <UserInfoWrapper>
          <UserInfoBox image={user.image} name={user.name} email={user.email} />
        </UserInfoWrapper>

        <Box>
          <ClassInfoBox title={planInfo?.title} sessions={planInfo?.sessions} />
        </Box>

        <Box>
          <TotalAmountBox priceWithComma={priceWithComma} />
        </Box>

        <Box>
          <PaymentMethodList onClickPaymentMethod={handleSelectPaymentMethod} />
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f6f8ff;
`;

const Box = styled.div`
  width: 95%;
  padding: 16px 20px;
  box-sizing: border-box;
  background: #ffffff;
  margin: 6px 0;
  border-radius: 8px;
`;

const UserInfoWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 66px 0 0 0;
`;

const PaymentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 380px;
  height: 52px;
  background: ${(props) => (props.disabled ? "#A9A9A9" : "#6b47fd")};
  border-radius: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #f1efff;
  margin: 24px 0;
`;
