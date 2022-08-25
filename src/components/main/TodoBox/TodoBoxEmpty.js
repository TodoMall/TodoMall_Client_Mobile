import React from "react";
import styled from "styled-components";

const TodoBoxEmpty = () => {
  return (
    <TodoBoxEmptyContainer>
      <TodoBoxEmptyImage src="/images/TodoBoxEmptyImage.svg" />
      <TodoBoxEmptyWelcome>투두물에 오신걸 환영해요</TodoBoxEmptyWelcome>
      <TodoBoxEmptyDescription>
        도전 중인 클래스를 여기에서 모아볼 수 있어요.
      </TodoBoxEmptyDescription>
      <TodoBoxEmptyDescription>
        나에게 맞는 클래스를 찾아볼까요?
      </TodoBoxEmptyDescription>
      <TodoBoxEmptyButton>클래스 찾아보기</TodoBoxEmptyButton>
    </TodoBoxEmptyContainer>
  );
};

const TodoBoxEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoBoxEmptyImage = styled.img``;

const TodoBoxEmptyWelcome = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
  margin: 20px 0;
`;

const TodoBoxEmptyDescription = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #888888;
`;

const TodoBoxEmptyButton = styled.button`
  width: 211px;
  height: 52px;
  background: #6b47fd;
  border: 1px solid #6b47fd;
  border-radius: 30px;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  margin-top: 35px;
`;

export default TodoBoxEmpty;
