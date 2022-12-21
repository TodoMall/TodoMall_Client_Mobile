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
  const [{ data: product, loading }] = useAxios(
    `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products?id=${planid}`
  );
  const paymentData = PaymentMethods.find((el) => el.id === payMethod);

  const price = Number(10000).toLocaleString();

  useEffect(() => {
    if (!access) {
      return navigate("/");
    }
  }, [access, navigate]);

  const handleSelectPaymentMethod = (id) => {
    setPaymentMethod(id);
  };

  const handlePurchase = async () => {
    const { IMP } = window;
    IMP.init(process.env.REACT_APP_IAMPORT_MERCHANT_CODE);

    const paymentInfo = {
      pg: paymentData.pg,
      pay_method: paymentData.pay_method,
      merchant_uid: `mid_${new Date().getDate()}`,
      name: product?.title,
      amount: price || 10000,
      buyer_tel: "010-0000-0000",
      buyer_email: email,
      buyer_name: name,
      m_redirect_url: `http://localhost:3000/payment/complete/${planid}`,
    };

    try {
      const response = await IMP.request_pay(paymentInfo);
      // request server with { imp_uid , merchant_uid } & headers: { "Content-Type": "application/json" },
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Layout currentPage="결제하기">
        <UserInfoWrapper>
          {loading ? (
            <Loader width="100%" height="100%" />
          ) : (
            <PayerInfo image={image} name={name} email={email} />
          )}
        </UserInfoWrapper>

        <Box>
          <SelectedClassInfo
            loading={loading}
            title={product?.title}
            sessions={product?.sessions}
          />
        </Box>

        <Box>
          <PaymentAmountInfo loading={loading} priceWithComma={price} />
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
