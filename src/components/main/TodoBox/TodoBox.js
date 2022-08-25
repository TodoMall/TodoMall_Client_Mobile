import React from "react";
import BottomNavBar from "../../global/BottomNavBar";
import TodoBoxHeader from "./TodoBoxHeader";

const TodoBox = () => {
  return (
    <>
      <TodoBoxHeader />
      <BottomNavBar position={"TODOBOX"} />
    </>
  );
};

export default TodoBox;
