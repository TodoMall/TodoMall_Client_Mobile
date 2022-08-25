import React, { useState } from "react";
import styled from "styled-components";
import BottomNavBar from "../../global/BottomNavBar";
import TodoBoxContent from "./TodoBoxContent";
import TodoBoxEmpty from "./TodoBoxEmpty";
import TodoBoxHeader from "./TodoBoxHeader";

const TodoBox = () => {
  const [todos, setTodos] = useState([1, 2, 3, 4]);

  return (
    <>
      <TodoBoxHeader />
      <TodoBoxBody>
        {todos?.length > 0 ? <TodoBoxContent /> : <TodoBoxEmpty />}
      </TodoBoxBody>
      <BottomNavBar position={"TODOBOX"} />
    </>
  );
};

const TodoBoxBody = styled.div``;

export default TodoBox;
