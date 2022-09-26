import { Loading } from "@nextui-org/react";
import styled from "styled-components";
import BottomNavBar from "./BottomNavBar";

export const Loader = () => {
  return (
    <Container>
      <Loading color="secondary" size="lg" />
      {/* <BottomNavBar position="TODOBOX" /> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
