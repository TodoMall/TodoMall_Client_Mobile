import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();

  return (
    <CardBox
      onClick={() => {
        navigate("/detail/1");
      }}
    >
      눌러서 디테일 페이지 테스트{" "}
    </CardBox>
  );
};

const CardBox = styled.div`
  width: 95%;
  height: 180px;
  border-radius: 16px;
  background-color: white;
  margin-bottom: 10px;
`;

export default Card;
