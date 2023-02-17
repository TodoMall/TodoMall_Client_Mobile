import styled from "styled-components";
import { CategoryTabBar } from "../mds/category";
import {
  SearchTab,
  MyCourseHeader,
  StoreHeader,
} from "../mds/layout/mobile/headers";

const TestPage = () => {
  return (
    <Container>
      <StoreHeader />
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  width: 390px;
  height: 90vh;
`;
