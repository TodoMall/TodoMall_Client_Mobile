import React from "react";
import styled from "styled-components";

const Header = ({ current, setCurrent }) => {
  return (
    <Container>
      <Logo src="/images/Logo.png" />
      <Themes>
        <Theme
          onClick={() => {
            setCurrent("career");
          }}
          style={
            current === "career" ? { borderBottom: "2px solid black" } : {}
          }
        >
          {current === "career" ? (
            <ThemeIcon src="/images/career_on.svg" />
          ) : (
            <ThemeIcon src="/images/career_off.svg" />
          )}
        </Theme>
        <Theme
          onClick={() => {
            setCurrent("self");
          }}
          style={current === "self" ? { borderBottom: "2px solid black" } : {}}
        >
          {current === "self" ? (
            <ThemeIcon src="/images/self_on.svg" />
          ) : (
            <ThemeIcon src="/images/self_off.svg" />
          )}
        </Theme>
        <Theme
          onClick={() => {
            setCurrent("investment");
          }}
          style={
            current === "investment" ? { borderBottom: "2px solid black" } : {}
          }
        >
          {current === "investment" ? (
            <ThemeIcon src="/images/investment_on.svg" />
          ) : (
            <ThemeIcon src="/images/investment_off.svg" />
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
