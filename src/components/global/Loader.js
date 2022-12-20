import { Loading } from "@nextui-org/react";
import styled from "styled-components";

const Loader = ({ width, height }) => {
  return (
    <Container>
      <Loading width={width} height={height} color="secondary" size="lg" />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
