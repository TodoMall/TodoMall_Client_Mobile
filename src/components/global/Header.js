import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackArrow
        onClick={() => {
          navigate(-1);
        }}
      />
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fbfbfb;
  position: fixed;
  top: -2px;
`;

const BackArrow = styled(ArrowBackIosIcon)`
  height: 56px;
  color: black;
  margin-left: 5vw;
`;
const HeaderTitle = styled.p`
  font-size: 16px;
  font-family: "PretendardSemiBold";
  display: block;
  flex-grow: 1;
  text-align: center;
  margin-right: 40px;
`;

export default Header;
