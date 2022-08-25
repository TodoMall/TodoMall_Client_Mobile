import React from "react";
import styled from "styled-components";
import TodoBoxCard from "./TodoBoxCard";

const TodoBoxContent = () => {
  return (
    <TodoBoxContentContainer>
      <TodoBoxCard />
      <TodoBoxCard />
      <TodoBoxCard />
      <TodoBoxCard />
      <TodoBoxCard />
    </TodoBoxContentContainer>
  );
};

const TodoBoxContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  padding-bottom: 90px;
  gap: 20px;
`;

export default TodoBoxContent;
