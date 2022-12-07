import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navigator from "../global/Header";

const PaymentBox = () => {
  const navigate = useNavigate();
  const [name] = useState(localStorage.getItem("name"));
  const [email] = useState(localStorage.getItem("email"));
  const [image] = useState(localStorage.getItem("image"));
  const [paymentMethod, setPaymentMethod] = useState(null); // TODO: to be renamed
  const [planInfo, setPlanInfo] = useState();
  const { planid: ID } = useParams();
  const [DemoAmount] = useState(10000); // TODO: to be replace
  let commaSeparatedAmount = DemoAmount.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  const fetch = useCallback(async () => {
    await axios
      .get(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products?id=${ID}`)
      .then(({ data }) => setPlanInfo(data));
  }, [ID]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const handleSelectPaymentMethod = ({ target: { value } }) => {
    // TODO: to be renamed
    setPaymentMethod(value);
  };

  const handleMovePage = (link) => {
    navigate(link);
  };

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
        <PaymentIconBox>
          {/* to be simple usgin iterator function */}
          {/* div영역을 누르면 잘작동하지만 , image 영역을 누르면 value에 undefined가 담긴다 */}
          <PaymentSelectButton value="card" onClick={handleSelectPaymentMethod}>
            <PaymentIcon src="/images/payment/accountTransferIcon.svg" />
            카드결제
          </PaymentSelectButton>
          <PaymentSelectButton
            value="account"
            onClick={handleSelectPaymentMethod}
          >
            <PaymentIcon src="/images/payment/cardPayIcon.svg" />
            실시간 계좌이체
          </PaymentSelectButton>
          <PaymentSelectButton value="toss" onClick={handleSelectPaymentMethod}>
            <PaymentIcon src="/images/payment/tossPayIcon.svg" />
            토스페이
          </PaymentSelectButton>
          <PaymentSelectButton
            value="kakao"
            onClick={handleSelectPaymentMethod}
          >
            <PaymentIcon src="/images/payment/kakaoPayIcon.svg" />
            카카오페이
          </PaymentSelectButton>
        </PaymentIconBox>
      </Box>
      <PaymentButton disabled={!paymentMethod}>
        {commaSeparatedAmount}원 결제하기
      </PaymentButton>

      <TermsOfService>
        <Policy onClick={() => alert("환불안내 정책 열심히 만드는중!!")}>
          <p>환불 안내</p>
          <PolicyPageButton>보기</PolicyPageButton>
        </Policy>
        <Policy onClick={() => navigate("/service")}>
          <p>이용 약관</p>
          <PolicyPageButton>보기</PolicyPageButton>
        </Policy>
        <Policy onClick={() => navigate("/personal")}>
          <p>개인정보처리방침</p>
          <PolicyPageButton>보기</PolicyPageButton>
        </Policy>
      </TermsOfService>

      <Footer>
        <img src="/images/DarkLogo.png" />
        <FooterDivider />
        <CompanyInfo>
          <p>마이플랜잇</p>
          <p>사업자등록번호 : 274-12-01980 | 대표 : 최현권</p>
          <p>주소 : 서울특별시 송파구 양재대로 1218, 107동 15층 1502호</p>
          <p>메일 : myplanit.unicorn@gmail.com</p>
          <Copyright>Copyright ⓒ 2022 myplanit. All rights reserved.</Copyright>
        </CompanyInfo>
      </Footer>
    </Container>
  );
};
export default PaymentBox;
const Copyright = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
`;
const CompanyInfo = styled.div`
  color: #ffffff;
  p {
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.01em;
    text-align: left;
    margin: 2px 0;
  }
`;

const Footer = styled.div`
  width: 375px;
  height: 212px;
  padding: 24px;
  background: #444444;
`;
const FooterDivider = styled.div`
  // todo : to be moved Footer component
  width: 100vm;
  margin: 16px 0;
  border: 1px solid #888888;
  margin: 16px 0;
`;
const TermsOfService = styled.div`
  width: 100%;
  margin: 16px 0;
`;

const PolicyPageButton = styled.a`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #888888;
  text-decoration: underline;
`;

const Policy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 375px;
`;

const PaymentIcon = styled.img`
  margin-bottom: 8px;
`;

const PaymentIconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaymentSelectButton = styled.button`
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
  width: 100%;
  margin: 6px 0;
  padding: 16px 20px;
  border-radius: 8px;
  box-sizing: border-box;
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
  padding: 0 16px;
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
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 66px;
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
