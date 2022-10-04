import React, { useEffect, useState } from "react";
import BottomNavBar from "../../global/BottomNavBar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Row from "./Row";
import { Loader } from "../../global/Loader";

const MyPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [image, setImage] = useState();

  const checkFail = (plan) => {
    let check = false;
    plan.sessions.forEach((session) => {
      if (check) {
        return;
      }
      if (!session.endedDate) {
        if (new Date(session.expireDate) < new Date()) {
          check = true;
        }
      }
    });
    return check;
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user?email=${email}`
      );
      setPlans(response.data.ownProducts.reverse());
      setImage(localStorage.getItem("image"));
      console.log(response.data);
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <Header>
          <UserInfo>
            <ProfileImage src={image} alt={image} />
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
          {plans?.length > 0 ? (
            plans.map((plan, i) => {
              return (
                <Row
                  key={plan.id}
                  is_failed={checkFail(plan)}
                  is_completed={plan.status}
                  id={plans.length - i}
                  title={plan.title}
                  icon={plan.icon}
                />
              );
            })
          ) : (
            <NoPlan>
              <NoPlanImage src="/images/mypage_no_plan.svg" />
              <NoPlanTitle>아직 경험한 클래스가 없네요!</NoPlanTitle>
              <NoPlanSubtitle>앞으로 클래스를 탐색하고 완료하면</NoPlanSubtitle>
              <NoPlanSubtitle>여기에 표시되어요.</NoPlanSubtitle>
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
  object-fit: cover;
`;

const UserInfo = styled.span`
  display: flex;
  align-items: center;
`;

const User = styled.div`
  margin-left: 15px;
`;

const UserName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const UserEmail = styled.p`
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

export default MyPage;
