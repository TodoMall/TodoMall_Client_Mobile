import React from "react";
import styled from "styled-components";
import { CAREER, SELF, INVESTMENT } from "./Constant";

const Header = ({ current, setCurrent }) => {
  return (
    <Container>
      <Logo src="/images/Logo.png" />
      <Themes>
        <Theme
          onClick={() => {
            setCurrent(CAREER);
          }}
          style={current === CAREER ? { borderBottom: "2px solid black" } : {}}
        >
          {current === CAREER ? (
            <ThemeIcon src={`/images/${CAREER}_on.svg`} />
          ) : (
            <ThemeIcon src={`/images/${CAREER}_off.svg`} />
          )}
        </Theme>
        <Theme
          onClick={() => {
            setCurrent(SELF);
          }}
          style={current === SELF ? { borderBottom: "2px solid black" } : {}}
        >
          {current === SELF ? (
            <ThemeIcon src={`/images/${SELF}_on.svg`} />
          ) : (
            <ThemeIcon src={`/images/${SELF}_off.svg`} />
          )}
        </Theme>
        <Theme
          onClick={() => {
            setCurrent(INVESTMENT);
          }}
          style={
            current === INVESTMENT ? { borderBottom: "2px solid black" } : {}
          }
        >
          {current === INVESTMENT ? (
            <ThemeIcon src={`/images/${INVESTMENT}_on.svg`} />
          ) : (
            <ThemeIcon src={`/images/${INVESTMENT}_off.svg`} />
          )}
        </Theme>
      </Themes>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px; //IPHONE camera
  background-color: #fbfbfb;
  position: fixed;
  width: 100%;
  z-index: 10000;
`;

const Logo = styled.img`
  width: 150px;
  margin-left: 5%;
`;

const Themes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
`;

const Theme = styled.div`
  font-family: "PretendardMedium";
  width: 33%;
  text-align: center;
  align-self: flex-end;
  // margin-bottom: 10px;
`;

const ThemeIcon = styled.img`
  margin-bottom: 10px;
`;

export default Header;
