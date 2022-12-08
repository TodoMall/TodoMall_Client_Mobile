import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Policy onClick={() => navigate("/refund")}>
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
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  margin: 16px 0;
`;

const Policy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 375px;
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
export default Terms;
