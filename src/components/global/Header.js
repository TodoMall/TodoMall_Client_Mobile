import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <Container>
      <BackArrow
        src="/images/arrowbackIcon.png"
        alt=""
        onClick={handleNavigate}
      />
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 56px;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  position: fixed;
  top: -2px;
`;

const BackArrow = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  color: black;
  left: 15px;
`;
const HeaderTitle = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  text-align: center;
`;
