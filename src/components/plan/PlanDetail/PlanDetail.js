import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlanFirst from "./PlanFirst";
import PlanIntro from "./PlanIntro";
import PlanSecond from "./PlanSecond";
import PlanThird from "./PlanThird";
import PlanCurriculum from "./PlanCurriculum";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MAX_WIDTH } from "../../../constants";
import { Layout, Divider, Loader, Header } from "../../global";

const PlanDetail = () => {
  const [isLogin] = useState(!!localStorage.getItem("access"));
  const [duplicate, setDuplicate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState();
  const navigate = useNavigate();

  const ID = useParams().planid;

  const sendToPaymentPage = () => {
    if (!isLogin) {
      navigate("/");
    }
    if (isLogin) {
      navigate(`/payment/${plan.id}/`);
    }
  };
  const fetch = async () => {
    await axios
      .get(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products?id=${ID}`)
      .then((res) => {
        setPlan(res.data);
        setLoading(false);
        document.title = res.data.title;
      });
    const email = localStorage.getItem("email");
    const response = await axios.get(
      `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user?email=${email}`
    );
    setDuplicate(checkDuplicate(response.data.ownProducts));
  };

  const checkDuplicate = (data) => {
    const temp = data.filter(
      (data) => data.productId === ID && data.status === false
    );
    if (temp.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fetch();

    return () => {
      document.title = "TodoMall";
    };
  }, []);

  return (
    <Container>
      <Layout breadCrumbs="결제하기">
        {loading ? (
          <Loader />
        ) : (
          <Body>
            <PlanIntro
              image={plan.image}
              subtitle={plan.subDescription}
              title={plan.title}
              smalltag={plan.informationTags}
              largetag={plan.summarizedTags}
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
        )}

        <Footer>
          {duplicate ? (
            <BuyButton disabled>이미 도전중인 클래스입니다</BuyButton>
          ) : (
            <BuyButton onClick={sendToPaymentPage} id="download_button">
              클래스 도전하기
            </BuyButton>
          )}
        </Footer>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;
  max-width: ${MAX_WIDTH};
`;

const Footer = styled.div`
  display: flex;
  padding-bottom: 20px;
  bottom: 0;
  background: #fbfbfb;
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 90px;
  align-items: center;
  justify-content: center;
`;

const BuyButton = styled.div`
  background: ${(props) => (props.disabled ? "#A9A9A9" : "#6b47fd")};
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
