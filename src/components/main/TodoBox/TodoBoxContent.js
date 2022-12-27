import React from "react";
import styled from "styled-components";
import TodoBoxCard from "./TodoBoxCard";

const handleSession = (session) => {
  let temp = [];
  if (Object.keys(session).length > 0) {
    session.todos.forEach((todo) => {
      if (todo.status === false) {
        temp.push(todo);
      }
    });
  }
  return temp;
};

const TodoBoxContent = ({ plans, check, setCheck }) => {
  return (
    <TodoBoxContentContainer>
      {plans.map((plan) => {
        if (Date.now() >= Date.parse(plan.expireDate)) {
          return (
            <TodoBoxCard
              title={plan.plan_title}
              session={plan}
              id={plan.id}
              productId={plan.productId}
              end={true}
              key={plan.id}
              check={check}
              setCheck={setCheck}
            />
          );
        } else {
          if (handleSession(plan).length === 0) {
            return (
              <TodoBoxCard
                title={plan.plan_title}
                session={plan}
                id={plan.id}
                productId={plan.productId}
                submit={true}
                key={plan.id}
                check={check}
                setCheck={setCheck}
              />
            );
          } else {
            return (
              <TodoBoxCard
                title={plan.plan_title}
                id={plan.id}
                productId={plan.productId}
                session={plan}
                key={plan.id}
                check={check}
                setCheck={setCheck}
              />
            );
          }
        }
      })}
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
