import styled from "styled-components";
import { SearchTab, MyCourseHeader } from "../mds/layout/mobile/headers";

const TestPage = () => {
  return (
    <Container>
      <MyCourseHeader />
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  width: 390px;
  height: 90vh;
  margin-top: 50px;
  border: 1px solid red;
`;
