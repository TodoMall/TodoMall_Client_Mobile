import styled from "styled-components";
import { MAX_WIDTH } from "../../../constants";

const PlanAmountInfo = ({ amount }) => {
  return (
    <>
      <AmountInfo>
        <p className="label">클래스 구매가</p>
        <div className="right">
          <p className="amount">{amount}</p>
          <p className="description">원</p>
        </div>
      </AmountInfo>
    </>
  );
};

export default PlanAmountInfo;

const AmountInfo = styled.div`
  max-width: ${MAX_WIDTH};
  width: 95%;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  margin: 14px 0;
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
  .right {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .amount {
    //styleName: H!_600_B;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #6b47fd;
  }
  .description {
    //styleName: B3_300_M;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
  }
`;
