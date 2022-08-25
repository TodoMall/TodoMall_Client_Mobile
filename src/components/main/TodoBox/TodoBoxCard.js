import React from "react";
import styled from "styled-components";

const TodoBoxCard = () => {
  return (
    <TodoBoxCardContainer>
      <TodoBoxCardHeader>
        <TodoBoxCardHeaderTitle>
          피그마로 앱 프로토타입 만들기
        </TodoBoxCardHeaderTitle>
        <TodoBoxCardHeaderSession>피그마 알아보기</TodoBoxCardHeaderSession>
        <TodoBoxCardHeaderDDay>
          <TodoBoxCardHeaderDDayText>D-4 일</TodoBoxCardHeaderDDayText>
        </TodoBoxCardHeaderDDay>
      </TodoBoxCardHeader>
      <TodoBoxCardBody>
        <TodoBoxCardTodo>
          <TodoBoxCardTodoLeft>
            <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOn.svg" />
            <TodoBoxCardTodoText>피그마 회원가입하기</TodoBoxCardTodoText>
          </TodoBoxCardTodoLeft>
          <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
        </TodoBoxCardTodo>
        <TodoBoxCardTodo>
          <TodoBoxCardTodoLeft>
            <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOn.svg" />
            <TodoBoxCardTodoText>피그마 앱 설치하기</TodoBoxCardTodoText>
          </TodoBoxCardTodoLeft>
          <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
        </TodoBoxCardTodo>
        <TodoBoxCardTodo>
          <TodoBoxCardTodoLeft>
            <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOn.svg" />
            <TodoBoxCardTodoText>새로운 프로젝트 시작하기</TodoBoxCardTodoText>
          </TodoBoxCardTodoLeft>
          <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
        </TodoBoxCardTodo>
      </TodoBoxCardBody>
    </TodoBoxCardContainer>
  );
};

const TodoBoxCardContainer = styled.div`
  width: 90%;
  background: #f7f7f7;
  border-radius: 24px;
  padding: 30px;
  padding-bottom: 0;
  position: relative;
`;

const TodoBoxCardHeader = styled.div``;

const TodoBoxCardHeaderTitle = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #9e9e9e;
  margin-bottom: 10px;
`;

const TodoBoxCardHeaderSession = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;

const TodoBoxCardHeaderDDay = styled.div`
  background: #dddddd;
  border-radius: 4px;
  position: absolute;
  height: 24px;
  right: 25px;
  top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

const TodoBoxCardHeaderDDayText = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: #707070;
`;

const TodoBoxCardBody = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const TodoBoxCardTodoLeft = styled.div`
  display: flex;
`;

const TodoBoxCardTodo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoBoxCardTodoCheckBox = styled.img``;

const TodoBoxCardTodoText = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #9e9e9e;
  margin-left: 10px;
`;

const TodoBoxCardTodoDetail = styled.img``;

export default TodoBoxCard;
