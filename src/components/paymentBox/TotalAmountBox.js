import styled from "styled-components";

const TotalAmountBox = ({ priceWithComma }) => {
  return (
    <>
      <Label>결제 금액</Label>
      <TotalAmountWrapper>
        <TotalAmountText>총 결제 금액</TotalAmountText>
        <TotalAmount>{priceWithComma}원</TotalAmount>
      </TotalAmountWrapper>
      <Divider />
      <AmountInfo>
        <Description>상품 금액 </Description>
        <BorderText>{priceWithComma}원</BorderText>
      </AmountInfo>
      <AmountInfo>
        <Description>상품 할인 금액 </Description>
        <BorderText>-0원</BorderText>
      </AmountInfo>
    </>
  );
};

export default TotalAmountBox;

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

const TotalAmountWrapper = styled.div`
  display: flex;
`;

const TotalAmountText = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.01em;
  width: 50%;
`;
const TotalAmount = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.01em;
  text-align: right;
  width: 50%;
`;
const Divider = styled.div`
  width: 100vm;
  border: 1px solid #ededed;
  margin: 16px 0;
`;
const AmountInfo = styled.div`
  display: flex;
  width: 100%;
`;
const Description = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #888888;
  width: 50%;
`;
const BorderText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #222222;
  width: 50%;
  text-align: right;
`;
