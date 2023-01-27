import React, { useEffect, useState } from "react";
import BottomNavBar from "../../global/BottomNavBar";
import styled from "styled-components";
import CardList from "./CardList";
import Header from "./Header";
import axios from "axios";
import { Loader, Footer } from "../../global";
import { Tabs, Tab } from "@tarragon/swipeable-tabs";
import { baseApiUrl } from "../../../constants";

const TodoMall = ({ current, setCurrent }) => {
  const [careerData, setCareerData] = useState([]);
  const [selfData, setSelfData] = useState([]);
  const [investmentData, setInvestmentData] = useState([]);

  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    try {
      const [careerData, selfData, investmentData] = await Promise.all([
        axios.get(`${baseApiUrl}products/preview?type=career`),
        axios.get(`${baseApiUrl}products/preview?type=self`),
        axios.get(`${baseApiUrl}products/preview?type=investment`),
      ]);

      setCareerData(careerData.data);
      setSelfData(selfData.data);
      setInvestmentData(investmentData.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Container>
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
                <>
                  <CardList classData={careerData} />
                  <Footer />
                </>
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
                <>
                  <CardList classData={selfData} />
                  <Footer />
                </>
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
                <>
                  <CardList classData={investmentData} />
                  <Footer />
                </>
              )}
            </Body>
          </Tab>
        </Tabs>
      )}

      <BottomNavBar position={"TODOMALL"} />
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 56px;
`;
const Body = styled.div`
  background-color: #f6f8ff;
  padding-top: 100px;
`;

const BodyImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default TodoMall;
