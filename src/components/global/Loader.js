import { Loading } from "@nextui-org/react";
import styled from "styled-components";

const Loader = ({ width = "100vm", height = "100vh" }) => {
  return (
    <Container width={width} height={height}>
      <Loading color="secondary" size="lg" />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
