import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { PaymentMethods } from "../../constants";
import { RedirectByAuthStatus } from "../../utils";

import PaymentAmountInfo from "./PaymentAmountInfo";
import PayerInfo from "./PayerInfo";
import TermsOfServiceSection from "./TermsOfServiceSection";
import SelectedProductInfo from "./SelectedProductInfo";
import PaymentMethodList from "./PaymentMethodList";
import { Loader, Layout } from "../global";
import { useQuery, useMutation } from "@apollo/client";
import { createOrder, getProductById } from "../../apollo/domain/payment";

const PaymentPage = () => {
  const { name, email, image, userid: memberId } = { ...localStorage };

  const { productId } = useParams();

  const [payMethod, setPaymentMethod] = useState(null);
  const [orderNumber, setOrderNumber] = useState(null);
  const [productByIdOutput, setProductByIdOutput] = useState(null);

  const { data: getProductByIdOutput, loading: isLoading } = useQuery(
    getProductById,
    {
      variables: {
        id: productId,
      },
      onCompleted: ({ getProductById }) => {
        setProductByIdOutput(getProductById);
      },
      onError: (err) => {
        console.log("onError :  ", err.message);
      },
    }
  );

  const [getOrderNumber] = useMutation(createOrder, {
    variables: {
      // productId: "cc1d6a2c-847f-4da2-9ddf-0ba8081cb53b",
      // memberId: "ce99b7c2-e0e0-4c70-a823-0a7cc335a013",
      // creatorId: "52b28932-7b60-42e2-890d-89f4dc66bfc0",
      productId: productId,
      memberId: memberId,
      creatorId: productByIdOutput?.creator.id,
    },
    onCompleted: ({ createOrder }) => {
      setOrderNumber(createOrder.orderNumber);
    },
    onError: (error) => {
      console.error("onError : ", error.message);
    },
  });

  const paymentData = PaymentMethods.find((el) => el.name === payMethod);

  const fotamttedPrice = Number(productByIdOutput?.price).toLocaleString();

  const handleSelectPaymentMethod = (name) => {
    setPaymentMethod(name);
  };

  const handlePurchase = async () => {
    const { IMP } = window;
    IMP.init(process.env.REACT_APP_IAMPORT_MERCHANT_CODE);

    const paymentInfo = {
      pg: paymentData.pg,
      pay_method: paymentData.pay_method,
      merchant_uid: orderNumber,
      name: productByIdOutput?.title,
      amount: productByIdOutput?.price,
      buyer_email: email,
      buyer_name: name,
      m_redirect_url: `${window.location.origin}/detail/purchase/complete/${productId}`,
    };
    try {
      await IMP.request_pay(paymentInfo);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (getProductByIdOutput) {
      getOrderNumber();
    }
  }, [getProductByIdOutput]);

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
          <SelectedProductInfo
            isLoading={isLoading}
            title={productByIdOutput?.title}
            sessions={productByIdOutput?.sessions}
          />
        </Box>

        <Box>
          <PaymentAmountInfo
            isLoading={isLoading}
            priceWithComma={fotamttedPrice}
          />
        </Box>

        <Box>
          <PaymentMethodList onClickPaymentMethod={handleSelectPaymentMethod} />
        </Box>
        <PaymentButton disabled={!payMethod} onClick={handlePurchase}>
          {fotamttedPrice}원 결제하기
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
