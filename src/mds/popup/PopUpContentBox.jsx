import styled from "styled-components";
import { COLOR } from "../../constants";

const PopUpContentBox = ({ children, padding = "2rem 1rem" }) => {
  return <Container padding={padding}>{children}</Container>;
};

export default PopUpContentBox;

const Container = styled.div`
  width: 18rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.WHITE};
  flex-direction: column;
  border-radius: 1.25rem;
  padding: ${(props) => props.padding};
`;
