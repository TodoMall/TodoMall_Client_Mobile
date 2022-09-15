import React, { useState } from "react";
import styled from "styled-components";
import BottomNavBar from "../../global/BottomNavBar";
import TodoBoxContent from "./TodoBoxContent";
import TodoBoxHeader from "./TodoBoxHeader";

const TodoBox = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoBoxHeader />
      <TodoBoxBody>
        {todos?.length > 0 ? (
          <TodoBoxContent />
        ) : (
          <TodoBoxEmptyContainer>
            <TodoBoxEmptyImage src="/images/TodoBoxEmptyImage.svg" />
            <TodoBoxEmptyWelcome>
              아직 도전중인 클래스가 없네요!
            </TodoBoxEmptyWelcome>
            <TodoBoxEmptyDescription>
              클래스를 도전하게 되면
            </TodoBoxEmptyDescription>
            <TodoBoxEmptyDescription>
              여기에서 모아볼 수 있어요.
            </TodoBoxEmptyDescription>
          </TodoBoxEmptyContainer>
        )}
      </TodoBoxBody>
      <BottomNavBar position={"TODOBOX"} />
    </>
  );
};

const TodoBoxBody = styled.div``;

const TodoBoxEmptyContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  padding-bottom: 90px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TodoBoxEmptyImage = styled.img``;

const TodoBoxEmptyWelcome = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 15px 0;
`;

const TodoBoxEmptyDescription = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #888888;
`;

export default TodoBox;
