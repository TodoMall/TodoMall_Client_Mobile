import React, { useState } from "react";
import Header from "../global/Header";
import styled from "styled-components";
import { VERSION } from "../../constants";
import Divider from "../global/Divider";
import { useNavigate } from "react-router-dom";
import Modals from "./Modals";

const Settings = () => {
  const navigate = useNavigate();

  const [visibleLogout, setVisibleLogout] = useState(false);
  const handlerLogout = () => setVisibleLogout(true);

  const closeHandlerLogout = () => {
    setVisibleLogout(false);
  };

  const [visibleDelete, setVisibleDelete] = useState(false);
  const handlerDelete = () => setVisibleDelete(true);

  const closeHandlerDelete = () => {
    setVisibleDelete(false);
  };

  return (
    <>
      <Header title="설정" />
      <Body>
        <Rows>
          <Row>
            <RowTitle>앱 버전</RowTitle>
            <DetailVersion>{VERSION}</DetailVersion>
          </Row>
        </Rows>
        <Divider width="100vw" />
        <Rows>
          <a href="http://pf.kakao.com/_xhSxjExj">
            <Row>
              <RowTitle>문의하기</RowTitle>
              <DetailIcon src={`/images/todo_detail.svg`} />
            </Row>
          </a>
          <Row
            onClick={() => {
              navigate("/service");
            }}
          >
            <RowTitle>이용약관</RowTitle>
            <DetailIcon src={`/images/todo_detail.svg`} />
          </Row>
          <Row
            onClick={() => {
              navigate("/personal");
            }}
          >
            <RowTitle>개인정보 처리방침</RowTitle>
            <DetailIcon src={`/images/todo_detail.svg`} />
          </Row>
        </Rows>
        <Divider width="100vw" />
        <Rows>
          <Row onClick={handlerLogout}>
            <RowTitle>로그아웃</RowTitle>
            <DetailIcon src={`/images/todo_detail.svg`} />
          </Row>
          <Row onClick={handlerDelete}>
            <RowTitle red>탈퇴하기</RowTitle>
            <DetailIcon src={`/images/todo_detail.svg`} />
          </Row>
        </Rows>
        <Modals
          visibleLogout={visibleLogout}
          visibleDelete={visibleDelete}
          closeHandlerLogout={closeHandlerLogout}
          closeHandlerDelete={closeHandlerDelete}
        />
      </Body>
    </>
  );
};

const Body = styled.div`
  padding-top: 50px;
`;

const Rows = styled.div`
  margin: 0px 5vw;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  height: 50px;
`;

const RowTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  color: ${(props) => (props.red ? "#EE7272" : "black")};
`;

const DetailVersion = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  color: #979797;
`;

const DetailIcon = styled.img``;

export default Settings;
