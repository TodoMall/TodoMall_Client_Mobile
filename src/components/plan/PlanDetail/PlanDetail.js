import React, { useState } from "react";
import Header from "../../global/Header";
import styled from "styled-components";
import PlanFirst from "./PlanFirst";
import PlanIntro from "./PlanIntro";
import PlanSecond from "./PlanSecond";
import PlanThird from "./PlanThird";
import PlanCurriculum from "./PlanCurriculum";
import DummyData from "./dummydata.json";
import { useNavigate } from "react-router-dom";
import Divider from "../../global/Divider";

const PlanDetail = () => {
  const [plan, setPlan] = useState(DummyData);
  const navigate = useNavigate();
  return (
    <>
      <Header title="" />
      <Body>
        <PlanIntro
          image={plan.main_img}
          subtitle={plan.subtitle}
          title={plan.title}
          smalltag={plan.tags}
          category={plan.category}
          level={plan.level}
          price={plan.price}
          description={plan.description}
          creator_image={plan.creator.profile_image}
          creator_name={plan.creator.name}
          creator_intro={plan.creator.intro}
        />
        <Divider />
        <PlanFirst data={plan.content[0]} />
        <Divider />
        <PlanSecond data={plan.content[1]} />
        <Divider />
        <PlanThird data={plan.recommended_for} />
        <Divider />
        <PlanCurriculum data={plan.sessions} />
      </Body>
      <Footer>
        <BuyButton
          onClick={() => {
            navigate("/purchase/1/");
          }}
        >
          무료로 도전하기
        </BuyButton>
      </Footer>
    </>
  );
};

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 90px;
`;

const Footer = styled.div`
  display: flex;
  position: fixed;
  padding-bottom: 20px;
  bottom: 0;
  background: #fbfbfb;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: center;
`;

const BuyButton = styled.div`
  background: #6b47fd;
  border-radius: 20px;
  max-width: 380px;
  width: 90%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #f1efff;
`;

export default PlanDetail;
