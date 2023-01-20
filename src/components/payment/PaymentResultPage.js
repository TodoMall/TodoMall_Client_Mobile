import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { paymentResultData, baseApiUrl } from "../../constants";
import { Loader, ThinText, BorderText, Header } from "../global";
import { RedirectByAuthStatus } from "../../utils";
import { useQuery, useMutation } from "@apollo/client";
import { VERIFY_ORDER } from "./fetching/mutations/requestPurchase";
import { GET_PAID_PRODUCT } from "./fetching/queries/getPaidProduct";

import styled from "styled-components";
import axios from "axios";

const PaymentResultPage = () => {
  const { userid } = { ...localStorage };
  const { productId } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const [paymentResponse, setPaymentResponse] = useState(null);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const queryString = new URLSearchParams(search);
  const imp_success = JSON.parse(queryString.get("imp_success"));
  const imp_uid = queryString.get("imp_uid");
  const merchant_uid = queryString.get("merchant_uid");
  let error_msg;
  if (!imp_success) {
    error_msg = queryString.get("error_msg");
  }
  const [verifyOrder, { data, loading, error: isError }] = useMutation(
    VERIFY_ORDER,
    {
      variables: { impUid: imp_uid, merchantUid: merchant_uid },
    }
  );
  // const { data: paidProduct, error: isError } = useQuery(GET_PAID_PRODUCT, {
  //   variables: { id: productId },
  // });

  const requestPaymentToServer = async () => {
    try {
      const { data } = await verifyOrder({
        context: {
          headers: {
            "Content-Type": "application/json",
            "Hasura-Client-Name": "hasura-console",
            "x-hasura-admin-secret": "qwer1234",
          },
        },
      });
      if (data && imp_success) {
        console.log("isVerify{data} : ", data);
        setIsPaymentSuccess(true);
        // registerProductToUser();
      }
    } catch (error) {
      console.error("isError : ", JSON.stringify(isError, null, 2));
    }
  };

  // const registerProductToUser = async () => {
  //   try {
  //     await axios.post(`${baseApiUrl}user/product`, {
  //       productId: productId,
  //       userId: userid,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const PAYMENT_STATUS = isPaymentSuccess ? "success" : "fail";
  const price = paymentResponse?.price.toLocaleString();

  const { title, iconPath, notice, locationGuideText } =
    paymentResultData[PAYMENT_STATUS];

  useEffect(() => {
    requestPaymentToServer();
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }
  // console.log(JSON.stringify(isError, null, 2));
  // if (isError) {
  //   return (
  //     <>
  //       <h1>Error</h1>
  //       <p>{isError.message}</p>
  //     </>
  //   );
  // }

  return (
    <Wrapper>
      <RedirectByAuthStatus />
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
        {isPaymentSuccess ? (
          <>
            클래스가 성공적으로 추가됐어요.
            <br />
            데드라인 내에 미션 인증을 잊지 마세요!
          </>
        ) : (
          <>결제 과정 중에 문제가 발생했습니다.</>
        )}
      </BorderText>
      <ThinText width="90%" textAlign="center">
        {isPaymentSuccess ? notice : error_msg}
      </ThinText>
      {!isPaymentSuccess && <EmptyBox />}
      {isPaymentSuccess && (
        <PaymentInfoBox>
          <ThinText margin="4px 0">결제 금액</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {price}원
          </BorderText>
          <ThinText margin="4px 0">사용자</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse?.name}
          </BorderText>
          <ThinText margin="4px 0">결제카드</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse?.card_name}
          </BorderText>
          {paymentResponse?.paymentMethod === "card" && (
            <>
              <ThinText margin="4px 0">카드번호</ThinText>
              <BorderText
                textAlign="right"
                fontWeight="700px"
                margin="0 0 4px 0"
              >
                {paymentResponse?.card_number}
              </BorderText>
            </>
          )}
          <ThinText margin="4px 0">결제 일시</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse?.pay_date}
          </BorderText>
        </PaymentInfoBox>
      )}
      {!isPaymentSuccess && (
        <MoveTodoMallButton onClick={() => navigate("/todomall")}>
          <p>투두몰로 이동</p>
        </MoveTodoMallButton>
      )}
      <Button
        onClick={() =>
          navigate(
            isPaymentSuccess ? "/todobox" : `/detail/purchase/${productId}`
          )
        }
      >
        <p>{locationGuideText}</p>
      </Button>
    </Wrapper>
  );
};

export default PaymentResultPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;
const Icon = styled.img`
  margin: 98px 128px 48px 128px;
`;
const EmptyBox = styled.div`
  height: 172px;
`;
const PaymentInfoBox = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  margin: 24px 16px;
  padding: 20px;
  height: 172px;
`;
const Button = styled.button`
  width: calc(100% - 32px);
  margin: 0px 16px;
  height: 52px;
  align-items: flex-end;
  background-color: #6b47fd;
  border-radius: 20px;
  border: 1px solid #6b47fd;
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
  margin: 0 0 8px 0;
  border: 1px solid #6b47fd;
  background-color: #fbfbfb;
  p {
    color: #6b47fd;
  }
`;
