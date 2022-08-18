import React, { useState } from "react";
import BottomNavBar from "../../global/BottomNavBar";
import styled from "styled-components";
import CardList from "./CardList";
import Header from "./Header";

const TodoMall = () => {
  const [current, setCurrent] = useState("health");

  return (
    <>
      <Header current={current} setCurrent={setCurrent} />
      <Body>
        <BodyImages>
          <img
            src={`/images/${current}_title.svg`}
            style={{ width: "70%", height: 50, marginTop: 25 }}
            alt={`${current}_title`}
          />
          <img
            src={`/images/${current}_image.svg`}
            style={{ width: "80%", marginTop: 20 }}
            alt={`${current}_image`}
          />
        </BodyImages>
        <CardList />
      </Body>
      <BottomNavBar position={"TODOMALL"} />
    </>
  );
};

const Body = styled.div`
  background-color: #f6f8ff;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const BodyImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default TodoMall;
