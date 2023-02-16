import styled from "styled-components";
import { PreviousArrowIcon, NextArrowIcon } from "../mds/icon";

const TestPage = () => {
  return (
    <Container>
      <PreviousArrowIcon />
      <NextArrowIcon />
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
