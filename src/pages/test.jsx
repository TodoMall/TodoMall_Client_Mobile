import styled from "styled-components";
import { CategoryTabBar } from "../mds/category";
import {
  SearchTab,
  MyCourseHeader,
  StoreHeader,
} from "../mds/layout/mobile/headers";
import { Header } from "../mds/layout/desktop";
import SearchBar from "../domain/store/components/SearchBar";
import { isMobile, isDesktop, isTablet } from "react-device-detect";
const TestPage = () => {
  return (
    <Container>
      {isMobile && <StoreHeader />}
      {isDesktop && <Header />}
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  width: 100vw;
  height: 90vh;
`;
