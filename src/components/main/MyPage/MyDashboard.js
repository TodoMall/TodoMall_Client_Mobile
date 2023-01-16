import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BottomNavBar, Header } from "../../global";
import styled from "styled-components";
import { baseApiUrl } from "../../../constants/env";
import MyTodoItem from "./MyTodoItem";
import dayjs from "dayjs";
import useAxios from "axios-hooks";

const MyDashboard = () => {
  const { email } = { ...localStorage };
  const [searchParams] = useSearchParams();
  const currentStatus = searchParams.get("status");
  const [plans, setPlans] = useState();
  const [{ data }] = useAxios(`${baseApiUrl}user?email=${email}`);

  const keywords = {
    success: "성공",
    fail: "실패",
    inProgress: "진행",
  };

  const setClassStatus = (plan) => {
    let status;
    plan.sessions.forEach((session) => {
      const expireDate = dayjs(session.expireDate).startOf("day");
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
    setPlans(data?.ownProducts);
  }, [data]);

  const SuccessPlans = plans?.filter((plan) => plan.status === true);
  const failPlans = plans?.filter((plan) => setClassStatus(plan) === "fail");
  const inProgressPlans = plans?.filter(
    (plan) => !plan.status && setClassStatus(plan) === "inprogress"
  );
  let formattedPlans;
  switch (true) {
    case keywords[currentStatus] === keywords.success:
      formattedPlans = SuccessPlans;
      break;

    case keywords[currentStatus] === keywords.fail:
      formattedPlans = failPlans;
      break;
    case keywords[currentStatus] === keywords.inProgress:
      formattedPlans = inProgressPlans;
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
  padding-bottom: 63px;
  background-color: #fafaff;
`;
const Container = styled.div`
  height: 100%;
  margin-top: 56px;
  background-color: #fafaff;
`;
export default MyDashboard;
