import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Loader, BottomNavBar } from "../../global";
import TodoBoxContent from "./TodoBoxContent";
import TodoBoxHeader from "./TodoBoxHeader";

const TodoBox = () => {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [check, setCheck] = useState(false);
  const handlePlan = (plans) => {
    let temp_plans = [];
    plans.forEach((plan) => {
      let temp = {};
      let found = false;
      plan.sessions.forEach((data, i) => {
        if (found) {
          return;
        }
        if (data.status === false) {
          temp = { current_session: i + 1, ...data };
          found = true;
        }
      });
      if (Object.keys(temp).length > 0) {
        temp_plans.push({
          productId: plan.productId,
          plan_title: plan.title,
          plan_id: plan.id,
          total_session: plan.sessions.length,
          ...temp,
        });
      }
    });
    return temp_plans;
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user?email=${email}`
      );
      setPlans(handlePlan(response.data.ownProducts));
      setLoading(false);
    };
    fetch();
  }, [check]);

  return (
    <>
      <TodoBoxHeader length={plans?.length > 0 ? plans.length : 0} />
      {loading ? (
        <Loader />
      ) : (
        <TodoBoxBody>
          {plans?.length > 0 ? (
            <TodoBoxContent plans={plans} check={check} setCheck={setCheck} />
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
      )}

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
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TodoBoxEmptyImage = styled.img`
  width: 90vw;
  max-width: 450px;
`;

const TodoBoxEmptyWelcome = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 15px 0;
`;

const TodoBoxEmptyDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #888888;
`;

export default TodoBox;
