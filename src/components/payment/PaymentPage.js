import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAxios from "axios-hooks";

import { PaymentMethods } from "../../constants";

import PaymentAmountInfo from "./PaymentAmountInfo";
import PayerInfo from "./PayerInfo";
import TermsOfServiceSection from "./TermsOfServiceSection";
import SelectedClassInfo from "./SelectedClassInfo";
import PaymentMethodList from "./PaymentMethodList";
import { Loader, Layout } from "../global";

const PaymentPage = () => {
  const { name, email, image, access } = { ...localStorage };
  const [payMethod, setPaymentMethod] = useState(null);
  const navigate = useNavigate();
  const { planid } = useParams();
  const [{ data: product, loading: isLoading }] = useAxios(
    `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products?id=${planid}`
  );
  const paymentData = PaymentMethods.find((el) => el.name === payMethod);

  // todo : price to be removed & replace product.price
  const price = Number(10000).toLocaleString();

  /* Feature Flagging : vercel에서 제공하는 도메인에서 QA를 진행하기 위해 잠시 feature flagging */

  // useEffect(() => {
  //   if (!access) {
  //     return navigate("/");
  //   }
  // }, [access, navigate]);

  const handleSelectPaymentMethod = (name) => {
    setPaymentMethod(name);
  };

  const handlePurchase = async () => {
    const { IMP } = window;
    IMP.init(process.env.REACT_APP_IAMPORT_MERCHANT_CODE);

    const paymentInfo = {
      pg: paymentData.pg,
      pay_method: paymentData.pay_method,
      merchant_uid: `mid_${new Date().getDate()}`,
      name: product?.title,
      amount: 20000,
      buyer_tel: "010-0000-0000",
      buyer_email: email,
      buyer_name: name,
      m_redirect_url: `http://localhost:3000/payment/complete/${planid}`,
    };

    try {
      await IMP.request_pay(paymentInfo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Layout currentPage="결제하기">
        <UserInfoWrapper>
          {isLoading ? (
            <Loader width="100%" height="100%" />
          ) : (
            <PayerInfo image={image} name={name} email={email} />
          )}
        </UserInfoWrapper>

        <Box>
          <SelectedClassInfo
            isLoading={isLoading}
            title={product?.title}
            sessions={product?.sessions}
          />
        </Box>

        <Box>
          <PaymentAmountInfo isLoading={isLoading} priceWithComma={price} />
        </Box>

        <Box>
          <PaymentMethodList onClickPaymentMethod={handleSelectPaymentMethod} />
        </Box>
        <PaymentButton disabled={!payMethod} onClick={handlePurchase}>
          {price}원 결제하기
        </PaymentButton>

        <TermsOfServiceSection />
      </Layout>
    </Container>
  );
};
export default PaymentPage;

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
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #f1efff;
  margin: 24px 0;
`;
