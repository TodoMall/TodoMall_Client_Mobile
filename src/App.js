import "./App.css";
import React, { useEffect } from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import styled from "styled-components";

// FIXME : should be deleted
import { CustomApolloProvider } from "./apollo/link";
import { LandingPage, OnboardingPage, LoginPage, AgreementPage } from "./pages";
import { getMaxWidth } from "./utils/width";
import { COLOR, PATH } from "./constants";

function App() {
  const location = useLocation();

  const getBackgroundColor = () => {
    if (location.pathname.includes("onboarding") || location.pathname.includes("login")) {
      return COLOR.BRAND_COLOR;
    }
    return COLOR.WHITE;
  }

  useEffect(() => {
    document.body.style.backgroundColor = getBackgroundColor();
  },[location.pathname])

  return (
      <CustomApolloProvider>
        <Container
            maxWidth={getMaxWidth()}
        >
          <Routes>
            <Route path={PATH.MAIN} element={<LandingPage />} />
            <Route path={PATH.ONBOARDING} element={<OnboardingPage />} />
            <Route path={PATH.LOGIN} element={<LoginPage />} />
            <Route path={PATH.AGREEMENT} element={<AgreementPage />} />
          </Routes>
        </Container>
      </CustomApolloProvider>
  );
}

const Container = styled.div`
  max-width: ${props => props.maxWidth};
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export default App;
