import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { COLOR } from "../../constants";

// TODO: background blur 가 있다고 들었는데 다시한번 질문해서 수정

const Header = ({
  title,
  image,
  isBackIcon = true,
  containerHeight = "3.25rem",
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <Container containerHeight={containerHeight}>
      {isBackIcon && <BackArrow onClick={handleNavigate} />}
      <HeaderTitle>{title}</HeaderTitle>
      {image && <HeaderImage src={image} />}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: ${(props) => props.containerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${COLOR.BACKGROUND1};
  border-bottom: 1px solid #fafafc;
  z-index: 9;
`;

const BackArrow = styled.img`
  position: absolute;
  left: 0.938rem;
  content: url("/images/arrow_back_icon.svg");
`;
const HeaderTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
`;

const HeaderImage = styled.img`
  width: 8rem;
  height: 1.25rem;
  object-fit: contain;
`;
