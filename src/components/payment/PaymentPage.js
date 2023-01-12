import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useAxios from "axios-hooks";

import { PaymentMethods, baseApiUrl } from "../../constants";
import { RedirectByAuthStatus } from "../../utils";

import PaymentAmountInfo from "./PaymentAmountInfo";
import PayerInfo from "./PayerInfo";
import TermsOfServiceSection from "./TermsOfServiceSection";
import SelectedClassInfo from "./SelectedClassInfo";
import PaymentMethodList from "./PaymentMethodList";
import { Loader, Layout } from "../global";

const PaymentPage = () => {
  const { name, email, image } = { ...localStorage };
  const [payMethod, setPaymentMethod] = useState(null);
  const { planid } = useParams();
  const [{ data: product, loading: isLoading }] = useAxios(
    `${baseApiUrl}products?id=${planid}`
  );
  const paymentData = PaymentMethods.find((el) => el.name === payMethod);

  // todo : price to be replace product.amount
  const price = Number(product?.amount || 20000).toLocaleString();

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
      amount: product?.amount || 20000,
      buyer_email: email,
      buyer_name: name,
      m_redirect_url: `http://localhost:3000/detail/purchase/complete/${planid}`,
    };

    try {
      await IMP.request_pay(paymentInfo);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <RedirectByAuthStatus />
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
  background-color: #fbfbfb;
`;

const Box = styled.div`
  width: calc(100% - 32px);
  padding: 16px 20px;
  box-sizing: border-box;
  background: #ffffff;
  margin: 6px 16px;
  border-radius: 16px;
`;

const UserInfoWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 66px 0 6px 0;
`;

const PaymentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 32px);
  max-width: 380px;
  height: 52px;
  background: ${(props) => (props.disabled ? "#A9A9A9" : "#6b47fd")};
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #f1efff;
  margin: 24px 16px;
`;
