import styled from "styled-components";
import Label from "../global/Label";
import BorderText from "../global/BorderText";
import ThinText from "../global/ThinText";
import Divider from "../global/Divider";
import Loader from "../global/Loader";

const PaymentAmountInfo = ({ isLoading, priceWithComma }) => {
  return (
    <>
      <Label>결제 금액</Label>
      {isLoading ? (
        <Loader width="100%" height="100%" />
      ) : (
        <>
          <TotalAmountWrapper>
            <BorderText width="50%" fontWeight="700">
              총 결제 금액
            </BorderText>
            <TotalAmount>{priceWithComma}</TotalAmount>
            <ThinText width="auto" margin="0 0 0 4px" color="#222222">
              원
            </ThinText>
          </TotalAmountWrapper>
          <Divider
            margin="16px 0"
            border="1px solid #ededed"
            maxWidth="100%"
            height="none"
          />

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
      )}
    </>
  );
};

export default PaymentAmountInfo;

const TotalAmountWrapper = styled.div`
  display: flex;
  align-items: end;
`;

const TotalAmount = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-align: right;
  width: 50%;
`;
const AmountInfo = styled.div`
  display: flex;
  width: 100%;
`;