import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyTodoItem from "./MyTodoItem";
import {
  Loader,
  BottomNavBar,
  Header,
  UserImageProfile,
  BorderText,
  ThinText,
  Divider,
} from "../../global";
import { baseApiUrl } from "../../../constants";
import dayjs from "dayjs";

const MyPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState();
  const { name, email, image } = { ...localStorage };

  const setClassStatus = (plan) => {
    let status;
    plan.sessions.forEach((session) => {
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

  const SuccessTodos = plans?.filter((plan) => plan.status === true);
  const failTodos = plans?.filter((plan) => setClassStatus(plan) === "fail");
  const inProgressTodos = plans?.filter(
    (plan) => !plan.status && setClassStatus(plan) === "inprogress"
  );
  const classesInfo = [
    {
      status: "성공",
      identifier: "success",
      count: SuccessTodos?.length,
    },
    { status: "실패", identifier: "fail", count: failTodos?.length },
    {
      status: "진행",
      identifier: "inProgress",
      count: inProgressTodos?.length,
    },
  ];

  const handleDashboard = (status) => {
    navigate({
      pathname: "dashboard",
      search: `?status=${status}`,
    });
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const {
        data: { ownProducts },
      } = await axios.get(`${baseApiUrl}user?email=${email}`);
      setPlans(ownProducts);
      setLoading(false);
    };
    fetch();
  }, [email]);

  const formattedPlans = plans
    ?.sort((prev, next) => {
      return (
        new Date(prev.sessions[0].startDate) -
        new Date(next.sessions[0].startDate)
      );
    })
    ?.reverse();
  if (loading) {
    return <Loader />;
  }
  const handleSettingPage = () => {
    navigate("/settings");
  };
  return (
    <Wrapper>
      <Container>
        <Header image={"/images/Logo.png"} containerHeight="48px" />
        <ImageWrapper>
          <div style={{ width: "64px", height: "64px" }}>
            <UserImageProfile
              image={image}
              isProgress={!!plans}
              width="64px"
              height="64px"
              isShowSettingIcon={true}
              onClick={handleSettingPage}
            />
          </div>
          <BorderText
            width="auto"
            textAlign="center"
            fontSize="16px"
            lineHeight="24px"
            fontWeight="600"
            margin="8px 0 0 0 "
          >
            {name}
          </BorderText>
          <ThinText width="auto" textAlign="center">
            {email}
          </ThinText>
        </ImageWrapper>
        <ProgressInfo>
          {classesInfo.map((el) => {
            return (
              <Classes onClick={() => handleDashboard(el.identifier)}>
                <ClassStatus>
                  <ThinText width="auto" textAlign="center">
                    {el.status}&nbsp;클래스
                  </ThinText>
                </ClassStatus>
                <BorderText
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="28px"
                  textAlign="center"
                  color={el.status === "진행" ? "#6B47FD" : "#222222"}
                >
                  {el.count}
                </BorderText>
              </Classes>
            );
          })}
        </ProgressInfo>
        <Divider
          border="1px solid #ededed"
          maxWidth="100%"
          height="4px"
          margin="2px 0 4px 0"
        />
        <Body>
          {formattedPlans?.length > 0 &&
            formattedPlans?.map((plan, idx) => {
              const formattedStartDate = new Date(plan.sessions[0].startDate);
              const isSamePeriod =
                idx === 0
                  ? false
                  : dayjs(
                      formattedPlans[idx - 1]?.sessions[0].startDate
                    ).format("YYYY MM") ===
                    dayjs(formattedPlans[idx]?.sessions[0].startDate).format(
                      "YYYY MM"
                    );

              return (
                <Fragment key={plan.id}>
                  {!isSamePeriod && (
                    <div style={{ padding: "12px 0 8px 16px" }}>
                      <BorderText
                        width="auto"
                        fontWeight="500"
                        fontSize="16px"
                        lineHeight="24px"
                        textAlign="left"
                      >
                        {formattedStartDate.getFullYear()}년 &nbsp;
                        {formattedStartDate.getMonth() + 1}월
                      </BorderText>
                    </div>
                  )}
                  <MyTodoItem
                    productId={plan.productId}
                    status={setClassStatus(plan)}
                    id={formattedPlans.length - idx}
                    title={plan.title}
                    icon={plan.icon}
                  />
                </Fragment>
              );
            })}

          {formattedPlans?.length === 0 && (
            <MyClass>
              <BorderText
                width="auto"
                fontSize="20px"
                fontWeight="700"
                lineHeight="32px"
                textAlign="center"
              >
                아직 경험한 클래스가 없네요!
              </BorderText>
              <ThinText width="auto" textAlign="center">
                앞으로 클래스를 탐색하고 완료하면
              </ThinText>
              <ThinText width="auto" textAlign="center">
                여기에 표시되어요
              </ThinText>
            </MyClass>
          )}
        </Body>
      </Container>
      <BottomNavBar position={"MYPAGE"} />
    </Wrapper>
  );
};

const ClassStatus = styled.div`
  width: 100%;
  border-right: 1px solid #dbdbdb;
`;
const Wrapper = styled.div`
  padding-bottom: 63px;
`;
const Container = styled.div`
  height: 100%;
`;

const Body = styled.div`
  height: 100%;
  background-color: #fafaff;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
  width: 100%;
`;

const ProgressInfo = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  margin-top: 24px;
`;

const Classes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% / 3);
  height: 100%;
`;

const MyClass = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafaff;
  height: 80%;
`;

export default MyPage;
