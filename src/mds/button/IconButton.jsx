import styled from "styled-components";

const IconButton = ({ children, onClick: handleClick = () => {} }) => {
  return <Container onClick={handleClick}>{children}</Container>;
};

export default IconButton;

const Container = styled.div``;
