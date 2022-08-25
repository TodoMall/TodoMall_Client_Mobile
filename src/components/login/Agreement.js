import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../global/Header";

const Agreement = () => {
  const navigate = useNavigate();

  const [isServiceOn, setIsServiceOn] = useState(false);
  const [isPersonalOn, setIsPersonalOn] = useState(false);

  const TOGGLE_BUTTON_OFF = "/images/toggle_button_off.svg";
  const TOGGLE_BUTTON_ON = "/images/toggle_button_on.svg";

  return (
    <>
      <Header title="약관 동의" />
      <Body>
        <Text>
          <BodyText>서비스 이용을 위해</BodyText>
          <BodyText>필수 약관에 동의해주세요</BodyText>
        </Text>
        <BodyImage src="/images/agreement_image.svg" />
      </Body>
      <Footer>
        <Table>
          <Row>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {isServiceOn ? (
                <img
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setIsServiceOn(!isServiceOn);
                  }}
                  alt="TOGGLE_BUTTON_ON"
                  src={TOGGLE_BUTTON_ON}
                />
              ) : (
                <img
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setIsServiceOn(!isServiceOn);
                  }}
                  alt="TOGGLE_BUTTON_OFF"
                  src={TOGGLE_BUTTON_OFF}
                />
              )}
              <p style={{ color: "#6B47FD", marginRight: "5px" }}>(필수) </p>
              <p> 서비스 이용약관 동의</p>
            </span>
            <img
              onClick={() => {
                navigate("/service");
              }}
              src="/images/next_button.svg"
              alt="NEXT_BUTTON"
            />
          </Row>
          <hr style={{ opacity: 0.3 }} />
          <Row>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {isPersonalOn ? (
                <img
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setIsPersonalOn(!isPersonalOn);
                  }}
                  src={TOGGLE_BUTTON_ON}
                  alt="TOGGLE_BUTTON_ON"
                />
              ) : (
                <img
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setIsPersonalOn(!isPersonalOn);
                  }}
                  src={TOGGLE_BUTTON_OFF}
                  alt="TOGGLE_BUTTON_OFF"
                />
              )}
              <p style={{ color: "#6B47FD", marginRight: "5px" }}>(필수) </p>
              <p> 개인정보 처리방침 동의</p>
            </span>
            <img
              onClick={() => {
                navigate("/personal");
              }}
              src="/images/next_button.svg"
              alt="NEXT_BUTTON"
            />
          </Row>
        </Table>
        {isPersonalOn && isServiceOn ? (
          <Button
            onClick={() => {
              navigate("/todobox");
            }}
            src="/images/check_button_on.svg"
          />
        ) : (
          <Button src="/images/check_button_off.svg" />
        )}
      </Footer>
    </>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
`;

const Text = styled.div`
  flex-direction: column;
  margin-left: 5vw;
  margin-bottom: 5vh;
`;

const BodyText = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
  margin: 0;
  text-align: left;
`;

const BodyImage = styled.img`
  width: 80%;
  margin: auto;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

const Table = styled.div`
  width: 80%;
  margin-bottom: 30px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "PretendardMedium";
  margin: 10px;
`;

const Button = styled.img`
  width: 85%;
`;

export default Agreement;
