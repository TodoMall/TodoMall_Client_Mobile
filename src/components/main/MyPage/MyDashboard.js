import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BottomNavBar, Header } from "../../global";
import styled from "styled-components";
import axios from "axios";
import { baseApiUrl } from "../../../constants/env";
import MyTodoItem from "./MyTodoItem";
import dayjs from "dayjs";

const MyDashboard = () => {
  const { email } = { ...localStorage };
  const [searchParams] = useSearchParams();
  const [plans, setPlans] = useState();
  const keywords = {
    success: "성공",
    fail: "실패",
    inProgress: "진행",
  };
  const setClassStatus = (plan) => {
    let status;
    plan.sessions.forEach((session, idx) => {
      let expireDate = dayjs(session.expireDate).startOf("day");
      const currentDate = dayjs().startOf("day");
      const deadLine = expireDate - currentDate > 0;
      if (plan.status) {
        status = "success";
      }
      if (!plan.status && deadLine) {
        status = "inprogress";
      }
      if (!plan.status && !deadLine) {
        status = "fail";
      }
    });
    return status;
  };

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { ownProducts },
      } = await axios.get(`${baseApiUrl}user?email=${email}`);
      setPlans(ownProducts);
    };
    fetch();
  }, [email]);

  const currentStatus = searchParams.get("status");
  const SuccessTodos = plans?.filter((plan) => plan.status === true);
  const failTodos = plans?.filter((plan) => setClassStatus(plan) === "fail");
  const inProgressTodos = plans?.filter(
    (plan) => !plan.status && setClassStatus(plan) === "inprogress"
  );
  let formattedPlans;
  switch (true) {
    case keywords[currentStatus] === keywords.success:
      formattedPlans = SuccessTodos;
      break;

    case keywords[currentStatus] === keywords.fail:
      formattedPlans = failTodos;
      break;
    case keywords[currentStatus] === keywords.inProgress:
      formattedPlans = inProgressTodos;
      break;
    default:
  }

  return (
    <Wrapper>
      <Container>
        <Header title={`${keywords[currentStatus]} 클래스`} />
        {formattedPlans?.reverse().map((plan, idx) => {
          return (
            <MyTodoItem
              key={plan.id}
              status={setClassStatus(plan)}
              id={plans.length - idx}
              title={plan.title}
              icon={plan.icon}
              productId={plan.productId}
            />
          );
        })}
      </Container>
      <BottomNavBar position={"MYPAGE"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding-bottom: 63px;
  background-color: #fafaff;
`;
const Container = styled.div`
  height: 100%;
  margin-top: 56px;
  background-color: #fafaff;
`;
export default MyDashboard;
