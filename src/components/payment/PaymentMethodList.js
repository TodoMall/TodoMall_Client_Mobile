import styled from "styled-components";
import { PaymentMethods } from "../../constants";

const PaymentMethodList = ({ onClickPaymentMethod }) => {
  return (
    <>
      <Label>결제 수단</Label>
      <PaymentIconList>
        {PaymentMethods.map(({ id, name, iconPath, description }) => {
          const isKakao = name === "kakaopay";
          return (
            <PaymentIconItem
              key={id}
              onClick={() => onClickPaymentMethod(name)}
            >
              <PaymentIcon
                src={iconPath}
                alt=""
                width={isKakao ? "52px" : "36px"}
              />
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
  flex: 1 0 34%;
  margin: 4px 3px;
  height: 100px;
  &:focus {
    border: 2px solid #6b47fd;
  }
  @media screen and (max-width: 500px) {
    &:hover {
      border: 2px solid #6b47fd;
    }
  }
`;
const PaymentIcon = styled.img`
  margin-bottom: 8px;
  width: ${(props) => props.width};
  height: 36px;
`;
