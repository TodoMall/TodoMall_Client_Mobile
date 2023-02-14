import styled from "styled-components";
import { COLOR } from "../constants";

const Card = ({
  children,
  height = "auto",
  backgroundColor = COLOR.MAIN50,
  borderRadius = "1.25rem",
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      height={height}
    >
      {children}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${(props) => props.height};
  margin: 0.5rem 0;
  padding: 1rem 1.25rem;
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
`;
