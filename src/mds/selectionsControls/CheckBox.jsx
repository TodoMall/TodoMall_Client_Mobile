import { RowBox } from "../box";
import { CheckIcon } from "../icon";
import styled from "styled-components";

const CheckBox = ({ children }) => {
  return (
    <Container>
      <RowBox>
        <CheckIcon />
        {children}
      </RowBox>
    </Container>
  );
};
export default CheckBox;
const Container = styled.div`
  margin: 0.5rem 0;
  p {
    display: flex;
    align-items: center;
  }
`;
