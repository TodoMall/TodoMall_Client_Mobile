import React, { useState } from "react";
import styled from "styled-components";
import { VERSION } from "../../constants";
import { useNavigate } from "react-router-dom";
import Modals from "./Modals";
import {
  CustomizedSwitche,
  BorderText,
  Divider,
  Header,
  ThinText,
  LoginModal,
} from "../global";
import { useModal } from "../../utils";

const Settings = () => {
  const navigate = useNavigate();
  const { isVisible, isGuest, handleVisibleState } = useModal();
  const [visibleLogout, setVisibleLogout] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const closeHandlerLogout = () => setVisibleLogout(false);
  const closeHandlerDelete = () => setVisibleDelete(false);
  const handlerLogout = () => setVisibleLogout(true);
  const handlerDelete = () => setVisibleDelete(true);

  const handleTermOfPersonal = () => navigate("/personal");
  const handleTermOfService = () => navigate("/service");
  const handleNotice = () => navigate("/notice");

  const CustomBorderText = ({ children, isWarning, border }) => {
    return (
      <BorderText
        width="auto"
        lineHeight="24px"
        fontWeight={border ? 700 : null}
        fontSize="16px"
        textAlign="left"
        color={isWarning ? "#FF4D4F" : "#222222"}
      >
        {children}
      </BorderText>
    );
  };

  return (
    <>
      <Header title="설정" />
      <Body>
        <LoginModal
          isVisible={isGuest && isVisible}
          onToggle={handleVisibleState}
        />
        <Row>
          <CustomBorderText
            lineHeight="24px"
            fontSize="16px"
            textAlign="left"
            color="#222222"
          >
            앱 버전
          </CustomBorderText>
          <ThinText fontSize="16px" lineHeight="24px" textAlign="right">
            {VERSION}
          </ThinText>
        </Row>
        <Divider margin="8px 0" border="1px solid #ededed" height="4px" />
        <Row>
          <CustomBorderText>마케팅 활용 / 광고성 정보 동의</CustomBorderText>
          <CustomizedSwitche onToggle={() => {}} />
        </Row>
        <Row onClick={handleNotice}>
          <CustomBorderText>공지사항</CustomBorderText>
          <DetailIcon />
        </Row>
        <a href="http://pf.kakao.com/_xhSxjExj/chat">
          <Row>
            <CustomBorderText>문의하기</CustomBorderText>
            <DetailIcon />
          </Row>
        </a>
        <Row onClick={handleTermOfService}>
          <CustomBorderText border={true}>이용약관</CustomBorderText>
          <DetailIcon />
        </Row>
        <Row onClick={handleTermOfPersonal}>
          <CustomBorderText border={true}>개인정보처리방침</CustomBorderText>
          <DetailIcon />
        </Row>
        {!isGuest && (
          <>
            <Divider margin="8px 0" border="1px solid #ededed" height="4px" />
            <Row onClick={handlerLogout}>
              <CustomBorderText>로그아웃</CustomBorderText>
              <DetailIcon />
            </Row>
            <Row onClick={handlerDelete}>
              <CustomBorderText isWarning={true}>탈퇴하기</CustomBorderText>
              <DetailIcon />
            </Row>
          </>
        )}{" "}
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  height: 52px;
`;

const DetailIcon = styled.img`
  content: url("/images/arrow_icon.svg");
`;

export default Settings;
