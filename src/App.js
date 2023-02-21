import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

// FIXME : should be deleted
import TestPage from "./pages/test";
import { CustomApolloProvider } from "./apollo/link";
import LoginPage from "./pages/LoginPage";
import { PATH } from "./constants";

function App() {

  return (
      <CustomApolloProvider>
        <Container>
          <Routes>
            <Route path={PATH.MAIN} element={<TestPage />} />
            <Route path={PATH.LOGIN} element={<LoginPage />} />
          </Routes>
        </Container>
      </CustomApolloProvider>
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
