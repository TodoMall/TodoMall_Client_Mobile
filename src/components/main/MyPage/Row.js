import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Row = ({ is_completed, id, title, showDate, date }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container
        onClick={() => {
          navigate(`/try/${id}`);
        }}
      >
        <Icon
          src={
            is_completed
              ? `/images/mypage_plan_finished.svg`
              : `/images/dummy_plan_icon.svg`
          }
        />
        <Detail>
          <Tries>{id}번째 도전</Tries>
          <Title>{title}</Title>
        </Detail>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 5vw;
`;

const Icon = styled.img`
  width: 44px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  gap: 5px;
`;

const Tries = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #a9a9a9;
`;

const Title = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
`;

export default Row;
