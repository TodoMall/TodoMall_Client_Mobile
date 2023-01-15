import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { changeColorBasedOnRemainingPeriod } from "../../../utils";
import { BorderText } from "../../global";
import { baseApiUrl } from "../../../constants";
import selectCheckBoxBasedOnPeriod from "../../../utils/SelectCheckBoxBasedOnPeriod";

const TodoBoxCard = ({
  title,
  session,
  productId,
  submit = false,
  end = false,
  check,
  setCheck,
}) => {
  const navigate = useNavigate();
  const [userId] = useState(localStorage.getItem("userid"));
  let expireDate = new Date(session.expireDate);
  const calculateTimeLeft = () => {
    expireDate.setDate(expireDate.getDate());
    expireDate.setHours(0);
    expireDate.setMinutes(0);
    expireDate.setSeconds(0);
    // replace unit smaller than day.
    // Ex.Mon Jan 09 2023 00:00:00 GMT+0900 (한국 표준시)
    const difference = expireDate - new Date();

    let timeLeft = {};

    if (difference <= 0) {
      timeLeft = {
        ended: true,
      };
    }

    if (difference > 0) {
      let remainHour = Math.floor(difference / (1000 * 60 * 60));
      let remainMin = Math.floor((difference / 1000 / 60) % 60);
      let remainSec = Math.floor((difference / 1000) % 60);
      timeLeft = {
        hours: remainHour >= 10 ? remainHour : "0" + remainHour.toString(),
        minutes: remainMin >= 10 ? remainMin : "0" + remainMin.toString(),
        seconds: remainSec >= 10 ? remainSec : "0" + remainSec.toString(),
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

  let FormattedExpireDate = Math.floor(
    (Date.parse(new Date(expireDate)) - Date.parse(new Date())) / 86400000
  );
  const handleTodoDetail = (todo) => {
    navigate(
      `/todo/${todo.id}/${session.id}/${session.plan_id}/detail/${todo.status}`
    );
  };
  const handleValidSession = () => {
    navigate(
      `/todo/${session.id}/${session.plan_id}/${session.title}/${productId}/submit`
    );
  };

  const deleteTodo = async () => {
    try {
      await axios.delete(`${baseApiUrl}user/product`, {
        data: {
          userId: userId,
          productId: session.plan_id,
        },
      });
      setCheck(!check);
      navigate("/todobox");
    } catch (error) {
      console.error(error);
    }
  };

  const checkBoxImgUrl = (status) => {
    if (!status) {
      //
    }
    return `images/TodoBoxCheckBox${status ? "On" : "Off"}.svg`;
  };

  const isEnded = end || curTime.ended;

  return (
    <Container>
      <BorderText
        width="auto"
        fontWeight="400"
        lineHeight="14px"
        color="#888888"
        margin="0 0 8px 0"
      >
        {title}
      </BorderText>
      <BorderText
        width="auto"
        fontWeight="700"
        fontSize="18px"
        lineHeight="20px"
        color="#222222"
      >
        {session.title}
      </BorderText>

      {submit ? (
        <DDayIcon
          background={changeColorBasedOnRemainingPeriod(
            FormattedExpireDate,
            false,
            submit,
            session.todos
          )}
        >
          <span>인증필요</span>
          <DDayText
            color={changeColorBasedOnRemainingPeriod(
              FormattedExpireDate,
              true,
              submit,
              [submit]
            )}
          >
            D-{FormattedExpireDate}
          </DDayText>
        </DDayIcon>
      ) : isEnded ? null : (
        <DDayIcon
          background={changeColorBasedOnRemainingPeriod(
            FormattedExpireDate,
            false,
            submit,
            session.todos
          )}
        >
          {FormattedExpireDate === 0 && (
            <TodoBoxCardHeaderTime>
              {curTime.hours}:{curTime.minutes}:{curTime.seconds}
            </TodoBoxCardHeaderTime>
          )}
          <BorderText
            width="auto"
            fontWeight="700"
            fontSize="16px"
            lineHeight="16px"
            color={changeColorBasedOnRemainingPeriod(FormattedExpireDate, true)}
          >
            D-{FormattedExpireDate}
          </BorderText>
        </DDayIcon>
      )}
      {isEnded ? (
        <TodoBoxCardBodyEnded>
          <Blurred>
            <TodoBoxCardBody>
              {session.todos.map((todo) => (
                <TodoBoxCardTodo onClick={handleTodoDetail} key={todo.id}>
                  <TodoBoxCardTodoLeft>
                    <TodoCheckBox
                      src={selectCheckBoxBasedOnPeriod(
                        FormattedExpireDate,
                        todo.status
                      )}
                      alt=""
                    />

                    <BorderText
                      width="auto"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="16px"
                    >
                      {todo.title}
                    </BorderText>
                  </TodoBoxCardTodoLeft>
                  <img src="images/todo_detail.svg" alt="" />
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
          {session.todos.map((todo) => (
            <TodoBoxCardTodo onClick={handleTodoDetail} key={todo.id}>
              <TodoBoxCardTodoLeft>
                <TodoCheckBox
                  src={selectCheckBoxBasedOnPeriod(
                    FormattedExpireDate,
                    todo.status
                  )}
                  alt=""
                />

                <BorderText
                  width="auto"
                  fontSize="16px"
                  lineHeight="16px"
                  margin="0 0 0 8px"
                  color={changeColorBasedOnRemainingPeriod(
                    FormattedExpireDate,
                    true,
                    todo.status,
                    session.todos
                  )}
                >
                  {todo.title}
                </BorderText>
              </TodoBoxCardTodoLeft>
              <img src="/images/arrow_icon.svg" alt="" />
            </TodoBoxCardTodo>
          ))}
        </TodoBoxCardBody>
      )}

      {isEnded ? (
        <>
          <BorderText
            width="auto"
            fontSize="14px"
            lineHeight="21px"
            color="#a9a9a9"
            textAlign="center"
            margin="0 0 8px 0"
          >
            데드라인 만료로 이후 수강권이 삭제됐어요
          </BorderText>
          <TodoBoxCardEndButton onClick={deleteTodo}>
            도전 삭제하기
          </TodoBoxCardEndButton>
        </>
      ) : submit ? (
        <TodoBoxCardSubmitButton onClick={handleValidSession}>
          세션 인증하러 가기
        </TodoBoxCardSubmitButton>
      ) : (
        <TodoBoxCardSubmitButton
          background="#C0C0C0"
          border="#C0C0C0"
          onClick={handleValidSession}
        >
          세션 인증하러 가기
        </TodoBoxCardSubmitButton>
      )}
    </Container>
  );
};
const TodoCheckBox = styled.img`
  width: 16px;
  height: 16px;
`;

const Container = styled.div`
  width: calc(100% - 32px);
  background: #ffffff;
  margin: 6px 0;
  padding: 16px;
  border-radius: 24px;
  padding-bottom: 0;
  position: relative;
`;

const TodoBoxCardHeaderTime = styled.p`
  position: absolute;
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #f65050;
  bottom: 24px;
`;

const DDayIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 66px;
  height: 24px;
  position: absolute;
  right: 25px;
  background: ${(props) => props.background};
  top: 36px;
  span {
    position: absolute;
    top: -20px;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgba(24, 144, 255, 1);
  }
`;

const DDayText = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => props.color};
`;

const TodoBoxCardBodyEnded = styled.div`
  width: 100%;
`;

const BlurredCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 37%;
  left: 33%;
`;

const Blurred = styled.div`
  filter: blur(20px);
  pointer-events: none;
`;

const BlurredTime = styled.p`
  padding: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #f65050;
`;

const BlurredBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 24px;
  background: #ffeded;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #f65050;
`;

const TodoBoxCardBody = styled.div`
  padding: 30px 0 16px 0;
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

const TodoBoxCardSubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const TodoBoxCardEndButton = styled.div`
  height: 52px;
  background: #f65050;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 10px;
`;

export default TodoBoxCard;
