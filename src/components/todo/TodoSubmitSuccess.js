import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../global/Header";

const TodoSubmitSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title="" />
      <TodoSubmitSuccessBody>
        <TodoSubmitSuccessTitle>
          클래스가 성공적으로 추가됐어요 데드라인 내에 미션 인증을 잊지 마세요
        </TodoSubmitSuccessTitle>

        <TodoSubmitSuccessSubtitle>
          시간 내에 완수해야 클래스의 다음 세션을 계속 들을 수 있어요. 12시부터
          데드라인이 시작될 거예요.
        </TodoSubmitSuccessSubtitle>
        <TodoSubmitSuccessImage src="/images/todo_submit_success.svg" />
      </TodoSubmitSuccessBody>
      <TodoSubmitSuccessFooter>
        <TodoSUbmitSuccessButton
          onClick={() => {
            navigate("/todobox");
          }}
        >
          내 투두함으로 이동
        </TodoSUbmitSuccessButton>
      </TodoSubmitSuccessFooter>
    </>
  );
};

const TodoSubmitSuccessBody = styled.div`
  padding: 0 20px;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TodoSubmitSuccessTitle = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  color: #222222;
`;

const TodoSubmitSuccessSubtitle = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
  margin-top: 10px;
`;

const TodoSubmitSuccessImage = styled.img`
  width: 308px;
  height: 308px;
  margin-top: 20px;
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

const TodoSUbmitSuccessButton = styled.div`
  width: 327px;
  height: 52px;
  background: #6b47fd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;

export default TodoSubmitSuccess;
