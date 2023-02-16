import styled from "styled-components";

import { Footer } from "../mds/layout";

const TestPage = () => {
  return (
    <Container>
      <Footer />
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
