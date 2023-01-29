import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  paymentResultData,
  ORDER_STATE,
  PaymentMethods,
} from "../../constants";
import { Loader, ThinText, BorderText, Header } from "../global";
import { RedirectByAuthStatus } from "../../utils";
import { useMutation, useQuery } from "@apollo/client";
import {
  verifyOrder,
  buyProduct,
  getOrderByOrderNumber,
} from "../../apollo/domain/payment";
import dayjs from "dayjs";
import styled from "styled-components";

const PaymentResultPage = () => {
  const { productId } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  const [isPaidSuccess, setIsPaidSuccess] = useState(false);
  const [orderByOrderNumberOutput, setOrderByOrderNumberOutput] =
    useState(null);

  const queryString = new URLSearchParams(search);
  const imp_success = JSON.parse(queryString.get("imp_success"));
  const impUid = queryString.get("imp_uid");
  const merchantUid = queryString.get("merchant_uid");
  let error_msg;
  if (!imp_success) {
    error_msg = queryString.get("error_msg");
  }

  const { userid: memberId } = { ...localStorage };

  const [verifyOrderFunc, { loading: isLoading }] = useMutation(verifyOrder, {
    variables: { impUid, merchantUid },
    onCompleted: (data) => {
      setIsPaidSuccess(data.verifyOrder.state === ORDER_STATE.SUCCESS);
    },
  });

  const [buyProductFunc] = useMutation(buyProduct, {
    variables: {
      productId: "cc1d6a2c-847f-4da2-9ddf-0ba8081cb53b",
      memberId: "ce99b7c2-e0e0-4c70-a823-0a7cc335a013",
      // productId: productId,
      // memberId: memberId,
      orderNumber: merchantUid,
    },
  });

  const { data: orderByOrderNumber } = useQuery(getOrderByOrderNumber, {
    variables: {
      orderNumber: merchantUid,
    },
  });

  const { title, iconPath, notice, locationGuideText } =
    paymentResultData[isPaidSuccess ? "success" : "fail"];

  useEffect(() => {
    verifyOrderFunc();
    if (orderByOrderNumber) {
      setOrderByOrderNumberOutput(orderByOrderNumber.getOrderByOrderNumber);
    }
    if (isPaidSuccess && imp_success) {
      buyProductFunc();
    }
  }, [isPaidSuccess, orderByOrderNumber]);

  const fotmattedPgProvider = PaymentMethods.find(
    (el) => el.name === orderByOrderNumberOutput?.pgProvider
  );

  const PaymentInfoRowItem = ({ label, content }) => {
    return (
      <>
        <ThinText margin="4px 0">{label}</ThinText>
        <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
          {content}
        </BorderText>
      </>
    );
  };

  if (isLoading) {
    return <Loader />;
  }

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
        {isPaidSuccess ? (
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
        {isPaidSuccess ? notice : error_msg}
      </ThinText>
      {!isPaidSuccess && <EmptyBox />}
      {isPaidSuccess && (
        <PaymentInfoBox>
          <PaymentInfoRowItem
            label={"결제 금액"}
            content={`${orderByOrderNumberOutput?.product?.price}원`}
          />
          <PaymentInfoRowItem
            label={"사용자"}
            content={orderByOrderNumberOutput?.member?.name}
          />
          <PaymentInfoRowItem
            label={"결제 방법"}
            content={fotmattedPgProvider?.description}
          />
          <PaymentInfoRowItem
            label={"결제 일시"}
            content={dayjs(orderByOrderNumberOutput?.createdAt).format(
              `YYYY.MM.DD HH:mm:ss`
            )}
          />
        </PaymentInfoBox>
      )}
      {!isPaidSuccess && (
        <MoveTodoMallButton onClick={() => navigate("/todomall")}>
          <p>투두몰로 이동</p>
        </MoveTodoMallButton>
      )}
      <Button
        onClick={() =>
          navigate(isPaidSuccess ? "/todobox" : `/detail/purchase/${productId}`)
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
