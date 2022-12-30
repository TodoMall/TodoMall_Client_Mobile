import React, { useState } from "react";
import styled from "styled-components";
// to be rebuild folder structure
import Refund from "../login/Refund";
import { useNavigate } from "react-router-dom";

const TermsOfServiceSection = () => {
  const navigate = useNavigate();
  const [isVisibleRefundDescription, setIsVisibleRefundDescription] =
    useState(false);

  const handleShowRefund = () => {
    setIsVisibleRefundDescription((prev) => !prev);
  };
  return (
    <Wrapper>
      <Policy onClick={() => navigate("/service")}>
        <p>이용 약관</p>
        <PolicyPageAnchor>보기</PolicyPageAnchor>
      </Policy>
      <Policy onClick={() => navigate("/personal")}>
        <p>개인정보처리방침</p>
        <PolicyPageAnchor>보기</PolicyPageAnchor>
      </Policy>
      <Policy onClick={handleShowRefund}>
        <p>환불 안내</p>
        <PolicyPageAnchor>
          <ToggleIcon
            src={
              isVisibleRefundDescription
                ? "/images/unshowAccordion.png"
                : "/images/showAccordion.png"
            }
            alt=""
          />
        </PolicyPageAnchor>
      </Policy>
      {isVisibleRefundDescription && (
        <RefundDescription>
          <Refund />
        </RefundDescription>
      )}
    </Wrapper>
  );
};

export default TermsOfServiceSection;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding: 0 24px;
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

const RefundDescription = styled.div`
  width: 100%;
  position: relative;
  margin: 16px 0 16px 0;
`;

const ToggleIcon = styled.img`
  height: 24px;
  width: 24px;
`;
