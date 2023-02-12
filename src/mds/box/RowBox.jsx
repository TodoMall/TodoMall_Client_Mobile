import styled from "styled-components";

const RowBox = ({ children }) => {
  return <Container>{children}</Container>;
};

export default RowBox;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
