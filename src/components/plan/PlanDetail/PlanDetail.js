import React, { useEffect, useState } from "react";
import Header from "../../global/Header";
import styled from "styled-components";
import PlanFirst from "./PlanFirst";
import PlanIntro from "./PlanIntro";
import PlanSecond from "./PlanSecond";
import PlanThird from "./PlanThird";
import PlanCurriculum from "./PlanCurriculum";
import DummyData from "./dummydata.json";
import { useNavigate, useParams } from "react-router-dom";
import Divider from "../../global/Divider";
import axios from "axios";

const PlanDetail = () => {
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState();
  const navigate = useNavigate();

  const ID = useParams().planid;

  const fetch = async () => {
    await axios
      .get(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products?id=${ID}`)
      .then((res) => {
        // console.log(res.data);
        setPlan(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header title="" />
      <Body>
        <PlanIntro
          image={plan.image}
          subtitle={plan.subDescription}
          title={plan.title}
          smalltag={plan.tags}
          description={plan.description}
          creator_image={plan.creator.image}
          creator_name={plan.creatorName}
          creator_intro={plan.creator.description}
        />
        <Divider />
        <PlanFirst data={plan.expectIts[0]} />
        <Divider />
        <PlanSecond data={plan.recommends} />
        <Divider />
        <PlanThird data={plan.recommendUsers} />
        <Divider />
        <PlanCurriculum data={plan.sessions} />
      </Body>
      <Footer>
        <BuyButton
          onClick={() => {
            navigate(`/purchase/${plan.id}/`);
          }}
          id="download_button"
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
