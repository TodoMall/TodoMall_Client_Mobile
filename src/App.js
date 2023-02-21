import "./App.css";
import React, {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import styled from "styled-components";

import {LandingPage} from "./pages";
import OnBoardingPage from "./pages/onboarding/Onboarding";
import { isLaptop, isTablet } from "./utils/width";
import {COLOR} from "./constants";

function App() {
  const location = useLocation();

  const getBackgroundColor = () => {
    if (location.pathname.includes("onboarding")) {
      return COLOR.BRAND_COLOR;
    }
    return COLOR.WHITE;
  }

  useEffect(() => {
    document.body.style.backgroundColor = getBackgroundColor();
  },[location.pathname])

  return (
    <Container
        maxWidth={isLaptop() ? "1024px" : isTablet() ? "768px" : "100%"}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding/1" element={<Onboarding1 />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  max-width: ${props => props.maxWidth};
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export default App;
