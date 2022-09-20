import React, { useEffect, useState } from "react";
import BottomNavBar from "../../global/BottomNavBar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import requests from "../../../api/request";
import Row from "./Row";

const MyPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [image, setImage] = useState(localStorage.getItem("image"));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(image);
    const fetch = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user?email=${email}`
      );
      console.log(response);
      setPlans(response.data.ownProducts);
      setLoading(false);
      // let temp = [];
      // for (const [date, plans] of Object.entries(response.data)) {
      //   temp = [...temp, [date, plans]];
      // }
      // setPlans([...temp]);
    };
    fetch();
  }, []);

  if (loading) {
    return <div>Loading . . .</div>;
  }

  return (
    <>
      <Container>
        <Header>
          <UserInfo>
            <ProfileImage src={image} />
            <User>
              <UserName>{name}</UserName>
              <UserEmail>{email}</UserEmail>
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
          <PlanDate>
            {0}년 {0}월
          </PlanDate>
          {plans.length > 0 ? (
            plans.map((plan, i) => (
              <Row
                key={plan.id}
                is_completed={plan.status}
                id={plans.length - i}
                title={plan.title}
              />
            ))
          ) : (
            <NoPlan>
              <NoPlanImage src="/images/mypage_no_plan.svg" />
              <NoPlanTitle>아직 경험한 클래스가 없네요!</NoPlanTitle>
              <NoPlanSubtitle>앞으로 클래스를 탐색하고 완료하면</NoPlanSubtitle>
              <NoPlanSubtitle>여기에 표시되어요.</NoPlanSubtitle>
              {/* <Button link="/todomall" title="클래스 찾아보기" width="70" /> */}
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
  background-color: #fbfbfb;
  width: 100vw;
  border-bottom: 2px solid #f1f3f5;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const UserInfo = styled.span`
  display: flex;
  align-items: center;
`;

const User = styled.div`
  margin-left: 15px;
`;

const UserName = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const UserEmail = styled.p`
  /* font-family: "PretendardMedium"; */
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
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NoPlanImage = styled.img`
  width: 90vw;
  max-width: 450px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const NoPlanTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin-bottom: 15px;
`;

const NoPlanSubtitle = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #888888;
`;

const PlanDate = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #dbdbdb;
  margin-left: 25px;
`;

export default MyPage;
