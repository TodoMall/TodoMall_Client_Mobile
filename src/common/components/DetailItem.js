import styled from "styled-components";
import { ArrowIcon } from "../components/icon";

const DetailItem = ({ children, handlePage }) => {
  return (
    <Container>
      {children}
      <ArrowIcon onClick={handlePage} />
    </Container>
  );
};

export default DetailItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
