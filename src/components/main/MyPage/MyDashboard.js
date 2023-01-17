import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BottomNavBar, Header } from "../../global";
import styled from "styled-components";
import { baseApiUrl } from "../../../constants";
import MyTodoItem from "./MyTodoItem";
import useAxios from "axios-hooks";
import { classFilter, setClassStatus } from "../../../utils";

const MyDashboard = () => {
  const { email } = { ...localStorage };
  const [searchParams] = useSearchParams();
  const currentStatus = searchParams.get("status");
  const [plans, setPlans] = useState();
  const [{ data }] = useAxios(`${baseApiUrl}user?email=${email}`);

  const classStatus = {
    success: "성공",
    fail: "실패",
    inProgress: "진행",
  };

  const { SuccessClass, failClass, inProgressClass } = classFilter(
    data?.ownProducts
  );

  let formattedPlans;
  switch (true) {
    case classStatus[currentStatus] === classStatus.success:
      formattedPlans = SuccessClass;
      break;

    case classStatus[currentStatus] === classStatus.fail:
      formattedPlans = failClass;
      break;
    case classStatus[currentStatus] === classStatus.inProgress:
      formattedPlans = inProgressClass;
      break;
    default:
  }

  useEffect(() => {
    if (data) {
      setPlans(data?.ownProducts);
    }
  }, [data]);

  return (
    <Wrapper>
      <Container>
        <Header title={`${classStatus[currentStatus]} 클래스`} />
        {formattedPlans?.reverse().map((plan, idx) => {
          return (
            <MyTodoItem
              key={plan.id}
              status={setClassStatus(plan)}
              id={plans?.length - idx}
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
