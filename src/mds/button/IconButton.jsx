import styled from "styled-components";

const IconButton = ({
  children = null,
  onClick: handleClick = () => {},
  width = "3rem",
  height = "3rem",
}) => {
  return (
    <Container width={width} height={height} onClick={handleClick}>
      {children}
    </Container>
  );
};

export default IconButton;

const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
