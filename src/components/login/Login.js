import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    const access_token = localStorage.getItem("access");
    if (access_token) {
      axios
        .get("https://kapi.kakao.com/v1/user/access_token_info", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            const refresh_token = localStorage.getItem("refresh");
            axios
              .post(
                `https://kauth.kakao.com/oauth/token?grant_type=refresh_token&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&refresh_token=${refresh_token}`,
                {},
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                }
              )
              .then((res) => {
                localStorage.setItem("access", res.data.access_token);
                localStorage.setItem("ID", res.data.id_token);
                navigate("/todobox");
              })
              .catch((err) => {
                localStorage.clear();
              });
          } else {
            localStorage.clear();
          }
        })
        .catch((err) => {
          localStorage.clear();
        });
    }
  });

  const navigate = useNavigate();

  const kakaoLogin = () => {
    console.log(window.location.origin);

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  return (
    <Container>
      <BackgroundBottom src="/images/main_background.svg" />
      <Logo src="/images/logo_text.png" />
      <Footer>
        <LoginButton
          onClick={() => {
            kakaoLogin();
          }}
          src="/images/kakao_login.png"
        />
        {/* <LoginButton
          onClick={() => {
            getToken();
            navigate("/agreement");
          }}
          src="/images/google_login.png"
        /> */}
        {/* <LoginButton
        onClick={() => {
          navigate("/agreement");
        }}
        src="/images/apple_login.png"
      /> */}
      </Footer>
      <CompanyText
        onClick={() => {
          navigate("/personal");
        }}
      >
        c. MyPlanIt
      </CompanyText>
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

const BackgroundBottom = styled.img`
  position: fixed;
  width: 103vw;
  max-width: 450px;
  bottom: -50px;
`;

const Logo = styled.img`
  width: 220px;
  position: fixed;
  margin: 0 auto;
  bottom: 75%;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 5vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

const LoginButton = styled.img`
  width: 340px;
  margin-bottom: 16px;
  cursor: pointer;
  position: relative;
`;

const CompanyText = styled.p`
  position: fixed;
  bottom: 20px;
  left: 0;
  text-align: center;
  width: 100vw;
`;

export default Login;
