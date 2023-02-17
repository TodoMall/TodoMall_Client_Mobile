import styled from "styled-components";
import { SearchBar } from "../domain/store";
import Header from "../mds/layout/Header";

const TestPage = () => {
  return (
    <Container>
      <SearchBar />
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
  margin-top: 50px;
`;
