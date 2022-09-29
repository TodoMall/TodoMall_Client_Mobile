import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Row = ({ is_completed, is_failed, id, title, icon }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container
      // onClick={() => {
      //   navigate(`/try/${id}`);
      // }}
      >
        <RowLeft>
          <IconBackground>
            <Icon src={`${icon}`} />
          </IconBackground>
          <Detail>
            <Tries>{id}번째 도전</Tries>
            <Title>{title}</Title>
          </Detail>
        </RowLeft>
        <Progress
          src={
            is_failed
              ? `/images/mypage_plan_failed.svg`
              : is_completed
              ? `/images/mypage_plan_finished.svg`
              : `/images/mypage_plan_inprogress.svg`
          }
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5vw;
`;

const RowLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconBackground = styled.div`
  background: #f3f3f3;
  border-radius: 50px;
`;

const Icon = styled.img`
  width: 44px;
`;

const Progress = styled.img`
  margin-right: 1rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
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
