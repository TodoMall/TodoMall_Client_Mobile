import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({ title, image, containerHeight = "56px" }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <Container containerHeight={containerHeight}>
      {title && (
        <>
          <BackArrow
            src="/images/arrowbackIcon.png"
            alt=""
            onClick={handleNavigate}
          />
          <HeaderTitle>{title}</HeaderTitle>
        </>
      )}
      {image && <HeaderImage src={image} alt="" />}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: ${(props) => props.containerHeight};
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  position: fixed;
  top: -2px;
  z-index: 9999;
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

const HeaderImage = styled.img`
  width: 128px;
  height: 20px;
  object-fit: contain;
`;
