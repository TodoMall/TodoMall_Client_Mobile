import React, { useState } from "react";
import styled from "styled-components";

const TodoBoxHeader = ({ length }) => {
  const [name, setName] = useState(localStorage.getItem("name"));

  return (
    <>
      <TodoBoxHeaderContainer>
        <TodoBoxHeaderTry>{length}개 도전 중</TodoBoxHeaderTry>
        <TodoBoxHeaderName>힘내세요, {name}님!</TodoBoxHeaderName>
        <TodoBoxDivider />
      </TodoBoxHeaderContainer>
    </>
  );
};

const TodoBoxHeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  padding-top: 20px;
  padding-bottom: 10px;
  position: fixed;
  z-index: 10000;
  background-color: #fbfbfb;
`;

const TodoBoxHeaderName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #707070;
`;

const TodoBoxHeaderTry = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #000000;
  display: flex;
  align-items: center;
`;

const TodoBoxDivider = styled.hr`
  background-color: #f1f3f5;
  height: 2px;
  opacity: 30%;
  position: absolute;
  top: 70px;
  width: 100%;
  left: 0;
`;

export default TodoBoxHeader;
