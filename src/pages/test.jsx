import styled from "styled-components";
import { SearchBar } from "../domain/store";
import Header from "../mds/layout/desktop/Header";
import BasicHeader from "../mds/layout/mobile/headers/BasicHeader";

const TestPage = () => {
  return (
    <Container>
      {/* <SearchBar /> */}
      <BasicHeader />
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  width: 390px;
  margin-top: 50px;
  border: 1px solid;
`;
