import styled from "styled-components";
import { COLOR } from "../../constants";

const BasicButton = ({
  children = null,
  backgroundColor = COLOR.BRAND_COLOR,
  fontColor = COLOR.WHITE,
  borderRadius = "1.25rem",
  width = "100%",
  height = "3.25rem",
  margin = "1rem 0 0.5rem 0",
  isDisabled = false,
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      backgroundColor={isDisabled ? COLOR.DISABLED : backgroundColor}
      borderRadius={borderRadius}
      height={height}
      width={width}
      fontColor={fontColor}
      margin={margin}
      isDisabled={isDisabled}
      onClick={handleClick}
    >
      <p>{children}</p>
    </Container>
  );
};

export default BasicButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: 0 1.5rem 0 1.5rem;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  p {
    color: ${(props) => props.fontColor};
  }
`;
