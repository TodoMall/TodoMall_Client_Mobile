import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlanFirst from "./PlanFirst";
import PlanIntro from "./PlanIntro";
import PlanSecond from "./PlanSecond";
import PlanThird from "./PlanThird";
import PlanCurriculum from "./PlanCurriculum";
import { useNavigate, useParams } from "react-router-dom";
import { MAX_WIDTH, baseApiUrl } from "../../../constants";
import { Layout, Divider, Loader, LoginModal } from "../../global";
import { useModal } from "../../../utils";
import useAxios from "axios-hooks";

const PlanDetail = () => {
  const { access, email } = { ...localStorage };
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isLogin] = useState(Boolean(access));
  const [duplicate, setDuplicate] = useState(false);
  const [{ data: product, loading: isLoading }] = useAxios(
    `${baseApiUrl}products?id=${productId}`
  );
  const [{ data: userProduct }] = useAxios(`${baseApiUrl}user?email=${email}`);

  const sendToPurchasePage = () => {
    if (!isLogin) {
      navigate("/");
    }
    if (isLogin) {
      navigate(`/detail/purchase/${productId}/`);
    }
  };
  const { isVisible, isGuest, handleVisibleState } = useModal(false);

  const checkDuplicate = (data) => {
    const duplicatedProduct = data.filter(
      (product) => product.productId === productId && product.status === false
    );
    return duplicatedProduct.length > 0;
  };

  useEffect(() => {
    if (product) {
      document.title = product?.title;
    }
    if (userProduct) {
      setDuplicate(checkDuplicate(userProduct?.ownProducts));
    }
  }, [product, userProduct]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      {isVisible && (
        <LoginModal
          isVisible={isVisible && isGuest}
          onToggle={handleVisibleState}
        />
      )}
      <Layout currentPage={product?.title}>
        {isLoading ? (
          <Loader />
        ) : (
          <Body>
            <PlanIntro
              image={product.image}
              subtitle={product.subDescription}
              title={product.title}
              smalltag={product.informationTags}
              largetag={product.summarizedTags}
              description={product.description}
              creator_image={product.creator.image}
              creator_name={product.creatorName}
              creator_intro={product.creator.description}
            />
            <Divider />
            <PlanFirst data={product.expectIts[0]} />
            <Divider />
            <PlanSecond data={product.recommends} />
            <Divider />
            <PlanThird data={product.recommendUsers} />
            <Divider />
            <PlanCurriculum sessions={product.sessions} />
          </Body>
        )}

        <Footer>
          {duplicate && (
            <BuyButton disabled>이미 도전중인 클래스입니다</BuyButton>
          )}
          {!isGuest && !duplicate && (
            <BuyButton onClick={sendToPurchasePage}>클래스 도전하기</BuyButton>
          )}
          {isGuest && (
            <BuyButton onClick={handleVisibleState}>클래스 도전하기</BuyButton>
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
