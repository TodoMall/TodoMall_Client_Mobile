import { Loading } from "@nextui-org/react";
import styled from "styled-components";

export const Loader = () => (
  <Container>
    <Loading color="secondary" size="lg" />
  </Container>
);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
