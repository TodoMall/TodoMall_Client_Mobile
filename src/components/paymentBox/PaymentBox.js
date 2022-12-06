import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigator from "../global/Header";

const PaymentBox = () => {
  // TODO: custom hook 으로
  const [name] = useState(localStorage.getItem("name"));
  const [email] = useState(localStorage.getItem("email"));
  const [image] = useState(localStorage.getItem("image"));
  const DemoAmount = 10000;
  let commaSeparatedAmount = DemoAmount.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  const [planInfo, setPlanInfo] = useState();
  const ID = useParams().planid;
  const fetch = useCallback(async () => {
    await axios
      .get(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products?id=${ID}`)
      .then(({ data }) => setPlanInfo(data));
  }, [ID]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Container>
      <Navigator title="결제하기" />
      <Header>
        <Label>도전자</Label>
        <UserInfo>
          <ProfileImage src={image} alt={image} />
          <User>
            <Description>이름 </Description>
            <BorderText>{name}</BorderText>
            <Description>이메일 </Description>
            <BorderText>{email}</BorderText>
          </User>
        </UserInfo>
      </Header>

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
        <Label>결제 금액</Label>
        <div>
          <TotalAmountText>총 결제 금액</TotalAmountText>
          <TotalAmount>{commaSeparatedAmount}원</TotalAmount>
        </div>
        <Divider />
        <AmountInfo>
          <Description>상품 금액 </Description>
          <BorderText>{commaSeparatedAmount}원</BorderText>
        </AmountInfo>
        <AmountInfo>
          <Description>상품 할인 금액 </Description>
          <BorderText>-0원</BorderText>
        </AmountInfo>
      </Box>
      <Box>
        <Label>결제 수단</Label>
      </Box>

      <PaymentButton>{commaSeparatedAmount}원 결제하기</PaymentButton>
    </Container>
  );
};
export default PaymentBox;

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

const Box = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid black; // to be removed
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
const Header = styled.div`
  border: 1px solid black; // to be removed
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 66px;
  /* margin: 66px 16px 16px 12px; */
  padding: 15px 20px 10px 25px;
  background-color: #fbfbfb;
  width: 100vw;
  border-radius: 8px;
`;
const UserInfo = styled.span`
  display: flex;
  align-items: center;
`;

const User = styled.div`
  margin-left: 15px;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
`;
