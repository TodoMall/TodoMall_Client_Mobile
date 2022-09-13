import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Social = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  useEffect(() => {
    const fetchCode = async () => {
      await axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        )
        .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("access", res.data.access_token);
          localStorage.setItem("refresh", res.data.refresh_token);
          localStorage.setItem("ID", res.data.id_token);
          axios
            .get("https://kapi.kakao.com/v2/user/me", {
              headers: {
                Authorization: `Bearer ${res.data.access_token}`,
              },
            })
            .then((res) => {
              console.log(res);
              sessionStorage.setItem(
                "name",
                res.data.kakao_account.profile.nickname
              );
              sessionStorage.setItem("email", res.data.kakao_account.email);
              sessionStorage.setItem(
                "image",
                res.data.kakao_account.profile.profile_image_url
              );
              navigate("/todobox");
            });
        });
    };
    fetchCode();
  });

  return (
    <Container>
      <LoadingImage src="/images/icon.png" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const LoadingImage = styled.img`
  width: 50vw;
`;

export default Social;
