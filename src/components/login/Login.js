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
      <Logo src="/images/logo_text.png" />
      <LoginImage src="/images/login_image.svg" />
      <LoginButton
        onClick={() => {
          getToken();
          navigate("/agreement");
        }}
        src="/images/kakao_login.png"
      />
      <LoginButton
        onClick={() => {
          navigate("/agreement");
        }}
        src="/images/google_login.png"
      />
      <LoginButton
        onClick={() => {
          navigate("/agreement");
        }}
        src="/images/apple_login.png"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 60%;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const LoginImage = styled.img`
  width: 90%;
  margin-bottom: 40px;
`;

const LoginButton = styled.img`
  width: 85%;
  margin-bottom: 5px;
`;

export default Login;
