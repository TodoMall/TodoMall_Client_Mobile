import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoBoxCard = ({
  title,
  session,
  id,
  submit = false,
  end = false,
  check,
  setCheck,
}) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem("userid"));
  const calculateTimeLeft = () => {
    let expireDate = new Date(session.expireDate);
    expireDate.setDate(expireDate.getDate() + 1);
    expireDate.setHours(0);
    expireDate.setMinutes(0);
    expireDate.setSeconds(0);
    const difference = expireDate - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours:
          Math.floor(difference / (1000 * 60 * 60)) >= 10
            ? Math.floor(difference / (1000 * 60 * 60))
            : "0" + Math.floor(difference / (1000 * 60 * 60)).toString(),
        minutes:
          Math.floor((difference / 1000 / 60) % 60) >= 10
            ? Math.floor((difference / 1000 / 60) % 60)
            : "0" + Math.floor((difference / 1000 / 60) % 60).toString(),
        seconds:
          Math.floor((difference / 1000) % 60) >= 10
            ? Math.floor((difference / 1000) % 60)
            : "0" + Math.floor((difference / 1000) % 60).toString(),
      };
    } else {
      timeLeft = {
        ended: true,
      };
    }
    return timeLeft;
  };

  const [curTime, setCurTime] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setCurTime(calculateTimeLeft());
    }, 1000);
  });

  if (Object.keys(session).length > 0) {
    return (
      <TodoBoxCardContainer>
        <TodoBoxCardHeader>
          <TodoBoxCardHeaderTitle>{title}</TodoBoxCardHeaderTitle>
          <TodoBoxCardHeaderSession>{session.title}</TodoBoxCardHeaderSession>
          {submit ? (
            <TodoBoxCardHeaderDDaySubmit>
              <span>인증필요</span>
              <TodoBoxCardHeaderDDayTextSubmit>
                D-
                {Math.floor(
                  (Date.parse(new Date(session.expireDate)) -
                    Date.parse(new Date())) /
                    86400000
                )}
              </TodoBoxCardHeaderDDayTextSubmit>
            </TodoBoxCardHeaderDDaySubmit>
          ) : end || curTime.ended ? null : (
            <TodoBoxCardHeaderDDay
              day={Math.floor(
                (Date.parse(new Date(session.expireDate)) -
                  Date.parse(new Date())) /
                  86400000
              )}
            >
              {Math.floor(
                (Date.parse(new Date(session.expireDate)) -
                  Date.parse(new Date())) /
                  86400000
              ) === 0 && (
                <TodoBoxCardHeaderTime>
                  {curTime.hours}:{curTime.minutes}:{curTime.seconds}
                </TodoBoxCardHeaderTime>
              )}
              <TodoBoxCardHeaderDDayText
                day={Math.floor(
                  (Date.parse(new Date(session.expireDate)) -
                    Date.parse(new Date())) /
                    86400000
                )}
              >
                D-
                {Math.floor(
                  (Date.parse(new Date(session.expireDate)) -
                    Date.parse(new Date())) /
                    86400000
                )}
              </TodoBoxCardHeaderDDayText>
            </TodoBoxCardHeaderDDay>
          )}
        </TodoBoxCardHeader>
        {end || curTime.ended ? (
          <TodoBoxCardBodyEnded>
            <Blurred>
              <TodoBoxCardBody>
                {session.todos.map((todo) => (
                  <TodoBoxCardTodo
                    onClick={() => {
                      // if (!todo.status)
                      navigate(
                        `/todo/${todo.id}/${session.id}/${session.plan_id}/detail/${todo.status}`
                      );
                    }}
                    key={todo.id}
                  >
                    <TodoBoxCardTodoLeft>
                      {todo.status ? (
                        <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOn.svg" />
                      ) : (
                        <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOff.svg" />
                      )}

                      <TodoBoxCardTodoText status={todo.status}>
                        {todo.title}
                      </TodoBoxCardTodoText>
                    </TodoBoxCardTodoLeft>
                    <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
                  </TodoBoxCardTodo>
                ))}
              </TodoBoxCardBody>
            </Blurred>
            <BlurredCover>
              <BlurredTime>0:00:00:00</BlurredTime>
              <BlurredBox>데드라인 만료</BlurredBox>
            </BlurredCover>
          </TodoBoxCardBodyEnded>
        ) : (
          <TodoBoxCardBody>
            {session?.todos.map((todo) => (
              <TodoBoxCardTodo
                onClick={() => {
                  // if (!todo.status)
                  navigate(
                    `/todo/${todo.id}/${session.id}/${session.plan_id}/detail/${todo.status}`
                  );
                }}
                key={todo.id}
              >
                <TodoBoxCardTodoLeft>
                  {todo.status ? (
                    <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOn.svg" />
                  ) : (
                    <TodoBoxCardTodoCheckBox src="images/TodoBoxCheckBoxOff.svg" />
                  )}

                  <TodoBoxCardTodoText status={todo.status}>
                    {todo.title}
                  </TodoBoxCardTodoText>
                </TodoBoxCardTodoLeft>
                <TodoBoxCardTodoDetail src="images/todo_detail.svg" />
              </TodoBoxCardTodo>
            ))}
          </TodoBoxCardBody>
        )}

        {submit ? (
          <TodoBoxCardSubmitButton
            onClick={() => {
              navigate(
                `/todo/${session.id}/${session.plan_id}/${session.title}/submit`
              );
            }}
          >
            ({session.current_session}/{session.total_session}) 세션 인증하러
            가기
          </TodoBoxCardSubmitButton>
        ) : end || curTime.ended ? (
          <>
            <TodoBoxCardEndButton
              onClick={() => {
                axios
                  .delete(
                    `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user/product`,
                    {
                      data: {
                        userId: userId,
                        productId: session.plan_id,
                      },
                    }
                  )
                  .then(() => {
                    setCheck(!check);
                    navigate("/todobox");
                  });
              }}
            >
              도전 삭제하기
            </TodoBoxCardEndButton>
            <TodoBoxCardEndText>
              데드라인 만료로 이후 수강권이 삭제됐어요
            </TodoBoxCardEndText>
          </>
        ) : null}
      </TodoBoxCardContainer>
    );
  }
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
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #9e9e9e;
  margin-bottom: 10px;
`;

const TodoBoxCardHeaderSession = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;

const TodoBoxCardHeaderDDay = styled.div`
  background: ${(props) => (props.day === 0 ? "#FFC6C6" : "#dddddd")};
  border-radius: 4px;
  position: absolute;
  height: 24px;
  right: 25px;
  top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

const TodoBoxCardHeaderTime = styled.p`
  position: absolute;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #f65050;
  bottom: 30px;
`;

const TodoBoxCardHeaderDDaySubmit = styled.div`
  background: ${(props) => (props.day === 0 ? "#FFC6C6" : "#e1dcfe")};
  border-radius: 4px;
  position: absolute;
  height: 24px;
  right: 25px;
  top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  span {
    position: absolute;
    top: -20px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #6b47fd;
  }
`;

const TodoBoxCardHeaderDDayText = styled.p`
  position: relative;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => (props.day === 0 ? "#F65050" : "#707070")};
`;

const TodoBoxCardHeaderDDayTextSubmit = styled.p`
  color: ${(props) => (props.day === 0 ? "#F65050" : "#6b47fd")};
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
  /* font-family: "PretendardRegular"; */
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
  /* font-family: "PretendardMedium"; */
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
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => (props.status ? "#9e9e9e" : "#6B47FD")};
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
  /* font-family: "PretendardRegular"; */
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
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const TodoBoxCardEndText = styled.p`
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #a9a9a9;
  text-align: center;
  margin-bottom: 15px;
`;

export default TodoBoxCard;
