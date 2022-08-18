import React from "react";
import styled from "styled-components";

const Header = ({ current, setCurrent }) => {
  return (
    <Container>
      <Logo src="/images/Logo.png" />
      <Themes>
        <Theme
          onClick={() => {
            setCurrent("health");
          }}
          style={
            current === "health" ? { borderBottom: "2px solid black" } : {}
          }
        >
          {current === "health" ? (
            <ThemeIcon src="/images/health_on.svg" />
          ) : (
            <ThemeIcon src="/images/health_off.svg" />
          )}
        </Theme>
        <Theme
          onClick={() => {
            setCurrent("invest");
          }}
          style={
            current === "invest" ? { borderBottom: "2px solid black" } : {}
          }
        >
          {current === "invest" ? (
            <ThemeIcon src="/images/invest_on.svg" />
          ) : (
            <ThemeIcon src="/images/invest_off.svg" />
          )}
        </Theme>
        <Theme
          onClick={() => {
            setCurrent("employment");
          }}
          style={
            current === "employment" ? { borderBottom: "2px solid black" } : {}
          }
        >
          {current === "employment" ? (
            <ThemeIcon src="/images/employment_on.svg" />
          ) : (
            <ThemeIcon src="/images/employment_off.svg" />
          )}
        </Theme>
      </Themes>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 35px; //IPHONE camera
  background-color: #fbfbfb;
  position: fixed;
`;

const Logo = styled.img`
  width: 35%;
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
