import styled from "styled-components";
import Label from "../global/Label";
import BorderText from "../global/BorderText";
import ThinText from "../global/ThinText";

const TotalAmountBox = ({ priceWithComma }) => {
  return (
    <>
      <Label>결제 금액</Label>
      <TotalAmountWrapper>
        <BorderText width="50%" fontWeight="700">
          총 결제 금액
        </BorderText>
        <TotalAmount>{priceWithComma}원</TotalAmount>
      </TotalAmountWrapper>
      <Divider />
      <AmountInfo>
        <ThinText>상품 금액 </ThinText>
        <BorderText textAlign="right" margin="0 0 8px 0">
          {priceWithComma}원
        </BorderText>
      </AmountInfo>
      <AmountInfo>
        <ThinText>상품 할인 금액 </ThinText>
        <BorderText textAlign="right">-0원</BorderText>
      </AmountInfo>
    </>
  );
};

export default TotalAmountBox;

const TotalAmountWrapper = styled.div`
  display: flex;
  align-items: center;
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
