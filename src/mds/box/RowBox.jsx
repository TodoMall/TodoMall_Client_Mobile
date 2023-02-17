import styled from "styled-components";

const RowBox = ({ children, height = "auto", justifyContent = "center" }) => {
  return (
    <Container height={height} justifyContent={justifyContent}>
      {children}
    </Container>
  );
};

export default RowBox;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => props.height};
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: row;
  border: 1px solid red;
`;
