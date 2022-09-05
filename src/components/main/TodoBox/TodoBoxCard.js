import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoBoxCard = ({ submit = false, end = false }) => {
  // let submit = false;
  // let end = true;

  const navigate = useNavigate();

  return (
    <TodoBoxCardContainer>
      <TodoBoxCardHeader>
        <TodoBoxCardHeaderTitle>
          피그마로 앱 프로토타입 만들기
        </TodoBoxCardHeaderTitle>
        <TodoBoxCardHeaderSession>피그마 알아보기</TodoBoxCardHeaderSession>
        {submit ? (
          <TodoBoxCardHeaderDDaySubmit>
            <span>인증필요</span>
            <TodoBoxCardHeaderDDayTextSubmit>
              D-4
            </TodoBoxCardHeaderDDayTextSubmit>
          </TodoBoxCardHeaderDDaySubmit>
        ) : end ? null : (
          <TodoBoxCardHeaderDDay>
            <TodoBoxCardHeaderDDayText>D-4 일</TodoBoxCardHeaderDDayText>
          </TodoBoxCardHeaderDDay>
        )}
      </TodoBoxCardHeader>
      {end ? (
        <TodoBoxCardBodyEnded>
          <Blurred>
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
                  <TodoBoxCardTodoText>
                    새로운 프로젝트 시작하기
                  </TodoBoxCardTodoText>
                </TodoBoxCardTodoLeft>
                <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
              </TodoBoxCardTodo>
            </TodoBoxCardBody>
          </Blurred>
          <BlurredCover>
            <BlurredTime>0:00:00:00</BlurredTime>
            <BlurredBox>데드라인 만료</BlurredBox>
          </BlurredCover>
        </TodoBoxCardBodyEnded>
      ) : (
        <TodoBoxCardBody>
          <TodoBoxCardTodo
            onClick={() => {
              navigate("/todo/1/detail");
            }}
          >
            <TodoBoxCardTodoLeft>
              <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOn.svg" />
              <TodoBoxCardTodoText>피그마 회원가입하기</TodoBoxCardTodoText>
            </TodoBoxCardTodoLeft>
            <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
          </TodoBoxCardTodo>
          <TodoBoxCardTodo
            onClick={() => {
              navigate("/todo/1/detail");
            }}
          >
            <TodoBoxCardTodoLeft>
              <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOn.svg" />
              <TodoBoxCardTodoText>피그마 앱 설치하기</TodoBoxCardTodoText>
            </TodoBoxCardTodoLeft>
            <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
          </TodoBoxCardTodo>
          <TodoBoxCardTodo
            onClick={() => {
              navigate("/todo/1/detail");
            }}
          >
            <TodoBoxCardTodoLeft>
              <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOn.svg" />
              <TodoBoxCardTodoText>
                새로운 프로젝트 시작하기
              </TodoBoxCardTodoText>
            </TodoBoxCardTodoLeft>
            <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
          </TodoBoxCardTodo>
        </TodoBoxCardBody>
      )}

      {submit ? (
        <TodoBoxCardSubmitButton
          onClick={() => {
            navigate(`/todo/1/submit/`);
          }}
        >
          세션 인증하러 가기
        </TodoBoxCardSubmitButton>
      ) : end ? (
        <>
          <TodoBoxCardEndButton>도전 삭제하기</TodoBoxCardEndButton>
          <TodoBoxCardEndText>
            데드라인 만료로 이후 수강권이 삭제됐어요
          </TodoBoxCardEndText>
        </>
      ) : null}
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

const TodoBoxCardHeaderDDaySubmit = styled.div`
  background: #e1dcfe;
  border-radius: 4px;
  position: absolute;
  height: 24px;
  right: 25px;
  top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  span {
    position: absolute;
    top: -20px;
    font-family: "PretendardRegular";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #6b47fd;
  }
`;

const TodoBoxCardHeaderDDayText = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: #707070;
`;

const TodoBoxCardHeaderDDayTextSubmit = styled.p`
  font-family: "PretendardMedium";
  color: #6b47fd;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
`;

const TodoBoxCardBodyEnded = styled.div`
  width: 100%;
`;

const Blurred = styled.div`
  opacity: 7%;
`;

const BlurredCover = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  text-align: center;
`;

const BlurredTime = styled.p`
  padding: 5px;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #f65050;
`;

const BlurredBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 103px;
  height: 24px;
  background: #ffc6c6;
  border-radius: 4px;
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: #f65050;
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

const TodoBoxCardSubmitButton = styled.div`
  height: 50px;
  background: #6b47fd;
  border: 1px solid #6b47fd;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const TodoBoxCardEndButton = styled.div`
  height: 50px;
  background: #f65050;
  /* border: 1px solid #d10b0b; */
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const TodoBoxCardEndText = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #a9a9a9;
  text-align: center;
  margin-bottom: 15px;
`;

export default TodoBoxCard;
