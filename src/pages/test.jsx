import styled from "styled-components";

import { NextArrowButton, PreviousArrowButton } from "../mds/button";

const TestPage = () => {
  return (
    <Container>
      <NextArrowButton />
      <PreviousArrowButton />
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  width: 499px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 500px;
`;
