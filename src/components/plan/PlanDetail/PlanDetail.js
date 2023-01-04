import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlanFirst from "./PlanFirst";
import PlanIntro from "./PlanIntro";
import PlanSecond from "./PlanSecond";
import PlanThird from "./PlanThird";
import PlanCurriculum from "./PlanCurriculum";
import { useNavigate, useParams } from "react-router-dom";
import { MAX_WIDTH, baseApiUrl } from "../../../constants";
import { Layout, Divider, Loader } from "../../global";
import useAxios from "axios-hooks";

const PlanDetail = () => {
  const [isLogin] = useState(!!localStorage.getItem("access"));
  const email = localStorage.getItem("email");
  const [duplicate, setDuplicate] = useState(false);
  const navigate = useNavigate();
  const { planid: ID } = useParams();

  const sendToPurchasePage = () => {
    if (!isLogin) {
      navigate("/");
    }
    if (isLogin) {
      navigate(`/detail/purchase/${plan.id}/`);
    }
  };

  const [{ data: plan, loading: isLoading }] = useAxios(
    `${baseApiUrl}products?id=${ID}`
  );
  const [{ data: userProduct }] = useAxios(`${baseApiUrl}user?email=${email}`);

  const checkDuplicate = (data) => {
    const temp = data.filter(
      ({ productId, status }) => productId === ID && status === false
    );
    return temp.length > 0;
  };

  useEffect(() => {
    if (plan) {
      document.title = plan?.title;
    }
    if (userProduct) {
      setDuplicate(checkDuplicate(userProduct?.ownProducts));
    }
  }, [plan, userProduct]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Layout currentPage="결제하기">
        {isLoading ? (
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
            <PlanCurriculum sessions={plan.sessions} />
          </Body>
        )}

        <Footer>
          {duplicate ? (
            <BuyButton disabled>이미 도전중인 클래스입니다</BuyButton>
          ) : (
            <BuyButton onClick={sendToPurchasePage} id="download_button">
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
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #f1efff;
`;

export default PlanDetail;
