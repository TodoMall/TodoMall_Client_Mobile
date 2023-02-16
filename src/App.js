import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

// FIXME : should be deleted
import TestPage from "./pages/test";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<TestPage />} />
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
