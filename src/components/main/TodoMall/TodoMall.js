import React, { useEffect, useState } from "react";
import BottomNavBar from "../../global/BottomNavBar";
import styled from "styled-components";
import CardList from "./CardList";
import Header from "./Header";
import axios from "axios";
import { Loader } from "../../global/Loader";
import { Tabs, Tab } from "@tarragon/swipeable-tabs";

const TodoMall = ({ current, setCurrent }) => {
  const [careerData, setCareerData] = useState([]);
  const [selfData, setSelfData] = useState([]);
  const [investmentData, setInvestmentData] = useState([]);

  const [loading, setLoading] = useState(true);

  const getCareerData = axios.get(
    `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products/preview?type=career`
  );

  const getSelfData = axios.get(
    `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products/preview?type=self`
  );

  const getInvestmentData = axios.get(
    `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products/preview?type=investment`
  );

  const getUserInfo = () => {
    axios.all([getCareerData, getSelfData, getInvestmentData]).then(
      axios.spread((car, sel, inv) => {
        setCareerData(car.data);
        setSelfData(sel.data);
        setInvestmentData(inv.data);
        setLoading(false);
      })
    );
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Header current={current} setCurrent={setCurrent} />
      {loading ? (
        <Loader />
      ) : (
        <Tabs
          value={current}
          onChange={(updatedTab) => {
            setCurrent(updatedTab.label);
          }}
          tabBarCSS={`display: none`}
          // blacklistedElement={{
          //   identifierType: "id",
          //   identifierName: "category-img",
          // }}
        >
          <Tab label="career" key={0}>
            <Body>
              <BodyImages>
                <img
                  src={`/images/${current}_title.svg`}
                  style={{ width: "280px", height: 50, marginTop: 25 }}
                  alt={`${current}_title`}
                  id="category-img"
                />
                <img
                  src={`/images/${current}_image.svg`}
                  style={{ width: "100vw", maxWidth: "450px", marginTop: 20 }}
                  alt={`${current}_image`}
                  id="category-img"
                />
              </BodyImages>
              {careerData.length === 0 ? (
                <></>
              ) : (
                <CardList classData={careerData} />
              )}
            </Body>
          </Tab>
          <Tab label="self" key={1}>
            <Body>
              <BodyImages>
                <img
                  src={`/images/self_title.svg`}
                  style={{ width: "280px", height: 50, marginTop: 25 }}
                  alt={`self_title`}
                  id="category-img"
                />
                <img
                  src={`/images/self_image.svg`}
                  style={{ width: "100vw", maxWidth: "450px", marginTop: 20 }}
                  alt={`self_image`}
                  id="category-img"
                />
              </BodyImages>
              {selfData.length === 0 ? (
                <></>
              ) : (
                <CardList classData={selfData} />
              )}
            </Body>
          </Tab>
          <Tab label="investment" key={2}>
            <Body>
              <BodyImages>
                <img
                  src={`/images/investment_title.svg`}
                  style={{ width: "280px", height: 50, marginTop: 25 }}
                  alt={`investment_title`}
                  id="category-img"
                />
                <img
                  src={`/images/investment_image.svg`}
                  style={{ width: "100vw", maxWidth: "450px", marginTop: 20 }}
                  alt={`investment_image`}
                  id="category-img"
                />
              </BodyImages>
              {investmentData.length === 0 ? (
                <></>
              ) : (
                <CardList classData={investmentData} />
              )}
            </Body>
          </Tab>
        </Tabs>
      )}

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
