import React from "react";
import styled from "styled-components";
import Divider from "../global/Divider";

const Footer = () => {
  return (
    <Wrapper>
      <FooterIcon src="/images/DarkLogo.png" alt="img error" />
      <Divider
        margin="16px 0"
        border="1px solid #888888"
        maxWidth="100%"
        height="none"
      />

      <CompanyInfo>
        <p>마이플랜잇</p>
        <p>사업자등록번호 : 274-12-01980 | 대표 : 최현권</p>
        <p>주소 : 서울특별시 송파구 양재대로 1218, 107동 15층 1502호</p>
        <p>전화번호 : 010-2154-3992 | 메일 : myplanit.unicorn@gmail.com</p>
      </CompanyInfo>
      <Copyright>Copyright ⓒ 2022 myplanit. All rights reserved.</Copyright>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 212px;
  padding: 24px;
  background: #444444;
`;

const CompanyInfo = styled.div`
  color: #ffffff;
  p {
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.01em;
    text-align: left;
    margin: 2px 0;
  }
`;

const Copyright = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #ffffff;
`;
const FooterIcon = styled.img`
  width: 120px;
  height: 18px;
`;
