import { RowBox } from "../box";
import { RadioIcon } from "../icon";
import styled from "styled-components";

const RadioBox = ({ children }) => {
  return (
    <Container>
      <RowBox>
        <RadioIcon />
        {children}
      </RowBox>
    </Container>
  );
};
export default RadioBox;

const Container = styled.div`
  margin: 0.5rem 0;
  p {
    display: flex;
    align-items: center;
  }
`;
