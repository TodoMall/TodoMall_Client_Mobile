import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RedirectByAuthStatus } from "../../utils";
import Header from "../global/Header";

const TodoSubmitSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title="" />
      <RedirectByAuthStatus />
      <TodoSubmitSuccessBody>
        <TodoSubmitSuccessTitle>
          인증이 성공적으로 진행되었어요!
        </TodoSubmitSuccessTitle>
        <TodoSubmitSuccessTitle>
          다음 세션도 투두몰과 함께 해요
        </TodoSubmitSuccessTitle>
        <TodoSubmitSuccessSubtitle>
          시간 내에 완수해야 클래스의 다음 세션을 계속 들을 수 있어요.
        </TodoSubmitSuccessSubtitle>
        <TodoSubmitSuccessImage src="/images/todo_submit_success.svg" />
      </TodoSubmitSuccessBody>
      <TodoSubmitSuccessFooter>
        <TodoSubmitSuccessButton
          onClick={() => {
            navigate("/todobox");
          }}
        >
          내 투두함으로 이동
        </TodoSubmitSuccessButton>
      </TodoSubmitSuccessFooter>
    </>
  );
};

const TodoSubmitSuccessBody = styled.div`
  padding: 0 20px;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TodoSubmitSuccessTitle = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #222222;

  text-align: left;
`;

const TodoSubmitSuccessSubtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
  margin-top: 10px;
`;

const TodoSubmitSuccessImage = styled.img`
  position: fixed;
  width: 90vw;
  max-width: 450px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TodoSubmitSuccessFooter = styled.div`
  position: fixed;
  background-color: #fbfbfb;
  width: 100%;
  bottom: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoSubmitSuccessButton = styled.div`
  width: 327px;
  height: 52px;
  background: #6b47fd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;

export default TodoSubmitSuccess;
