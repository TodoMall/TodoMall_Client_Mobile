import styled from "styled-components";
import { Layout } from "../mds/layout";

const TestPage = () => {
  return (
    <Container>
      <Layout>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </Layout>
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
