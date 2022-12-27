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
          id="category_job_developement"
        >
          {current === CAREER ? (
            <ThemeIcon
              id="category_job_developement"
              src={`/images/${CAREER}_on.svg`}
            />
          ) : (
            <ThemeIcon
              id="category_job_developement"
              src={`/images/${CAREER}_off.svg`}
            />
          )}
        </Theme>
        <Theme
          onClick={() => {
            setCurrent(SELF);
          }}
          style={current === SELF ? { borderBottom: "2px solid black" } : {}}
          id="category_self_improvement"
        >
          {current === SELF ? (
            <ThemeIcon
              id="category_self_improvement"
              src={`/images/${SELF}_on.svg`}
            />
          ) : (
            <ThemeIcon
              id="category_self_improvement"
              src={`/images/${SELF}_off.svg`}
            />
          )}
        </Theme>
        <Theme
          onClick={() => {
            setCurrent(INVESTMENT);
          }}
          style={
            current === INVESTMENT ? { borderBottom: "2px solid black" } : {}
          }
          id="category_finance"
        >
          {current === INVESTMENT ? (
            <ThemeIcon
              id="category_finance"
              src={`/images/${INVESTMENT}_on.svg`}
            />
          ) : (
            <ThemeIcon
              id="category_finance"
              src={`/images/${INVESTMENT}_off.svg`}
            />
          )}
        </Theme>
      </Themes>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px;
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
  width: 33%;
  text-align: center;
  align-self: flex-end;
`;

const ThemeIcon = styled.img`
  margin-bottom: 10px;
`;

export default Header;
