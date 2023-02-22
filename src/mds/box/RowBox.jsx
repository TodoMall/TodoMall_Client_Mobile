import styled from "styled-components";

const RowBox = ({
  children,
  width = "100%",
  height = "auto",
  padding = "0",
  margin = "0",
  alignItems = "center",
  justifyContent = "space-between",
}) => {
  return (
    <Container
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Container>
  );
};

export default RowBox;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;
