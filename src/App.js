import "./App.css";
import React, { useEffect } from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import styled from "styled-components";

import { LandingPage, OnboardingPage } from "./pages";
import { getMaxWidth } from "./utils/width";
import { COLOR, PATH } from "./constants";

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
        maxWidth={getMaxWidth()}
    >
      <Routes>
        <Route path={PATH.MAIN} element={<LandingPage />} />
        <Route path={PATH.ONBOARDING} element={<OnboardingPage />} />
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
