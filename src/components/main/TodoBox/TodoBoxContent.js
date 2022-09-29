import React from "react";
import styled from "styled-components";
import PlanIntro from "../../plan/PlanDetail/PlanIntro";
import TodoBoxCard from "./TodoBoxCard";

const handlePlan = (plan) => {
  // console.log(plan);
  let temp = {};
  plan.sessions.forEach((data) => {
    // console.log(data);
    if (data.status === false) {
      temp = data;
    }
  });
  return temp;
};

const TodoBoxContent = ({ plans }) => {
  console.log(plans);
  return (
    <TodoBoxContentContainer>
      {plans.map((plan) => {
        let temp = handlePlan(plan);
        console.log(temp);
        if (temp === {}) {
          return (
            <TodoBoxCard
              title={plan.title}
              session={temp}
              id={plan.id}
              submit={true}
              key={plan.id}
            />
          );
        } else {
          return (
            <TodoBoxCard
              title={plan.title}
              id={plan.id}
              session={temp}
              key={plan.id}
            />
          );
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
