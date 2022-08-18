import React, { useEffect, useState } from "react";
import BottomNavBar from "../../global/BottomNavBar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import requests from "../../../api/request";
import Row from "./Row";
import Button from "../../global/Button";

const MyPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(requests.getUserPlanList, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      let temp = [];
      for (const [date, plans] of Object.entries(response.data)) {
        temp = [...temp, [date, plans]];
      }
      setPlans([...temp]);
    };
    fetch();
  }, []);

  return (
    <>
      <Container>
        <Header>
          <UserInfo>
            <ProfileImage src="/images/dummy_profile_image.png" />
            <User>
              <UserName>솔빈</UserName>
              <UserEmail>solbing@gmail.com</UserEmail>
            </User>
          </UserInfo>
          <Settings
            src="/images/settings.svg"
            onClick={() => {
              navigate("/settings");
            }}
          />
        </Header>

        <Body>
          {plans.length > 0 ? (
            plans.map((plan) => {
              let year = plan[0].split("-")[0];
              let month = plan[0].split("-")[1] * 1;
              console.log(year, month);
              return (
                <>
                  <PlanDate>
                    {year}년 {month}월
                  </PlanDate>
                  {plan[1].map((item) => (
                    <Row
                      key={item.id}
                      is_completed={item.is_completed}
                      id={item.id}
                      title={item.plan.title}
                      showDate={false}
                    />
                  ))}
                </>
              );
            })
          ) : (
            <NoPlan>
              <NoPlanImage src="/images/mypage_no_plan.svg" />
              <NoPlanTitle>
                솔빈님은 아직 도전 중인 클래스가 없어요.
              </NoPlanTitle>
              <NoPlanTitle>나에게 맞는 클래스를 찾아볼까요?</NoPlanTitle>
              <Button link="/todomall" title="클래스 찾아보기" />
            </NoPlan>
          )}
        </Body>
      </Container>
      <BottomNavBar position={"MYPAGE"} />
    </>
  );
};

const Container = styled.div``;

const Header = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px 10px 25px;
  background-color: white;
  width: 100vw;
  border-bottom: 2px solid #f1f3f5;
`;

const ProfileImage = styled.img`
  width: 50px;
`;

const UserInfo = styled.span`
  display: flex;
  align-items: center;
`;

const User = styled.div`
  margin-left: 15px;
`;

const UserName = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const UserEmail = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  margin-bottom: 5px;
  color: #c4c4c4;
`;

const Settings = styled.img`
  width: 50px;
`;

const Body = styled.div`
  height: calc(100vh - 36px - 50px);
  padding-top: 100px;
  overflow-y: scroll;
`;

const NoPlan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoPlanImage = styled.img`
  width: 80vw;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const NoPlanTitle = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: #888888;
`;

const PlanDate = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #dbdbdb;
  margin-left: 25px;
`;

export default MyPage;
