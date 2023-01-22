import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Loader,
  BottomNavBar,
  Header,
  UserImageProfile,
  BorderText,
  ThinText,
  Divider,
  LoginModal,
} from "../../global";
import MyTodoItem from "./MyTodoItem";
import { baseApiUrl } from "../../../constants";
import { setProductStatus, productFilter, useModal } from "../../../utils";
import useAxios from "axios-hooks";
import dayjs from "dayjs";
import styled from "styled-components";

const MyPage = () => {
  const { name, email, image } = { ...localStorage };
  const navigate = useNavigate();
  const [products, setproducts] = useState();
  const [{ data, isLoading }] = useAxios(`${baseApiUrl}user?email=${email}`);
  const { SuccessProducts, failProducts, inProgressProducts } =
    productFilter(products);

  const { isVisible, isGuest, handleVisibleState } = useModal();

  const sortingProduct = (products) => {
    return products?.ownProducts
      ?.sort((prev, next) => {
        return dayjs(prev.sessions[0].startDate).diff(
          next.sessions[0].startDate
        );
      })
      ?.reverse();
  };

  const productInfo = [
    {
      id: 1,
      status: "성공",
      identifier: "success",
      count: SuccessProducts?.length,
    },
    {
      id: 2,
      status: "실패",
      identifier: "fail",
      count: failProducts?.length,
    },
    {
      id: 3,
      status: "진행",
      identifier: "inProgress",
      count: inProgressProducts?.length,
    },
  ];

  useEffect(() => {
    if (data) {
      const formattedProducts = sortingProduct(data);
      setproducts(formattedProducts);
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <LoginModal
        isVisible={isGuest && isVisible}
        onToggle={handleVisibleState}
      />
      <Container>
        <Header image={"/images/Logo.png"} containerHeight="48px" />
        <UserInfoContainer>
          <ImageWrapper>
            <UserImageProfile
              image={isGuest ? "/images/guest_profile.svg" : image}
              isProgress={!!products}
              width="64px"
              height="64px"
              isShowSettingIcon={true}
              onClick={handleSettingPage}
            />
          </ImageWrapper>
          <BorderText
            width="auto"
            textAlign="center"
            fontSize="16px"
            lineHeight="24px"
            fontWeight={isGuest ? "500" : "600"}
            margin="8px 0 0 0 "
          >
            {isGuest ? "로그인 후 이용해주세요" : name}
          </BorderText>
          <ThinText width="auto" textAlign="center">
            {isGuest ? "-" : email}
          </ThinText>
        </UserInfoContainer>
        <ProgressInfo>
          {productInfo.map((el) => {
            return (
              <Products
                key={el.id}
                onClick={() => handleDashboard(el.identifier)}
              >
                <ProductStatus>
                  <ThinText width="auto" textAlign="center">
                    {el.status}&nbsp;클래스
                  </ThinText>
                </ProductStatus>
                <BorderText
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="28px"
                  textAlign="center"
                  color={el.status === "진행" ? "#6B47FD" : "#222222"}
                >
                  {el.count || 0}
                </BorderText>
              </Products>
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
          {products?.length > 0 &&
            products?.map((product, idx) => {
              const formattedStartDate = new Date(
                product.sessions[0].startDate
              );

              const variablizeDate = (val) =>
                dayjs(products[val]?.sessions[0].startDate).format("YYYY MM");

              const isSamePeriod =
                idx === 0
                  ? false
                  : variablizeDate(idx - 1) === variablizeDate(idx);

              return (
                <Fragment key={product.id}>
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
                    productId={product.productId}
                    status={setProductStatus(product)}
                    id={products.length - idx}
                    title={product.title}
                    icon={product.icon}
                  />
                </Fragment>
              );
            })}

          {products?.length === 0 && (
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

const ProductStatus = styled.div`
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

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
`;

const ProgressInfo = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  margin-top: 24px;
`;

const Products = styled.div`
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
