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
    <>
      <Wrapper>
        <Policy onClick={() => navigate("/service")}>
          <p>이용 약관</p>
          <PolicyPageAnchor>보기</PolicyPageAnchor>
        </Policy>
        <Policy onClick={() => navigate("/personal")}>
          <p>개인정보처리방침</p>
          <PolicyPageAnchor>보기</PolicyPageAnchor>
        </Policy>
      </Wrapper>
      <RefundWrapper>
        <RefundPolicy
          className="refundPolicy"
          onClick={handleShowRefund}
          isVisibleRefundDescription={isVisibleRefundDescription}
        >
          <p>환불 안내</p>
          <PolicyPageAnchor>
            <ToggleIcon
              src={
                isVisibleRefundDescription
                  ? "/images/showAccordion.png"
                  : "/images/unshowAccordion.png"
              }
              alt=""
            />
          </PolicyPageAnchor>
        </RefundPolicy>
        {isVisibleRefundDescription && (
          <RefundDescription>
            <Refund />
          </RefundDescription>
        )}
      </RefundWrapper>
    </>
  );
};

export default TermsOfServiceSection;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
`;

const RefundWrapper = styled.div`
  width: 100%;
  padding: 0 8px;
  margin-bottom: 16px;
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

const RefundPolicy = styled(Policy)`
  padding: 16px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: ${(props) =>
    props.isVisibleRefundDescription ? "0" : "20px"};
  border-bottom-right-radius: ${(props) =>
    props.isVisibleRefundDescription ? "0" : "20px"};
  ${(props) => props.fontWeight};
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
  :active {
    color: #000000;
  }
`;

const RefundDescription = styled.div`
  width: 100%;
  position: relative;
  padding: 16px 0;
  background-color: #ffffff;
  border-bottom-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const ToggleIcon = styled.img`
  position: relative;
  top: 3px;
  height: 24px;
  width: 24px;
`;
