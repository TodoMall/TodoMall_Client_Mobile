import React, { useEffect, useState } from "react";
import BottomNavBar from "../../global/BottomNavBar";
import styled from "styled-components";
import CardList from "./CardList";
import Header from "./Header";
import { CAREER } from "./Constant";
import axios from "axios";
import { Loader } from "../../global/Loader";

const TodoMall = () => {
  const [current, setCurrent] = useState(CAREER);
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    const response = await axios(
      `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products/preview?type=${current}`
    );
    console.log(response);
    const data = response.data;
    setClassData(data);
    setLoading(false);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 100);
  };

  useEffect(() => {
    getUserInfo();
  }, [current]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header current={current} setCurrent={setCurrent} />
      <Body>
        <BodyImages>
          <img
            src={`/images/${current}_title.svg`}
            style={{ width: "280px", height: 50, marginTop: 25 }}
            alt={`${current}_title`}
          />
          <img
            src={`/images/${current}_image.svg`}
            // src={`/images/todomall_image.svg`}
            style={{ width: "100vw", maxWidth: "450px", marginTop: 20 }}
            alt={`${current}_image`}
          />
        </BodyImages>
        {classData.length === 0 ? <></> : <CardList classData={classData} />}
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
