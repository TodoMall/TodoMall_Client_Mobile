import styled from "styled-components";
import { PaymentGateDatas } from "../../constants/";

const PaymentMethodList = ({ onClickPaymentMethod }) => {
  return (
    <>
      <Label>결제 수단</Label>
      <PaymentIconList>
        {PaymentGateDatas.map(({ id, iconPath, description }) => {
          return (
            <PaymentIconItem key={id} onClick={() => onClickPaymentMethod(id)}>
              <PaymentIcon src={iconPath} alt="" />
              {description}
            </PaymentIconItem>
          );
        })}
      </PaymentIconList>
    </>
  );
};
export default PaymentMethodList;
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
const PaymentIconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaymentIconItem = styled.button`
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
const PaymentIcon = styled.img`
  margin-bottom: 8px;
`;
