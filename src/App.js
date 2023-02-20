import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import {LandingPage, Onboarding1} from "./pages";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding/1" element={<Onboarding1 />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* FIXME : should be delete */
  display: flex;
  justify-content: center;
`;

export default App;
