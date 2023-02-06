import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_TYPE, LOCAL_STORAGE_KEYS, PATH } from "../../constants/";

const Login = () => {
  const removeTokenStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ID);
  };

  useEffect(() => {
    const access_token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS);
    if (access_token && access_token !== USER_TYPE.GUEST) {
      axios
        .get("https://kapi.kakao.com/v1/user/access_token_info", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            const refresh_token = localStorage.getItem(
              LOCAL_STORAGE_KEYS.REFRESH
            );
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
                localStorage.setItem(
                  LOCAL_STORAGE_KEYS.ACCESS,
                  res.data.access_token
                );
                localStorage.setItem(LOCAL_STORAGE_KEYS.ID, res.data.id_token);
                navigate(PATH.TODOBOX);
              })
              .catch((err) => {
                removeTokenStorage();
              });
          } else {
            removeTokenStorage();
          }
        })
        .catch((err) => {
          removeTokenStorage();
        });
    }
  });

  const navigate = useNavigate();
  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  const handleGuest = () => {
    localStorage.clear();
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS, USER_TYPE.GUEST);
    navigate("/todomall");
    navigate(PATH.TODOMALL);
  };

  return (
    <Container>
      <BackgroundBottom />
      <Logo />
      <Footer>
        <LoginButton onClick={kakaoLogin} />
        <GuestAnchor onClick={handleGuest}>게스트 둘러보기</GuestAnchor>
      </Footer>
      <CompanyText>c. myplanit</CompanyText>
    </Container>
  );
};

const GuestAnchor = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.01em;
  text-decoration-line: underline;
  color: #222222;
  cursor: pointer;
`;

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
  content: url("/images/main_background.svg");
`;

const Logo = styled.img`
  width: 220px;
  position: fixed;
  margin: 0 auto;
  bottom: 75%;
  content: url("/images/logo_text.png");
`;

const Footer = styled.div`
  position: fixed;
  bottom: 5vh;
  margin-bottom: 48px;
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
  margin-bottom: 24px;
  cursor: pointer;
  position: relative;
  content: url("/images/kakao_login.png");
`;

const CompanyText = styled.p`
  width: 100vw;
  text-align: center;
  position: fixed;
  bottom: 34px;
  left: 0;
`;

export default Login;
