import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Social = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isPersonal, isService } = { ...localStorage };

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
          localStorage.setItem("access", res.data.access_token);
          localStorage.setItem("refresh", res.data.refresh_token);
          localStorage.setItem("ID", res.data.id_token);
          axios
            .get("https://kapi.kakao.com/v2/user/me", {
              headers: {
                Authorization: `Bearer ${res.data.access_token}`,
              },
            })
            .then((res) => {
              let image_url =
                res.data.kakao_account.profile.profile_image_url.replace(
                  "http",
                  "https"
                );
              localStorage.setItem(
                "name",
                res.data.kakao_account.profile.nickname
              );
              localStorage.setItem("email", res.data.kakao_account.email);
              localStorage.setItem("image", image_url);
              axios
                .post(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user`, {
                  email: res.data.kakao_account.email,
                  image: image_url,
                  name: res.data.kakao_account.profile.nickname,
                })
                .then((res) => {
                  localStorage.setItem("userid", res.data.id);
                  if (isPersonal && isService) {
                    navigate("/todobox");
                  } else {
                    navigate("/agreement");
                  }
                })
                .catch((err) => {
                  const email = localStorage.getItem("email");
                  axios
                    .get(
                      `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user?email=${email}`
                    )
                    .then((res) => {
                      localStorage.setItem("userid", res.data.id);
                      if (isPersonal && isService) {
                        navigate("/todobox");
                      } else {
                        navigate("/agreement");
                      }
                    });
                });
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
