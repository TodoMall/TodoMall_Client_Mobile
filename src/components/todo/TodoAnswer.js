import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../global/Header";
import { Loader } from "../global";

const TodoAnswer = () => {
  const params = useParams();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products/todo?id=${params.todoid}`
      );
      setImage(response.data.basePractice);
      setLoading(false);
    };
    fetch();
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <TodoAnswerContainer>
        <TodoAnswerTitle>
          <span>{params.sessionname}</span>의 모범 예시에요
        </TodoAnswerTitle>
        <TodoAnswerDescription>
          모범 예시를 확인하고 나의 성취도를 확인해보세요
        </TodoAnswerDescription>
        <Wrapper>
          <a href={`${image}`}>
            <TodoAnswerImage src={`${image}`} />
          </a>
        </Wrapper>
      </TodoAnswerContainer>
    </>
  );
};

const TodoAnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 0 30px;
  padding-top: 60px;
`;

const TodoAnswerTitle = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 12px;
  color: #222222;
  span {
    color: #6b47fd;
  }
`;

const TodoAnswerDescription = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #929292;
`;

const Wrapper = styled.div`
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const TodoAnswerImage = styled.img`
  width: 90vw;
  max-width: 450px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default TodoAnswer;
