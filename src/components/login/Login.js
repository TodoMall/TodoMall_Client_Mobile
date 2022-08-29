import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/request";

const Login = () => {
  const navigate = useNavigate();

  const getToken = async () => {
    const request = await axios.get(requests.testLogin, {
      "Content-Type": "application/x-www-form-urlencoded",
    });
    localStorage.setItem("token", request.data.token);
  };

  return (
    <Container>
      <Logo src="/images/logo_text.svg" />
      <LoginImage src="/images/login_image.svg" />
      <LoginButton
        onClick={() => {
          getToken();
          navigate("/agreement");
        }}
        src="/images/kakao_login.svg"
      />
      <LoginButton
        onClick={() => {
          getToken();
          navigate("/agreement");
        }}
        src="/images/google_login.svg"
      />
      {/* <LoginButton
        onClick={() => {
          navigate("/agreement");
        }}
        src="/images/apple_login.png"
      /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
`;

const Logo = styled.img`
  width: 190px;
  margin-top: 40px;
  margin-bottom: 44px;
`;

const LoginImage = styled.img`
  width: 328px;
  margin-bottom: 85px;
`;

const LoginButton = styled.img`
  width: 327px;
  margin-bottom: 16px;
  /* border-radius: 15px; */
`;

export default Login;
