import { ConstructionOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "../../../api/axios";
import requests from "../../../api/request";

const TryDetail = () => {
  const params = useParams();
  const id = params.planid;

  useEffect(() => {
    const fetch = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${requests.getUserPlanList}${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          withCredentials: true,
        },
      });
      console.log(response);
    };
    fetch();
  }, []);

  return (
    <>
      {/* <Image src={image ? image : `/images/dummy_plan_image.png`} />
      <Container>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </Container> */}
    </>
  );
};

const Image = styled.img`
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Subtitle = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #c0c0c0;
  margin: 14px 0;
`;

const Title = styled.p`
  font-family: "PretendardMedium";
  font-size: 20px;
  margin-bottom: 10px;
`;

export default TryDetail;
