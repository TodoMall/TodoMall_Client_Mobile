import styled from "styled-components";
import { MAX_WIDTH } from "../../../constants";

const BigAmountBox = ({ amount }) => {
  return (
    <AmountBox>
      <p className="label">클래스 구매가</p>
      <div className="amountWrapper">
        <p className="amount">{amount}</p>
        <p className="description">원</p>
      </div>
    </AmountBox>
  );
};

export default BigAmountBox;

const AmountBox = styled.div`
  display: flex;
  width: 95%;
  max-width: ${MAX_WIDTH};
  height: 125px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 16px;
  margin: 14px 16px;
  padding: 0 20px 0 16px;
  .label {
    display: flex;
    align-items: center;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.01em;
    text-align: left;
  }
  .amountWrapper {
    display: inline-flex;
    align-items: center;
  }
  .amount {
    font-family: Pretendard;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: -0.025em;
    text-align: center;
    color: #6b47fd;
  }
`;
