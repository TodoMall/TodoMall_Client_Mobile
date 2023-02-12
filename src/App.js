import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="" element={<></>} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: auto;
  height: 90vh;
`;

export default App;
