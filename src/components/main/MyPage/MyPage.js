import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
import { setClassStatus, classFilter } from "../../../utils";
import useAxios from "axios-hooks";
import dayjs from "dayjs";

// TODO https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in

const MyPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState();
  const [loading, setLoading] = useState(true);
  const { name, email, image } = { ...localStorage };
  const [{ data }] = useAxios(`${baseApiUrl}user?email=${email}`);
  const { SuccessClass, failClass, inProgressClass } = classFilter(plans);
  const classesInfo = [
    {
      id: 1,
      status: "성공",
      identifier: "success",
      count: SuccessClass?.length,
    },
    { id: 2, status: "실패", identifier: "fail", count: failClass?.length },
    {
      id: 3,
      status: "진행",
      identifier: "inProgress",
      count: inProgressClass?.length,
    },
  ];

  useEffect(() => {
    if (data) {
      const formattedPlans = data?.ownProducts
        ?.sort((prev, next) => {
          return dayjs(prev.sessions[0].startDate).diff(
            next.sessions[0].startDate
          );
        })
        ?.reverse();
      setPlans(formattedPlans);
      setLoading(false);
    }
  }, [data]);

  const handleDashboard = (status) => {
    navigate({
      pathname: "dashboard",
      search: `?status=${status}`,
    });
  };

  const handleSettingPage = () => {
    navigate("/settings");
  };

  if (loading) {
    return <Loader />;
  }

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
              <Classes
                key={el.id}
                onClick={() => handleDashboard(el.identifier)}
              >
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
          {plans?.length > 0 &&
            plans?.map((plan, idx) => {
              const formattedStartDate = new Date(plan.sessions[0].startDate);

              const variablizeDate = (val) =>
                dayjs(plans[val]?.sessions[0].startDate).format("YYYY MM");

              const isSamePeriod =
                idx === 0
                  ? false
                  : variablizeDate(idx - 1) === variablizeDate(idx);

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
                    id={plans.length - idx}
                    title={plan.title}
                    icon={plan.icon}
                  />
                </Fragment>
              );
            })}

          {plans?.length === 0 && (
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
