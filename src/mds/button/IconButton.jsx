import styled from "styled-components";

const IconButton = ({
  children = null,
  width = "3rem",
  height = "3rem",
  onClick: handleClick = () => {},
}) => {
  return (
    <Container width={width} height={height} onClick={handleClick}>
      {children}
    </Container>
  );
};

export default IconButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
`;
