import styled from "styled-components";
import { EducationIcon, MyPageIcon, StoreIcon } from "../icon";

const DockBar = () => {
  return (
    <Container>
      <EducationIcon />
      <MyPageIcon />
      <StoreIcon />
    </Container>
  );
};

export default DockBar;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 0;
  border: 1px solid;
`;
