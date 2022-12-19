import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { terms } from "../../constants";

// termsofServiceSection
// terms 는 payment와 관련이 없다?
const TermsOfServiceSection = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {terms.map(({ id, title, redirectPath }) => {
        return (
          <Policy key={id} onClick={() => navigate(redirectPath)}>
            <p>{title}</p>
            <PolicyPageAnchor>보기</PolicyPageAnchor>
          </Policy>
        );
      })}
    </Wrapper>
  );
};

export default TermsOfServiceSection;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 16px 16px 16px;
`;

const Policy = styled.div`
  display: inline-flex;
  align-items: center;
  height: 44px;
  width: 100%;
  p {
    width: 50%;
  }
`;
const PolicyPageAnchor = styled.a`
  width: 50%;
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #888888;
  text-decoration: underline;
`;
