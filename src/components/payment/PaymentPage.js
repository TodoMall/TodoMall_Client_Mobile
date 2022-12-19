import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { PaymentGateDatas, API_ENDPOINT } from "../../constants";

import TotalAmountBox from "./PaymentAmountInfo";
import UserInfoBox from "./PayerInfo";
import Terms from "./TermsOfServiceSection";
import ClassInfoBox from "./SelectedClassInfo";
import PaymentMethodList from "./PaymentMethodList";
import { Loader, Layout } from "../global";

const PaymentPage = () => {
  // localstorage 정보가 없을때 대처를 해야한다.
  // 로그인 페이지로 리다이렉트 하든가 뭘 해라 ㅂㅅ아
  const { name, email, image } = { ...localStorage };
  const [payMethod, setPaymentMethod] = useState(null);
  const { planid } = useParams();
  // 삭제하고 localeString 사용해서 그때그때 써라
  const {
    data: product,
    loading,
    error,
  } = useAxios(`${API_ENDPOINT}products?id=${planid}`);
  // 이걸사용해서 http request를 제대로 사용할 수 없음

  const paymentData = PaymentGateDatas.find((el) => el.id === payMethod);

  const handleSelectPaymentMethod = (id) => {
    setPaymentMethod(id);
  };

  const handlePayment = async () => {
    // handlepay || handlePurchase
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

  // data가 필요한 곳에서만 loader를 보여준다
  if (loading) {
    return <Loader />;
  }

  // error alert 를 띄어준다
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <Container>
      <Layout currentPage="결제하기">
        <UserInfoWrapper>
          <UserInfoBox image={image} name={name} email={email} />
        </UserInfoWrapper>

        <Box>
          <ClassInfoBox
            title={productData?.title}
            sessions={productData?.sessions}
          />
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
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #f1efff;
  margin: 24px 0;
`;
