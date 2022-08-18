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
          src={`/images/todo_buy.svg`}
          onClick={() => {
            navigate("/purchase/1/");
          }}
        />
      </Footer>
    </>
  );
};

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const BuyButton = styled.img`
  margin-bottom: 25px;
`;

export default PlanDetail;
